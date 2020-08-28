$(function() {

    $.fn.isOnScreen = function(shift) {
        if (!shift) {
            shift = 0;
        }
        var viewport = {};
        viewport.top = $(window).scrollTop();
        viewport.bottom = viewport.top + $(window).height();
        var bounds = {};
        bounds.top = this.offset().top + shift;
        bounds.bottom = bounds.top + this.outerHeight() - shift;
        return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
    };

    var _bxInnit = function(elem, opt) {
        var defaultOptions = {
            view: 'all'
        }
        var currentOpt = $.extend(defaultOptions, opt);
        var init = {
            breakPoint: 992,
            sliderActive: false,
            initBreakpoint: null,
            resizeBreakpointMore: null,
            resizeBreakpointLess: null,
            windowWidht: window.innerWidth
        }


        var flag = false;

        var slider;


        var sliderClone = $(elem).clone();


        // Объект с параметрами для слайдера
        var options = opt;

        // Создаем слайдер
        function createSlider() {
            slider = $(elem).bxSlider(options);
            return true;
        }

        if (flag) {
            createSlider();
            init.sliderActive = true;
        }


        function createBreakpoints() {
            switch (currentOpt.view) {
                case 'mobile':
                    init.initBreakpoint = init.windowWidht < init.breakPoint;
                    init.resizeBreakpointMore = init.windowWidht >= init.breakPoint;
                    init.resizeBreakpointLess = init.windowWidht < init.breakPoint;
                    break;

                case 'desktop':
                    init.initBreakpoint = init.windowWidht >= init.breakPoint;
                    init.resizeBreakpointMore = init.windowWidht < init.breakPoint;
                    init.resizeBreakpointLess = init.windowWidht >= init.breakPoint;
                    init.resizeBreakpointLess;
                    break;

                case 'all':
                    init.initBreakpoint = true;
                    init.resizeBreakpointMore = false;
                    init.resizeBreakpointLess = false;
                    break;
            }
        }

        createBreakpoints();


        // Загрузка страницы
        if (init.initBreakpoint) {
            createSlider();
            init.sliderActive = true;
        }
        // Отслеживаем события при ресайзе

        $(window).resize(function() {
            // Если окно больше или равено breakPoint
            // Вырубаем слайдер и ставим ФЛАГ в false
            // Вставляем начальный вариант html разметки (без лишнего кода от слайдера)
            init.windowWidht = window.innerWidth;

            createBreakpoints();

            if (init.resizeBreakpointMore) {
                if (init.sliderActive) {
                    slider.destroySlider();
                    init.sliderActive = false;
                    slider.replaceWith(sliderClone.clone());
                }
            }

            // Если окно меньше breakPoint
            // Вырубаем слайдер и ставим ФЛАГ в true
            if (init.resizeBreakpointLess) {
                if (!init.sliderActive) {
                    createSlider();
                    init.sliderActive = true;
                }
            }
        });

        var a, b;
        a = 1;
        b = 0;

        $(window).on('scroll', function() {
            if (init.sliderActive == true) {
                if (slider.isOnScreen()) {
                    b = 1;
                } else {
                    b = 0;
                }

                if (a == b) {
                    slider.startAuto();
                } else {
                    slider.stopAuto();
                }
            }

        });
    }

    var toForm = function() {
        $('.pre_toform').click(function(e) {
            e.preventDefault();
            var a = $('.js_submit');
            var b = a.closest('form');

            if ($('form#toform').length) {
                a = $('#toform .js_submit');
                b = a.closest('form#toform');
            }

            if (b.length && a.is(':visible')) {
                $("html,body").animate({ scrollTop: b.last().offset().top }, 1000);
            }
            return false;
        });
    }

    $(document).ready(function() {

        toForm();
        _bxInnit('.slider', {
            view: 'mobile',
            adaptiveHeight: true,
            swipeThreshold: 40,
            controls: false,
            pager: true,
            auto: true,
            pause: 10000,
            autoHover: true,
            infiniteLoop: true,
            slideMargin: 3,
            // nextText: '',
            // prevText: ''
        });

    });

});