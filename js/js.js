$(function () {

    'use strict';



    // ---- navigation mobile menu ---- //
    function animMobileMenu() {

        $('.nav__item .drop-menu').click(function (e) {
            if ($(window).width() < 993) {
                e.preventDefault();
                $(this).next().slideToggle();
            }
        });

        $('.burger').click(function () {
            let timeAnim = 650;
            $(this).toggleClass("active");
            $('.logo, .nav__inner, .nav__menu, .nav__lang').toggleClass("active");
            $(this).css({ 'pointer-events': 'none' });
            setTimeout(function () {
                $(this).css({ 'pointer-events': 'auto' });
            }.bind(this), timeAnim);
        });
    }
    animMobileMenu();
});