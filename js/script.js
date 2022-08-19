$('a[href*="#"]').click(function(){
    $('html, body').animate({
        // height 60px + 15px for margin
        scrollTop: $( $(this).attr('href') ).offset().top - 121
    }, 500);
    return false;
});