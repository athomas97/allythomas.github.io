$(document).scroll(function () {
    var y = $(this).scrollTop();
    
    if (y > 550 & y < ($("body").height()-1300)) {
        $('.case-study-nav').fadeIn(100);
        $('.case-study-nav').css("display", "flex");
    } else {
        $('.case-study-nav').fadeOut(100);
    }
});