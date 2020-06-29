$(function(){
    $('.hamburger-menu').on('click', function(){
        $('.toogle').toogleClass('open');
        $('.nav-list').toogleClass('open');
    });

    AOS.init({
        easing:'ease',
        duration: 1000,
    })
});