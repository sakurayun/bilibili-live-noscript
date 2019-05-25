// ==UserScript==
// @name         杀脚本哥的脚本v20190525
// @namespace    https://vtbs.moe/
// @version      2.0.190525
// @description  bug还有一吨...
// @author       bilibili-dd-center/3Shain
// @include      https://live.bilibili.com/*
// @downloadURL  https://github.com/bilibili-dd-center/bilibili-live-noscript/raw/master/dist/lib.user.js
// @updateURL    https://github.com/bilibili-dd-center/bilibili-live-noscript/raw/master/dist/lib.user.js     
// @grant        none
// ==/UserScript==
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * main.ts
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ROOMID, CSRF_TOKEN;
var currentBlockList = new Array();
var blockList = [];
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            ROOMID = window.BilibiliLive.ROOMID;
            CSRF_TOKEN = getCookie('bili_jct');
            $('.attention-btn-ctnr').prepend('<div id="wryyyyyy" style="width:unset;background-color: #f47f9e;margin-right:10px;border-radius: 0 4px 4px 0;" data-v-5d947ed0="" class="left-part live-skin-highlight-bg dp-i-block pointer p-relative"><span data-v-5d947ed0="" class="follow-text v-middle d-inline-block">重置所有30天禁言(较为耗时)</span></div>');
            $('.attention-btn-ctnr').prepend('<div id="clear" style="width:unset;background-color: #999;" data-v-5d947ed0="" class="left-part live-skin-highlight-bg dp-i-block pointer p-relative"><span data-v-5d947ed0="" class="follow-text v-middle d-inline-block">对比最新列表禁言</span></div>');
            $('#wryyyyyy').click(function (e) { return __awaiter(_this, void 0, void 0, function () {
                var i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sendToastInfo('获取在线黑名单,可能需要较长时间...', 2000, e);
                            return [4 /*yield*/, getOnlineBlockList()];
                        case 1:
                            blockList = _a.sent();
                            sendToastInfo('获取当前禁言列表,可能需要较长时间...', 2000, e);
                            return [4 /*yield*/, getCurrentBlockList(ROOMID)];
                        case 2:
                            currentBlockList = _a.sent();
                            for (i = 0; i < blockList.length; i++) {
                                (function (i) {
                                    var _this = this;
                                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, block(blockList[i], 720)];
                                                case 1:
                                                    if (_a.sent())
                                                        sendToastWarning("\u5DF2\u5C01\u7981\u7528\u6237" + blockList[i], 200, e);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }, 300 * i);
                                })(i);
                            }
                            ;
                            return [2 /*return*/];
                    }
                });
            }); });
            $('#clear').click(function (e) { return __awaiter(_this, void 0, void 0, function () {
                var arr, _loop_1, _i, blockList_1, v, i;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            sendToastInfo('获取在线黑名单,可能需要较长时间...', 2000, e);
                            return [4 /*yield*/, getOnlineBlockList()];
                        case 1:
                            blockList = _a.sent();
                            sendToastInfo('获取当前禁言列表,可能需要较长时间...', 2000, e);
                            return [4 /*yield*/, getCurrentBlockList(ROOMID)];
                        case 2:
                            currentBlockList = _a.sent();
                            arr = [];
                            _loop_1 = function (v) {
                                if (currentBlockList.findIndex(function (ele) { return ele.uid === v; }) === -1) {
                                    arr.push(v);
                                }
                            };
                            for (_i = 0, blockList_1 = blockList; _i < blockList_1.length; _i++) {
                                v = blockList_1[_i];
                                _loop_1(v);
                            }
                            if (arr.length === 0) {
                                sendToastInfo('已是最新列表', 5000, e);
                            }
                            for (i = 0; i < arr.length; i++) {
                                (function (i) {
                                    var _this = this;
                                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, block(arr[i], 720)];
                                                case 1:
                                                    if (_a.sent())
                                                        sendToastWarning("\u5DF2\u5C01\u7981\u7528\u6237" + arr[i], 200, e);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }, 300 * i);
                                })(i);
                            }
                            ;
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
/**
 * 禁言用户
 * @param userId
 * @param time 禁言时间/小时
 */
function block(userId, time) {
    return __awaiter(this, void 0, void 0, function () {
        var ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, $.ajax({
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
                    })];
                case 1:
                    ret = _a.sent();
                    if (!(ret.code == -400)) return [3 /*break*/, 5];
                    return [4 /*yield*/, unblock(userId)];
                case 2:
                    if (!_a.sent()) return [3 /*break*/, 4];
                    return [4 /*yield*/, block(userId, time)];
                case 3: 
                //加 大 力 度
                return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/, false];
                case 5:
                    if (ret.code == -403) {
                        //forbiden
                        return [2 /*return*/, false];
                    }
                    else {
                        return [2 /*return*/, true];
                    }
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
}
/**
 * 解除禁言
 * @param id
 */
function unblock(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var id, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = currentBlockList.find(function (element) { return element.uid === userId; }).id;
                    return [4 /*yield*/, $.ajax({
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
                        })];
                case 1:
                    ret = _a.sent();
                    if (ret.code == 0) {
                        return [2 /*return*/, true];
                    }
                    return [2 /*return*/, false];
            }
        });
    });
}
/**
 * 获取禁言列表
 * @param roomId
 * @param page
 */
function getCurrentBlockList(roomId, page) {
    if (page === void 0) { page = 1; }
    return __awaiter(this, void 0, void 0, function () {
        var ret, array, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, $.ajax({
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
                    })];
                case 1:
                    ret = _c.sent();
                    if (!(ret.code === 0 && ret.data.length > 0)) return [3 /*break*/, 3];
                    array = ret.data;
                    _b = (_a = array).concat;
                    return [4 /*yield*/, getCurrentBlockList(roomId, page + 1)];
                case 2: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                case 3: return [2 /*return*/, []];
            }
        });
    });
}
function getOnlineBlockList() {
    return __awaiter(this, void 0, void 0, function () {
        var ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, $.ajax({
                        type: 'get',
                        url: 'https://raw.githubusercontent.com/bilibili-dd-center/bilibili-live-noscript/master/blacklist.txt',
                        dataType: 'text'
                    })];
                case 1:
                    ret = _a.sent();
                    return [2 /*return*/, ret.split(/[\s\n]/).map(function (value) { return Number(value); })];
            }
        });
    });
}
function getCookie(name) {
    var arr;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2]);
    }
    else {
        return null;
    }
}
;
function sendToastInfo(text, time, e) {
    sendToast(text, 'info', time, e);
}
function sendToastError(text, time, e) {
    sendToast(text, 'error', time, e);
}
function sendToastWarning(text, time, e) {
    sendToast(text, 'caution', time, e);
}
function sendToast(text, type, time, e) {
    var id = (new Date()).valueOf();
    $('body').append("\n        <div class=\"link-toast " + type + "\" msg-id=\"" + id + "\" style=\"left: " + (e.clientX + 20) + "px; top: " + (e.clientY + 20) + "px;\">\n            <span class=\"toast-text\">" + text + "</span>\n        </div>\n    ");
    var ele = $("div.link-toast[msg-id=" + id + "]");
    ele.slideDown('normal', function () {
        setTimeout(function () {
            ele.fadeOut('normal', function () {
                ele.remove();
            });
        }, time);
    });
}
setTimeout(main, 4000);


/***/ })

/******/ });