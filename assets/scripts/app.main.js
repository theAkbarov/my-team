$(document).ready(function () {
    $('.burger-button').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').addClass('active');
        console.log('document work!!!');
        $('.overlay').addClass('active');
        $('body').css('overflow', 'hidden')
    });
    $('.close-btn').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').removeClass('active');
        $('body').css('overflow', 'unset')

        $('.overlay').removeClass('active')

    });
    $('.item-icon').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.layer').toggleClass('fade')

    });


    $('.overlay').click(function () {
        $('.mobile-menu').removeClass('active');
        $('.overlay').removeClass('active')
        $('body').css('overflow', 'unset')

    });

})