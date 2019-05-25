/**
 * main.ts
 */

let ROOMID, CSRF_TOKEN;
let currentBlockList = new Array<{
    id: number,
    admin_uname: string,
    adminid: number,
    block_end_time: string,
    ctime: string,
    type: number,
    uid: number,
    uname: string
}>();
let blockList = [];

async function main() {
    ROOMID = (<any>window).BilibiliLive.ROOMID;
    CSRF_TOKEN = getCookie('bili_jct');
    currentBlockList = await getCurrentBlockList(ROOMID);

    console.log(currentBlockList.length);//DEBUG

    $('.admin-drop-ctnr').append('<p id="wryyyyyy" data-v-61bb705a="" class="drop-menu-item ts-dot-4">一键禁言脚本哥</p>');
    $('.admin-drop-ctnr').append('<p id="clear" data-v-61bb705a="" class="drop-menu-item ts-dot-4">捡漏</p>');
    $('#wryyyyyy').click(async (e) => {
        let ret = await block(405793756, 720);
        if (ret) {
            sendToastInfo('封禁成功', 1000, e);
        }
    });
}

/**
 * 禁言用户
 * @param userId 
 * @param time 禁言时间/小时
 */
async function block(userId: number, time: number): Promise<boolean> {
    let ret = await $.ajax({
        type: 'post',
        url: '//api.live.bilibili.com/banned_service/v2/Silent/add_block_user',
        crossDomain: true,
        dataType: 'json',
        data: {
            roomid: ROOMID,
            block_uid: userId,
            hour: time,
            csrf: CSRF_TOKEN,
            csrf_token: CSRF_TOKEN,
            visit_id: null
        },
        xhrFields: {
            withCredentials: true
        }
    });
    if (ret.code == -400) {
        if (await unblock(userId)) {
            //加 大 力 度
            return await block(userId, time);
        }
        return false;
    } else if (ret.code == -403) {
        //forbiden
        return false;
    }
    else {
        return true;
    }
}
/**
 * 解除禁言
 * @param id 
 */
async function unblock(userId: number): Promise<boolean> {
    let id = currentBlockList.find((element) => { return element.uid === userId }).id;
    let ret = await $.ajax({
        type: 'post',
        url: '//api.live.bilibili.com/banned_service/v1/Silent/del_room_block_user',
        crossDomain: true,
        dataType: 'json',
        data: {
            roomid: ROOMID,
            id: id,
            csrf: CSRF_TOKEN,
            csrf_token: CSRF_TOKEN,
            visit_id: null
        },
        xhrFields: {
            withCredentials: true
        }
    });
    if (ret.code == 0) {
        return true;
    }
    return false;
}

/**
 * 获取禁言列表
 * @param roomId 
 * @param page 
 */
async function getCurrentBlockList(roomId: number, page: number = 1): Promise<Array<any>> {
    let ret = await $.ajax({
        type: 'get',
        url: '//api.live.bilibili.com/liveact/ajaxGetBlockList',
        crossDomain: true,
        dataType: 'json',
        data: {
            roomid: roomId,
            page: page
        },
        xhrFields: {
            withCredentials: true
        }
    });
    if (ret.code === 0 && ret.data.length > 0) {
        let array = <Array<any>>ret.data;
        return array.concat(await getCurrentBlockList(roomId, page + 1));
    }
    return [];
}

async function getOnlineBlockList(): Promise<Array<number>> {

    return [];
}

function getCookie(name): String {
    let arr;
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
    } else {
        return null;
    }
};

function sendToastInfo(text, time, e: { clientX: number, clientY: number }) {
    sendToast(text, 'info', time, e);
}

function sendToastError(text, time, e: { clientX: number, clientY: number }) {
    sendToast(text, 'error', time, e);
}

function sendToastWarning(text, time, e: { clientX: number, clientY: number }) {
    sendToast(text, 'caution', time, e);
}

function sendToast(text, type, time, e: { clientX: number, clientY: number }) {

    let id = (new Date()).valueOf();
    $('body').append(`
        <div class="link-toast ${type}" msg-id="${id}" style="left: ${e.clientX + 20}px; top: ${e.clientY + 20}px;">
            <span class="toast-text">${text}</span>
        </div>
    `);
    let ele = $(`div.link-toast[msg-id=${id}]`);
    ele.slideDown('normal', function () {
        setTimeout(function () {
            ele.fadeOut('normal', function () {
                ele.remove();
            });
        }, time);
    });
}

setTimeout(main, 1000);