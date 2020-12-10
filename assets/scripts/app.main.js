$(document).ready(function(){
    $('.burger-button').click(function(e){
        e.preventDefault();
        $('.mobile-menu').addClass('active');
        console.log('document work!!!')        
    });
    $('.close-btn').click(function(e){
        e.preventDefault();
        $('.mobile-menu').removeClass('active')
    });

})