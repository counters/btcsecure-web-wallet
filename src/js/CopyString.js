let CopyString = (function (_message=null) {
let message= _message;
    CopyString.update = function () {
        eventClick();
    };

    function CopyString() {
        jQuery( "main" ).append("<div id='copy-string-buffer' class='d-none'></div>");
        eventClick();
    }
    function eventClick() {
        // console.log('eventClick()');
        jQuery(".copy-string").click(function () {
            let value = jQuery(this).data("value");
            let buffer = jQuery('#copy-string-buffer');
            buffer.removeClass('d-none');
            buffer.text(value);
            selectText('copy-string-buffer');
            document.execCommand("copy");
            buffer.addClass('d-none');
            if (message!=null) InteractiveToast(message);
            // console.log(message);
        });
    }

    return CopyString;
});
window.CopyString = CopyString;

