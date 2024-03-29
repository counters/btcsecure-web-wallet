//Resources/private/minter/js/MinterAPI.js
let MinterApi = (function (url) {
let urlApi= url + '/' ;
    // this.urlApi = urlApi;
    MinterApi.Callback=null;
    MinterApi.Address='address';
    MinterApi.SellCoin='estimate_coin_sell';
    MinterApi.CoinInfo='coin_info';

    MinterApi.PipInBIP='coin_info';
//https://minter-nodes-1.mainnet.minter.network/estimate_coin_sell?coin_to_sell=BTCSECURE&coin_to_buy=BIP&value_to_sell=1000&height=0

    function MinterApi(method, id, params, callback, height = 0) {
        // console.log("minterApi", method, id, params);
        //
        if (method === MinterApi.Address) return (Address(id, height, callback));
        else if (method === MinterApi.SellCoin) return (SellCoin(params.coin_to_sell, params.coin_to_buy, id, height, callback));
        else if (method === MinterApi.CoinInfo) return (CoinInfo(id, height, callback));
    }

    function Status(id, height=0) {

    }
    function Address(address, height, callback) {
        // const getparams = $.param(params, true);
        let url=urlApi+MinterApi.Address+'?address='+address+'&height='+height;
return get(url, callback);
    }
    function SellCoin(coin_to_sell, coin_to_buy, value_to_sell, height, callback) {
        // const getparams = $.param(params, true);
        let url=urlApi+MinterApi.SellCoin+'?coin_to_sell='+coin_to_sell+'&coin_to_buy='+coin_to_buy+'&value_to_sell='+value_to_sell+'&height='+height;
return get(url, callback);
    }

    function CoinInfo(symbol, height, callback) {
        let url = urlApi+ MinterApi.CoinInfo + '?symbol=' + symbol + '&height=' + height;
        return get(url, callback);
    }

    function get(url, callback) {
        // console.log('get '+url);
        jQuery.ajax({
            method: "GET",
            url: url
        }).done(function (data) {
            // console.log('get ajax '+url, data);
            callback(data);
        });
    }
    // console.log(urlApi);
    return MinterApi;
});

window.MinterApi = MinterApi;