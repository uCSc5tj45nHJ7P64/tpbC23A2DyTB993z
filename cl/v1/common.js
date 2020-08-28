$(function () {

    $(".b-test_answer").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");

        if ($(window).width() < 992) {
            var $item = $(this).closest(".b-test_item");
            $item.fadeOut(500, function () {
                var $next = $item.next(".b-test_item");
                console.log($next);
                if (!$next.length) $next = $(".b-results");
                $next.fadeIn(500);
            });
        }

    });
    $(".js_test-res").on("click", function () {
        $(".b-test").fadeOut(500, function () {
            $(".b-results").fadeIn(500);
        });
    });

    $('.pre_toform').on("click", function () {
        $("html, body").animate({
            scrollTop: $("form").offset().top - 30
        }, 1000);
        return false;
    });


    // function timer(count) {
    //     var _currentDate = new Date();
    //     var count = count || 90;
    //     var _toDate = new Date(
    //         _currentDate.getFullYear(),
    //         _currentDate.getMonth(),
    //         _currentDate.getDate(),
    //         _currentDate.getHours(),
    //         _currentDate.getMinutes() + count, 1);
    //     $elem = $('.counter');

    //     $elem.each(function () {
    //         var
    //             $this = $(this),
    //             hours = $this.find('.counter-hours'),
    //             min = $this.find('.counter-min'),
    //             sec = $this.find('.counter-sec');
    //         $this.countdown(_toDate, function (e) {
    //             hours.text('' + e.strftime('%I'));
    //             min.text('' + e.strftime('%N'));
    //             sec.text('' + e.strftime('%T'));
    //         });
    //     })
    // };
    // timer();



});
$(document).ready(function () {
    var _currentDate = new Date();
    var count = 15;
    var _toDate = new Date(_currentDate.getFullYear(), _currentDate.getMonth(), _currentDate.getDate(), _currentDate.getHours(), _currentDate.getMinutes() + count, 1);


    var timer = function (time) {
        $elem = $('.counter');

        $elem.countdown(time, function (e) {
            $elem.find('.timer__hours').text(e.strftime('%H'));
            $elem.find('.timer__min').text(e.strftime('%M'));
            $elem.find('.timer__seconds').text(e.strftime('%S'));
        });

    };






    var _countDown = function (elem) {

        var timerTime = 6000;
        var minutes = 15;


        var counter = $('.counter');

        var value = counter.text();

        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));


        if ($.cookie('counter') == undefined) {
            $.cookie('counter', (value), {
                expires: date
            });
        }

        num = $.cookie('counter');

        if ($.cookie('counter') == null) {
            num = value;
        }

        counter.text(num);

        if (num < 2) {
            counter.text(1);
        }


        var count = counter.text();
        var setTimer = setInterval(function () {

            if (num > 1) {
                var rand = random(0, 1);
                num = num - rand;
                counter.text(num);
                if (rand) {
                    var popUp = createPopUp(getRandomUser());
                    removePopup(popUp);
                }

            }
            $.cookie('counter', (num), {
                expires: date
            });
            if (num < 2) {
                clearInterval(setTimer);
                $.cookie('counter', (1), {
                    expires: date
                });
            }


        }, timerTime);
    }














    $(function () {
        timer(_toDate);

    });
});