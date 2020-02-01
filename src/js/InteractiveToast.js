//InteractiveModal

let InteractiveToast = (function () {

    // InteractiveModal.Body = '_body';
    InteractiveToast.Uniq = '_toast';

    // InteractiveToast.Priority = '';
    InteractiveToast.itLog = 'role="status" aria-live="polite"';
    InteractiveToast.itAlert = 'role="alert" aria-live="assertive"';

    // role="alert" aria-live="assertive", otherwise use role="status" aria-live="polite"

    function InteractiveToast(message,title=false, priority=InteractiveToast.itLog, delay='1000', id='id', shownCallback=null, closeCallback=null) {
        id+=InteractiveToast.Uniq;
        /*LocationHash(id);
        console.log('InteractiveTable()', DeviceDetect(DeviceDetect.isMobile));*/
        jQuery('.container > main').append(getInteractiveToast(message, title, id, priority, delay) );
        // let jQtoastParent = jQuery(`#${id}`);
        let jQtoast = jQuery(`#${id}`);

        jQtoast.toast('show');
        if (shownCallback!=null) {
            jQtoast.on('shown.bs.toast', function (e) {
                // console.log('shown.bs.toast');
            shownCallback();
        });
        }
        jQtoast.on('hidden.bs.toast', function (e) {
            // console.log('hidden.bs.toast');
            jQuery('#divAbsolute').remove();
            // jQtoast.remove();
            // jQtoastParent.remove();
            if (closeCallback!=null) closeCallback();
        });
        return jQtoast;
    }

    function getInteractiveToast(message, title, idElement, priority, delay ) {
        let titleToast='';
        if (title) {
        titleToast='  <div class="toast-header">\n' +
            '    <i class="fas fa-info"></i>\n' +
            '    <strong class="mr-auto">'+title+'</strong>\n' +
            // '    <small>11 mins ago</small>\n' +
            '    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n' +
            '      <span aria-hidden="true">&times;</span>\n' +
            '    </button>\n' +
            '  </div>\n';
        }

        let toast = '' +
            '<div id="divAbsolute" '+priority+' aria-atomic="true" class="h-100 w-100 position-absolute d-flex justify-content-center align-items-center" style="left:0;top:0;z-index:1100">' +
            '<div id="'+idElement+'" '+priority+' aria-atomic="true" class="toast" data-autohide="true" data-delay="'+delay+'">\n' + titleToast +
            '  <div class="toast-body">'+message+'</div>\n' +
            '</div>'+
            '</div>'
        ;
        return toast;
    }

    return InteractiveToast;
})();


window.InteractiveToast = InteractiveToast;

