
let MinterBalance = (function () {
let numCoin;
let summ;
let summStr='';
const prefixClass='val-';
let render=true;
    MinterBalance.api=null;
    function MinterBalance(array, JQobj, callback, renderCall=null) {
        if (JQobj==null) render=false;
        summ=0;
        numCoin=0;
let html = '';
let oneBipMoney=false;
        jQuery.each(array, function (key, value) {
            let valueF='';
         let FeeValue=minterUtil.convertFromPip(value);


            if (key!==params.MinterDefaultCoin) {
                numCoin++;
                getSumm(value, key, callback, renderCall);
                valueF= parseFloat(FeeValue);
                // valueF= printVal(getAmount(value),TypeVal.Money);
            } else {
                if (summStr==='') summStr=FeeValue ;
                let price=parseFloat(FeeValue);
                summ+=price;
                valueF= price;
                oneBipMoney=true;
                if ( renderCall!=null) renderCall(price,params.MinterDefaultCoin,price);
            }

            if (render) {
                html += '<div class="col-4 offset-md-2 offset-xl-3 col-md-4 col-xl-4 text-right">'+BeautyNum(valueF)+'</div>' +
                '<div class="col-4 col-md-3 col-xl-3 pl-0 coin">'+key+'</div>' +
                '<div class="col-4 col-md-2 col-xl-2 pl-0 '+prefixClass+key+' small"></div>';
            }

        });
        if (render) JQobj.html(html);
        if (oneBipMoney && numCoin===0 ) callback(summ);
    }
    function getSumm(amound, coin, callback, renderCall) {
        MinterBalance.api( MinterBalance.api.SellCoin, amound, {'coin_to_sell':coin,'coin_to_buy':params.MinterDefaultCoin}, function (value) {

            numCoin--;
            let price=parseFloat(minterUtil.convertFromPip(value.result.will_get));

            if ( renderCall!=null) renderCall(minterUtil.convertFromPip(amound),coin,price);
            summ+=price;
            if (price>0.0049)
                if (render){
                    jQuery(`.${prefixClass}${coin}`).text(BeautyNum(price)+' '+params.MinterDefaultCoin);
        }
            if (summStr==='') summStr=minterUtil.convertFromPip(value.result.will_get) ; else
                summStr=summStr+minterUtil.convertFromPip(value.result.will_get );
            if (numCoin===0) callback(parseFloat(summStr));
        });
    }

    return MinterBalance;
})();

window.MinterBalance = MinterBalance;