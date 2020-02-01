let BipDevAPI = (function (url='https://api.bip.dev/api') {

    BipDevAPI.Callback=null;
    BipDevAPI.Price='price';
    // BipDevAPI.Api='https://api.bip.dev/api';
    let urlApi= url + '/' ;

    function BipDevAPI(method, id, params, callback) {
        if (method === BipDevAPI.Price) return (getPrice(callback));
    }

    function getPrice(callback) {
        let url = urlApi + BipDevAPI.Price;
        return get(url, function (result) {
            let array = result.data.price;
            // console.log('getPrice', result, array);
            callback(array/10000);

        });
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
    return BipDevAPI;
});

window.BipDevAPI = BipDevAPI;