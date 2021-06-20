/*!
 * current-device v0.10.1 - https://github.com/matthewhudson/current-device
 * MIT Licensed
 */
!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.device=e():n.device=e()}(window,function(){return function(n){var e={};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=0)}([function(n,e,o){n.exports=o(1)},function(n,e,o){"use strict";o.r(e);var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r=window.device,i={},a=[];window.device=i;var c=window.document.documentElement,d=window.navigator.userAgent.toLowerCase(),u=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];function l(n,e){return-1!==n.indexOf(e)}function s(n){return l(d,n)}function f(n){return c.className.match(new RegExp(n,"i"))}function b(n){var e=null;f(n)||(e=c.className.replace(/^\s+|\s+$/g,""),c.className=e+" "+n)}function p(n){f(n)&&(c.className=c.className.replace(" "+n,""))}function w(){i.landscape()?(p("portrait"),b("landscape"),y("landscape")):(p("landscape"),b("portrait"),y("portrait")),v()}function y(n){for(var e=0;e<a.length;e++)a[e](n)}i.macos=function(){return s("mac")},i.ios=function(){return i.iphone()||i.ipod()||i.ipad()},i.iphone=function(){return!i.windows()&&s("iphone")},i.ipod=function(){return s("ipod")},i.ipad=function(){var n="MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;return s("ipad")||n},i.android=function(){return!i.windows()&&s("android")},i.androidPhone=function(){return i.android()&&s("mobile")},i.androidTablet=function(){return i.android()&&!s("mobile")},i.blackberry=function(){return s("blackberry")||s("bb10")},i.blackberryPhone=function(){return i.blackberry()&&!s("tablet")},i.blackberryTablet=function(){return i.blackberry()&&s("tablet")},i.windows=function(){return s("windows")},i.windowsPhone=function(){return i.windows()&&s("phone")},i.windowsTablet=function(){return i.windows()&&s("touch")&&!i.windowsPhone()},i.fxos=function(){return(s("(mobile")||s("(tablet"))&&s(" rv:")},i.fxosPhone=function(){return i.fxos()&&s("mobile")},i.fxosTablet=function(){return i.fxos()&&s("tablet")},i.meego=function(){return s("meego")},i.cordova=function(){return window.cordova&&"file:"===location.protocol},i.nodeWebkit=function(){return"object"===t(window.process)},i.mobile=function(){return i.androidPhone()||i.iphone()||i.ipod()||i.windowsPhone()||i.blackberryPhone()||i.fxosPhone()||i.meego()},i.tablet=function(){return i.ipad()||i.androidTablet()||i.blackberryTablet()||i.windowsTablet()||i.fxosTablet()},i.desktop=function(){return!i.tablet()&&!i.mobile()},i.television=function(){for(var n=0;n<u.length;){if(s(u[n]))return!0;n++}return!1},i.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?l(screen.orientation.type,"portrait"):i.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?90!==Math.abs(window.orientation):window.innerHeight/window.innerWidth>1},i.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?l(screen.orientation.type,"landscape"):i.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?90===Math.abs(window.orientation):window.innerHeight/window.innerWidth<1},i.noConflict=function(){return window.device=r,this},i.ios()?i.ipad()?b("ios ipad tablet"):i.iphone()?b("ios iphone mobile"):i.ipod()&&b("ios ipod mobile"):i.macos()?b("macos desktop"):i.android()?i.androidTablet()?b("android tablet"):b("android mobile"):i.blackberry()?i.blackberryTablet()?b("blackberry tablet"):b("blackberry mobile"):i.windows()?i.windowsTablet()?b("windows tablet"):i.windowsPhone()?b("windows mobile"):b("windows desktop"):i.fxos()?i.fxosTablet()?b("fxos tablet"):b("fxos mobile"):i.meego()?b("meego mobile"):i.nodeWebkit()?b("node-webkit"):i.television()?b("television"):i.desktop()&&b("desktop"),i.cordova()&&b("cordova"),i.onChangeOrientation=function(n){"function"==typeof n&&a.push(n)};var m="resize";function h(n){for(var e=0;e<n.length;e++)if(i[n[e]]())return n[e];return"unknown"}function v(){i.orientation=h(["portrait","landscape"])}Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(m="orientationchange"),window.addEventListener?window.addEventListener(m,w,!1):window.attachEvent?window.attachEvent(m,w):window[m]=w,w(),i.type=h(["mobile","tablet","desktop"]),i.os=h(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]),v(),e.default=i}]).default});
//# sourceMappingURL=current-device.min.js.map
var infoBox = function (container) {
    var box = container;
    var _open = function () {
        box.classList.remove('d-none');
        app.animateCSS(box,'fadeIn');
    };
    var _close = function () {
        app.animateCSS(box, 'fadeOut',function(){box.classList.add('d-none')});
        //box.classList.add('d-none');
    };
    $(box).find('[data-close="info"]').click(_close);
    return {
        open: _open,
        close: _close
    }
};
function loadScene(sceneName){
    if (device.desktop()){
        var layerClass = ".left-layer";
        var layers = document.querySelectorAll(layerClass);
        for (const layer of layers) {
            layer.classList.toggle("active");
        }
    }

    let allScene = document.querySelectorAll('.scene');
    for (const scene of allScene) scene.classList.add('d-none');
    document.querySelector(`[data-scene="${sceneName}"]`).classList.remove('d-none');
    switch (sceneName) {
        case 'uzi':
            uziScene.renderScene();
            break;
        case 'scene-mrt':
            mrtScene.renderScene();
            break;
        case 'scene-lab':
            labScene.renderScene();
            break;
        case 'scene-ekg':
            ekgScene.renderScene();
            break;
        default:
            break;
    }
}

$('[data-loadscene]').click(function(e){
    let el = e.target.closest('[data-loadscene]');
    // loadScene(e.target.dataset.loadscene);
    loadScene(el.dataset.loadscene);
});
let officeScene = {};
officeScene.domScene = document.querySelector('[data-scene="office"]');
officeScene.introInfo = new infoBox(document.getElementById('introBox'));

officeScene.examinationBox = (function(){
    let _result = {}
    let _dom = document.getElementById('examinationBox');
    let _modal = new infoBox(_dom);
    let allCB = _dom.querySelectorAll('input[type="checkbox"]');
    let _open = function(){
        _modal.open();
    }
    let _createResult = function () {
        _result = {};
        for (let i = 0; i < allCB.length; i++) {
            let cb = allCB[i]
            _result[cb.name] = {
                needCheck: ((cb.dataset['need'] == undefined) ? false : true),
                isChecked: cb.checked,
                value: cb.value
            };
        }
    };
    let _check = function(){
        _createResult();
        for(let i=0;i<allCB.length;i++){
            allCB[i].disabled = true;
            setTimeout(() => {
                let selector = (_result[allCB[i].name].needCheck == _result[allCB[i].name].isChecked) ? '.succes-ex' :'.wrong-ex';
                allCB[i].parentNode.querySelector(selector).classList.remove('d-none');
                if (i == allCB.length - 1) _dom.querySelector('[data-btn="reset"]').classList.remove('d-none');
            }, 100*i);
        }
    };

    let _reset = function(){
        $(_dom).find('[data-res]').addClass('d-none');
        for (let i = 0; i < allCB.length; i++) {
            _result[allCB[i].name].isChecked = false;
            allCB[i].checked = false;
            allCB[i].disabled = false;
        }
        _dom.querySelector('[data-btn="reset"]').classList.add('d-none');
    };
    let _getResult = function(){
        return _result;
    };
    let _next = function(){
        _createResult();
        _modal.close();
        setTimeout(() => {
            officeScene.therapyHBox.open();
        }, 300);
    }

    return {
        open : _open,
        check: _check,
        reset: _reset,
        getResult:_getResult,
        next: _next
    }

})();



officeScene.therapyHBox = (function(){
    let _dom = document.getElementById('therapyHBox');
    let allCB = _dom.querySelectorAll('input[type="checkbox"]');
    let _modal = new infoBox(_dom);
    let _result = { };
    let _open = function(){
        _modal.open();
    };
    let _createResult = function(){
        _result = {};
        for(let i=0;i<allCB.length;i++){
            let cb = allCB[i]
            _result[cb.name] = {
                needCheck: ((cb.dataset['need'] == undefined)?false:true),
                isChecked: cb.checked,
                value:cb.value
            };
        }
    };
    let _check = function(){
        _createResult();
        for (let i = 0; i < allCB.length; i++){
            let cb = allCB[i];
            cb.disabled = true;
            let selector = (_result[cb.name].isChecked == _result[cb.name].needCheck) ? '.succes-ex' : '.wrong-ex';
            setTimeout(() => {
                cb.parentNode.querySelector(selector).classList.remove('d-none');
                if (i == allCB.length - 1) _dom.querySelector('[data-btn="reset"]').classList.remove('d-none');
            }, 100*i);
        }
    }

    let _reset = function () {
        _result = {};
        $(_dom).find('[data-res]').addClass('d-none');
        for (let i = 0; i < allCB.length; i++) {
            allCB[i].checked = false;
            allCB[i].disabled = false;
        }
        _dom.querySelector('[data-btn="reset"]').classList.add('d-none');
    };

    let _getResult = function(){
        return _result;
    }

    let _next = function(){
        _createResult();
        _modal.close();
        officeScene.finalBox.open();
    };

    return {
        open:_open,
        check:_check,
        reset: _reset,
        next:_next,
        getResult: _getResult
    }

})();

officeScene.finalBox = (function(){
    let _dom = document.getElementById('finalHBox');
    let _modal = new infoBox(_dom);
    let blockEx = _dom.querySelector('[data-block="ex"]');
    let blockTh = _dom.querySelector('[data-block="th"]');

    let _open = function(){
        _modal.open();
        let resultTH = officeScene.therapyHBox.getResult();
        let resultEX = officeScene.examinationBox.getResult();
        console.log(resultTH)
        blockEx.innerHTML = '';
        blockTh.innerHTML = '';
        for(key in resultTH){
            let styleText = '';
            let flag = (resultTH[key].isChecked == resultTH[key].needCheck);
            if (!resultTH[key].isChecked && flag) styleText = 'text-decoration: line-through;'
            let txtInfo = (flag) ? 'Верно' :'Не назначено';
            if(!resultTH[key].needCheck && resultTH[key].isChecked) txtInfo = 'Не верно';
            blockTh.innerHTML += getHtmlResult(resultTH[key].value, flag, txtInfo,styleText);
        }
        for(key in resultEX){
            let styleText = '';
            let flag = (resultEX[key].isChecked == resultEX[key].needCheck);
            if (!resultEX[key].isChecked && flag) styleText = 'text-decoration: line-through;';
            let txtInfo = (flag) ? 'Верно' : 'Не выполнено';
            if(key == 'ex_3' && !flag) txtInfo = 'Лишнее исследование';
            blockEx.innerHTML += getHtmlResult(resultEX[key].value, flag, txtInfo, styleText);
        }
    }
    let getHtmlResult = function(txt,isSucces,txtInfo,styleText=''){
        let classCss = (isSucces) ? 'succes-ex' :'wrong-ex';

        return `<div class="result-block">
            <span class="result-item-text" style="${styleText}">${txt}</span>
            <span class="result-item ${classCss}">${txtInfo}</span>
        </div>`
    };

    return {
        open:_open
    }

})();

officeScene.toggleSelectContainer = function(){
    let b = officeScene.domScene.querySelector('.select-box-wrapper');
    let animationName;
    if (b.classList.contains('slideDownChat')){
        b.classList.remove('animated','slideDownChat');
        b.classList.add('animated','slideUpChat');
        animationName = 'slideUpChat'
    }else{
        b.classList.remove('animated', 'slideUpChat')
        b.classList.add('animated', 'slideDownChat');
        animationName = 'slideDownChat'
    }
    function handleAnimationEnd() {
        //b.classList.remove('animated', animationName)
        // b.querySelector('svg').style.transform = 'rotate(180deg)';
        b.removeEventListener('animationend', handleAnimationEnd)
    }

    b.addEventListener('animationend', handleAnimationEnd)
    //app.animateCSS(b,'slideDownChat',function(){b.classList.add('d-none')});
}

officeScene.startAndShow = function(){
    officeScene.introInfo.close();
    officeScene.examinationBox.open();
};



var app = {
    start: function(){
        loadScene('office')
        officeScene.introInfo.open();
        // setTimeout(() => {
        //     selectBox.addSelectCardBlock('b1')
        // }, 1000);
    },
    animateCSS: function (element, animationName, callback) {
        const node = element;
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }
}