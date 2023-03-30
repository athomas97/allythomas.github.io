$(document).scroll(function () {
    var y = $(this).scrollTop();
    
    if (y > 550) {
        $('.case-study-nav').fadeIn(100);
        $('.case-study-nav').css("display", "flex");
    } else {
        $('.case-study-nav').fadeOut(100);
    }
});