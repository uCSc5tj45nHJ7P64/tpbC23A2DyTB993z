(function($){
    'use strict';
    //Отдельном выносим языки, для более простой локализации
    //Объявляем класс нашего лендинга
    var Landing = function () {

        this.nowDate = new Date();
        
        //Параметры загрузки лендинга
        this.params = {
            countDownDiff: Math.ceil((24*60*60)-(this.nowDate.getHours() * 60 * 60 + this.nowDate.getMinutes() * 60 + this.nowDate.getSeconds())), //Количество секунд до конца таймера
            selectors: {
                countDown: '.landing__countdown'
            }
        };

        //Стартуем таймер
        this.initCountDown();
    };

    Landing.prototype.initCountDown = function() {
        var _this = this,
            endDate = new Date(this.nowDate.getTime() + this.params.countDownDiff * 1000);

        var countDownTimer = setInterval( function () {
            var diffDate = new Date(endDate.getTime() - Date.now()),
                h = (diffDate.getHours() > 9) ? diffDate.getHours() : '0'+diffDate.getHours(),
                m = (diffDate.getMinutes() > 9) ? diffDate.getMinutes() : '0'+diffDate.getMinutes(),
                s = (diffDate.getSeconds() > 9) ? diffDate.getSeconds() : '0'+diffDate.getSeconds();

            var htmlTime = '<span class="hours">'+ h +'</span>'+
                           '<span class="minutes">'+ m +'</span>'+
                           '<span class="seconds">'+ s +'</span>';

            $(_this.params.selectors.countDown).html(htmlTime);
        }, 1000);
    };



    Landing.prototype.scrollToForm = function(event) {
    	var $target = $(event.currentTarget);

    	$("body,html").animate({
            scrollTop: $($target.attr("href")).offset().top
        }, 1e3);
        event.preventDefault();
    };

    Landing.prototype.showHeadInformation = function(event) {
    	$(event.currentTarget).siblings("p").slideToggle("fast");
    };

    $(function() {
        window.landing = new Landing();
    });
})(jQuery);