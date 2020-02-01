

let params = (function () {

    params.HttpsUrl = 'https://wallet.btcsecure.io';
    params.HttpsApi = 'https://minter-msk.interchain.zone';
    // params.HttpsGateApi = 'https://gate-api.minter.network/api/v1';
    params.HttpsGateApi = 'https://gate.minter.network/api/v1';
    // params.HttpsApi = 'https://api.bip.dev/api/price';
    params.MinterDefaultCoin = 'BIP';

    function params() {
    }

    return params;
})();
window.params = params;