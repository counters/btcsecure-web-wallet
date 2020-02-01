
function _setClass(selector, _class) {
    let removeClass = 'd-none';


    if (selector.hasClass(removeClass)) {
        selector.removeClass(removeClass)
    }
    if (!selector.hasClass(_class)) selector.addClass(_class);
}
function setDisplay(selector, display=true) {
    let _class = 'd-none';

    if (display===true) {
        if (selector.hasClass(_class)) {
            selector.removeClass(removeClass)
        }
    } else {
        if (!selector.hasClass(_class)) selector.addClass(_class);
    }
}

function setClass(selector, _class) {
    if (!selector.hasClass(_class)) selector.addClass(_class);
}

window.setDisplay = setDisplay;
window.setClass = setClass;

function selectText(elementId) {
    let doc = document,
        text = doc.getElementById(elementId),
        range,
        selection;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }}
window.selectText = selectText;

window.isset = function (val) {
    try {
        if (typeof (val) !== 'undefined' && val !== null) return true;
    } catch (e) {
        return false;
    }
    return false;
};

window.issetMx = function () {
    try {
        if (localStorage.hasOwnProperty('mx')) return true;
    } catch (e) {
        // return false;
    }
    window.location.href = params.HttpsUrl + '/';
    return false;
};