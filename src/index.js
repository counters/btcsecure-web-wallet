// import moment from 'moment';
// import {Minter, prepareLink} from "minter-js-sdk";
import 'bootstrap';

// import 'javascript-blowfish';
const Blowfish = require('javascript-blowfish');
// import {Blowfish} from "javascript-blowfish";
// import 'qrcodejs';
// const QRCode = require('qrcodejs');
// import {QRCode} from "qrcodejs";
// import '../node_modules/qrcodejs/qrcode.min.js';
// const QRCode = require('../node_modules/qrcodejs/qrcode.min.js');

import './js/test.js';
import './js/function.js';
import './js/params.js';

import './js/locale/en.js';
import './js/locale/ru.js';
// import en from './js/locale/en.js';
// import 'jquery';
import jQuery from "jquery";

import './js/CopyString.js';
import './js/MinterAPI.js';
import './js/MinterBalance.js';
import './js/InteractiveToast.js';

import './js/BipDevAPI.js';


import { parsePhoneNumberFromString } from 'libphonenumber-js'
window.parsePhoneNumberFromString = parsePhoneNumberFromString;


// import BipDevAPI from "";
// const BipDevAPI = require('./js/BipDevAPI.js');
// import {BipDevAPI} from "./js/BipDevAPI.js";

// import MinterAPI from "./js/MinterAPI.js";
// const MinterAPI = require('./js/MinterAPI.js');
// import {MinterAPI} from "./js/MinterAPI.js";
const minterUtil = require('minterjs-util');

// const jQuery = require('jquery');
const base64url = require('base64url');
// import {generateWallet} from "./minterjs-wallet";
// import {minterWallet} from "./minterjs-wallet";
// const minterWallet = require('minterjs-wallet');

let numeral = require('numeral');
window.numeral = numeral;


// console.log('Version 10');

window.jQuery = jQuery;
// window.Blowfish = Blowfish;

window.minterUtil = minterUtil;

// window.MinterAPI = MinterAPI;
// window.BipDevAPI = BipDevAPI;

// let minterApi = MinterApi(params.HttpsApi);

let language = navigator.language || navigator.userLanguage;
const langcode =  language.split('-')[0];
if (isset(langcode)) window.trans = window[langcode]; else window.trans = en;

// console.log(language, langcode );

    function translatePage(){
        // console.log("translatePage()");
        jQuery('.trans').each(function(i) {
            const trans = jQuery(this).data('trans');
            jQuery(this).text(window.trans[trans]);
        });
    }

function getUrl(mnemonic, password) {
    let bf = new Blowfish(password);
    const encrypted = bf.encrypt(mnemonic);
    const base64urlData = base64url(encrypted);

    // console.log(base64urlData);
    return base64urlData;
}
window.getUrl = getUrl;
 
function decodeURL(base64urlData, password="1234"){
    let rawData = base64url.decode(base64urlData);
    let bf = new Blowfish(password);
    let _data = bf.decrypt(rawData);
    _data = bf.trimZeros(_data);
    // console.log(_data);
    return _data;
}
window.decodeURL = decodeURL;

function getWallet(mnemonic){
    return minterWallet.walletFromMnemonic(mnemonic);
}
window.getWallet = getWallet;
let copyString = CopyString(trans.Copy);
window.copyString = copyString;
// new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");

// console.log(language, langcode, );

jQuery( document ).ready(function() {

    copyString();
    // console.log('Hello World from JQuery');





    // localStorage.hasOwnProperty('mx')



 /*   var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "http://jindo.dev.naver.com/collie",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : 2
    });*/
    // new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");

    translatePage();

/*    const wallet = minterWallet.generateWallet();
    console.log(wallet.getMnemonic());
    console.log(wallet.getAddressString());
    const wallet2 = minterWallet.walletFromMnemonic(wallet.getMnemonic());
    console.log(wallet2.getAddressString());*/

    // jQuery.ajaxSetup({ cache: false });
    jQuery.ajaxSetup({ cache: true });
/*    jQuery.getScript( "https://unpkg.com/minterjs-wallet", function() {
        console.log( "https://unpkg.com/minterjs-wallet minterjs_wallet" );

        const wallet = minterWallet.generateWallet();
        console.log(wallet.getMnemonic());
        console.log(wallet.getAddressString());
        const wallet2 = minterWallet.walletFromMnemonic(wallet.getMnemonic());
        console.log(wallet2.getAddressString());

    }, true);*/
/*    jQuery.getScript( "/js/minterjs_wallet.bundle.js", function() {
        console.log( "minterjs_wallet" );
        const wallet = minterWallet.generateWallet();
        console.log(wallet.getMnemonic());
        var bf = new Blowfish("1234");
        var encrypted = bf.encrypt(wallet.getMnemonic());
        var base64urlData = base64url(encrypted);
        console.log(base64urlData);
        const mnemonic = decodeURL(base64urlData);
        console.log(getWallet(mnemonic));
        // var decrypted = bf.decrypt(encrypted);
        // decrypted = bf.trimZeros(decrypted); // for string/text information
        // console.log(decrypted);
        console.log(wallet.getAddressString());
        const wallet2 = minterWallet.walletFromMnemonic(wallet.getMnemonic());
        console.log(wallet2.getAddressString());
    });*/
    // const wallet = generateWallet();
    // console.log(wallet);

});


/*
const minter = new Minter({apiType: 'node', baseURL: 'https://api.mscan.dev/391f622a-3aee-52e4-94ed-6806022fc80d/node/'});
const minter = new Minter({apiType: 'node', baseURL: 'https://minter-msk.interchain.zone/'});

minter.estimateCoinSell({
    coinToSell: 'MNT',
    valueToSell: '10',
    coinToBuy: 'ROBOT',
})
    .then((result) => {
        console.log(result.will_get, result.commission);
        // 123, 0.1
    })
    .catch((error) => {
        // ...
    });*/
