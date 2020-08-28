prod = 1;
// ua = {}
if (typeof(ua) == "undefined") {
    window.ua = {}
}
if (ua.browser == undefined) {

    window.ua = {
        browser: {
            name: 1
        }
    };

}


//start PROD SCRIPT


if (prod) {


    if (typeof(phone_hint) == 'undefined' || phone_hint == '') {
        window.phone_hint = "Set Error message"
    }


    function show_form_hint_user(elem, msg) {
        $(".js_errorMessageUser").remove();
        jQuery('<div class="js_errorMessageUser">' + msg + '</div>').appendTo('body').css({
            'left': jQuery(elem).offset().left,
            'top': jQuery(elem).offset().top - 30,
            'background-color': '#e74c3c',
            'border': '1px dashed black',
            'border-radius': '5px',
            'color': '#fff',
            'font-family': 'Arial',
            'font-size': '14px',
            'margin': '3px 0 0 0px',
            'padding': '6px 5px 5px',
            'position': 'absolute',
            'z-index': '9999'
        });

        $('.js_errorMessageUser').animate({'opacity': 0}, 3000, function () {
            $(this).remove();
        });

    };


    $(function () {
        // color: phone_bg_color;

        var _phone_obj = $('.phone-pos');
        var _phone_tpl = $('.phone-pos__phoneTpl');
        var _phone_obj_inp = _phone_obj.find('input');
        var _padding_margin_top = parseInt(_phone_obj_inp.css('padding-top'), 10) + parseInt(_phone_obj_inp.css('margin-top'), 10);
        var _phone_obj__height = _phone_obj.find('input').height()
        var fake_phone = $("input[name='phoneFake']");
        var real_phone = $("input[name='phone']");


        fake_phone.on('change', function () {
            var _val = $(this).val().replace(" ", "").substr(0, 10);


            _val2 = _val.substr(0, 4) + '' + _val.substr(4, 10)
            fake_phone.val(_val2)

            _val = '91' + _val2.replace(" ", "");
            _val = parseInt(_val, 10);

            _valtoform = _val2.replace(" ", "");


            if (String(_val).length != 12) {
                console.log('error');
                show_form_hint_user(real_phone, phone_hint);
                real_phone.val('');
            }
            else {
                real_phone.val(_valtoform);
            }


            //console.log('new phone val', $("input[name='phone']").val())


        });

        _phone_obj.css({
            position: 'relative',
            'width': '288px',
            'margin': '0 auto'
        });
        _phone_tpl.css({
            position: 'absolute',
            top: 0,
            left: 0,
            'z-index': 11,
            'line-height': '40px',
            'padding-left': '10px',
            'padding-top': 0,
            'color': '#000',
            'font-size': '17px',
          	'font-style': 'normal'


        });

        // real_phone.css({
        //     visibility: 'hidden',
        //     position: 'absolute',
        //     top: 0,
        //     left: 0,
        //     'z-index': 1
        // });

        fake_phone.css({
            position: 'relative',
            'z-index': 10
        });

        _phone_obj.find('input').css({'padding-left': 40})


    })


}

//end prod script


//start basic template
else {


    $(function () {
        // color: phone_bg_color;
        var _phone_obj = $('.phone-pos');
        var _phone_tpl = $('.phone-pos__phoneTpl');

        var fake_phone = $("input[name='phoneFake']");
        var real_phone = $("input[name='phone']");


        _phone_obj.css({
            position: 'relative',
            margin: 0
        });
        _phone_tpl.css({
            display: 'none'
        });

        real_phone.css({
            visibility: 'visible',
            'z-index': 1
        });

        fake_phone.css({
            display: 'none'
        })

    })


}
//end basic template
