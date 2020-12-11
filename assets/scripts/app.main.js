$(document).ready(function () {
    $('.burger-button').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').addClass('active');
        console.log('document work!!!')
    });
    $('.close-btn').click(function (e) {
        e.preventDefault();
        $('.mobile-menu').removeClass('active');
        $('.overlay').removeClass('active')

    });
    $('.burger-button').click(function () {
        $('.overlay').addClass('active')
        $('body').css('overflow', 'hidden')
    });
    $('.overlay').click(function () {
        $('.mobile-menu').removeClass('active');
        $('.overlay').removeClass('active')

    })
})