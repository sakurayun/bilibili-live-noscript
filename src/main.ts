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

    $('.admin-drop-ctnr').append('<p id="wryyyyyy" data-v-61bb705a="" class="drop-menu-item ts-dot-4">重置所有30天禁言<br><b>///需要较长时间///</b></p>');
    $('.admin-drop-ctnr').append('<p id="clear" data-v-61bb705a="" class="drop-menu-item ts-dot-4">对比最新列表禁言');
    $('#wryyyyyy').click(async (e) => {
        sendToastInfo('获取当前禁言列表,可能需要较长时间...', 1000, e);
        currentBlockList = await getCurrentBlockList(ROOMID);

        for (var i = 0; i < blockList.length; i++) {
            (function (i) {
                setTimeout(async () => {
                    if (await block(blockList[i], 720))
                    sendToastWarning(`已封禁用户${blockList[i]}`, 200, e);
                }, 300 * i);
            })(i);
        };
    });
    $('#clear').click(async (e) => {
        sendToastInfo('获取在线黑名单,可能需要较长时间...', 1000, e);
        blockList = await getOnlineBlockList();
        sendToastInfo('获取当前禁言列表,可能需要较长时间...', 1000, e);
        currentBlockList = await getCurrentBlockList(ROOMID);

        let arr = [];
        for(let v of blockList){
            if(currentBlockList.findIndex((ele)=>{return ele.uid===v})===-1){
                arr.push(v);
            }
        }
        if(arr.length===0){
            sendToastInfo('已是最新列表', 5000, e);
        }
        for (var i = 0; i < arr.length; i++) {
            (function (i) {
                setTimeout(async () => {
                    if (await block(arr[i], 720))
                        sendToastWarning(`已封禁用户${arr[i]}`, 200, e);
                }, 300 * i);
            })(i);
        };
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
    let ret = await $.ajax({
        type: 'get',
        url: 'https://raw.githubusercontent.com/bilibili-dd-center/bilibili-live-noscript/master/blacklist.txt',
        dataType: 'text'
    });
    return (<string>ret).split(/[\s\n]/).map((value) => { return Number(value) });
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