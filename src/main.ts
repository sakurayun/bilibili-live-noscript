let ROOMID, CSRF_TOKEN;
let banList = [];
async function main() {

    ROOMID = (<any>window).BilibiliLive.ROOMID;
    CSRF_TOKEN = getCookie('bili_jct');
    await getBanList(ROOMID, 1);
    $('.admin-drop-ctnr').append('<p id="wryyyyyy" data-v-61bb705a="" class="drop-menu-item ts-dot-4">一键禁言脚本哥</p>');

    $('#wryyyyyy').click(function (e) {
        //sendToastInfo('你好',1000,e);
        //let ret = await ban(405793756, 720);
        //if (ret) {
        //sendToastInfo('封禁成功', 1000, e);
        //}
    });
}

/**
 * 
 * @param userId 
 * @param time 
 */
async function ban(userId: number, time: number): Promise<boolean> {
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
        if (await unban(userId)) {
            //加 大 力 度
            return await ban(userId, time);
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
 * 
 * @param id 
 */
async function unban(id: number): Promise<boolean> {
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
    if (ret.data.code == 0) {
        return true;
    }
    return false;
}

/**
 * 
 * @param roomId 
 * @param page 
 */
async function getBanList(roomId: number, page: number): Promise<boolean> {
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
        for (const element of ret.data) {
            //console.log(element);
            banList.push(element);
        }
        return await getBanList(roomId, page + 1);
    }
    return true;
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

function sendToastInfo(text, time, e: MouseEvent) {
    sendToast(text, 'info', time, e.clientX, e.clientY);
}

function sendToastError(text, time, e: MouseEvent) {
    sendToast(text, 'error', time, e.clientX, e.clientY);
}

function sendToastWarning(text, time, e: MouseEvent) {
    sendToast(text, 'caution', time, e.clientX, e.clientY);
}

function sendToast(text, type, time, clientX, clientY) {

    let id = (new Date()).valueOf();
    $('body').append(`
        <div class="link-toast ${type}" msg-id="${id}" style="left: ${clientX + 10}px; top: ${clientY + 20}px;">
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