$(document).ready(function () {
    new ScrollFlow
}), $.fn.ScrollFlow = function (t) {
    new ScrollFlow(t)
}, ScrollFlow = function (t) {
    this.init(t)
}, $.extend(ScrollFlow.prototype, {
    init: function (t) {
        this.options = $.extend({
            useMobileTimeouts: !0,
            mobileTimeout: 100,
            durationOnLoad: 0,
            durationOnResize: 250,
            durationOnScroll: 400
        }, t), this.lastScrollTop = 0, this.bindScroll(), this.update(this.options.durationOnLoad)
    },
    bindScroll: function () {
        var t = this;
        $(window).scroll(function () {
            t.update()
        })
    },

    update: function (t) {
        var o = this;
        winHeight = $(window).height(), scrollTop = $(window).scrollTop(), $(".scrollflow").each(function (a, s) {
            objOffset = $(s).offset(), objOffsetTop = parseInt(objOffset.top), effectDuration = o.options.durationOnScroll, effectDuration = "undefined" != typeof t ? t : effectDuration, effectiveFromPercentage = isNaN(parseInt($(s).attr("data-scrollflow-start") / 100)) ? -.25 : parseInt($(s).attr("data-scrollflow-start")) / 100, scrollDistancePercentage = isNaN(parseInt($(s).attr("data-scrollflow-distance") / 100)) ? .5 : parseInt($(s).attr("data-scrollflow-distance")) / 100, effectiveFrom = objOffsetTop - winHeight * (1 - effectiveFromPercentage), effectiveTo = objOffsetTop - winHeight * (1 - scrollDistancePercentage), parallaxScale = .8, parallaxOpacity = 0, parallaxOffset = -100, factor = 0, scrollTop > effectiveFrom && (factor = (scrollTop - effectiveFrom) / (effectiveTo - effectiveFrom), factor = factor > 1 ? 1 : factor), options = {
                opacity: 1,
                scale: 1,
                translateX: 0,
                translateY: 0
            }, $(s).hasClass("-opacity") && (options.opacity = 0 + factor), $(s).hasClass("-pop") && (options.scale = .8 + .2 * factor), $(s).hasClass("-slide-left") && (options.translateX = -1 * (-50 + 50 * factor)), $(s).hasClass("-slide-right") && (options.translateX = -50 + 50 * factor), $(s).hasClass("-slide-top") && (options.translateY = -1 * (-100 + 100 * factor)), $(s).hasClass("-slide-bottom") && (options.translateY = -100 + 100 * factor), $(s).css({
                webkitFilter: "opacity(" + options.opacity + ")",
                mozFilter: "opacity(" + options.opacity + ")",
                oFilter: "opacity(" + options.opacity + ")",
                msFilter: "opacity(" + options.opacity + ")",
                filter: "opacity(" + options.opacity + ")",
                webkitTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                mozTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                oTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                msTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                transform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                transition: "all " + effectDuration + "ms ease-out"
            })
        })

        let element1 = document.getElementById('progressbar1');
        let elementStyle1 = window.getComputedStyle(element1);
        let elementColor1 = elementStyle1.getPropertyValue('transform');

        let element2 = document.getElementById('progressbar2');
        let elementStyle2 = window.getComputedStyle(element2);
        let elementColor2 = elementStyle2.getPropertyValue('transform');

        let element3 = document.getElementById('progressbar3');
        let elementStyle3 = window.getComputedStyle(element3);
        let elementColor3 = elementStyle3.getPropertyValue('transform');


        let asd = 'matrix(1, 0, 0, 1, 0, 0)';

        if (elementColor1 === asd) {



            $("#progressbar1").removeClass('scrollflow -slide-right');

        }
        if (elementColor2 === asd) {
            $("#progressbar2").removeClass('scrollflow -slide-right');
        }

        if (elementColor3 === asd) {
            $("#progressbar3").removeClass('scrollflow -slide-right');
        }







    }
});