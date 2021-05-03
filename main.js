$(function(){
	var navbar = $('.navbar');
	$(window).scroll(function(){
        var sc = $(window).scrollTop()
        console.log(sc)
		if(sc <= 40){
			navbar.removeClass('navbar-scroll');
		} else {
			navbar.addClass('navbar-scroll');
		}
        if (sc >= 400 ) {
            $('.home_btn').stop(true, true).fadeIn();
        } else {
            $('.home_btn').stop(true, true).fadeOut();
        }
        if ( $('.card1').hasClass('animate__fadeInUp')) {
            $('.card1').removeClass('animate__fadeInUp')
            $('.card2').removeClass('animate__fadeInUp')        }
        if (sc >= 1380) {
            $('.card1').removeClass('animate__fadeOut').addClass('animate__fadeInUp')
            $('.card2').removeClass('animate__fadeOut').addClass('animate__fadeInUp')
        }
        if (sc<1330) {
            $('.card1').addClass('animate__fadeOut')
            $('.card2').addClass('animate__fadeOut')
        }
        if (sc>440) {
            $('.about-me').removeClass('animate__fadeOutLeft').removeClass('myprojectsNone').addClass('animate__fadeInLeft')
        }
        else{
            $('.about-me').removeClass('animate__fadeInLeft').addClass('animate__fadeOutLeft')
        }
       if (sc>700) {
            $('.about-me-right').removeClass('animate__fadeOutRight').removeClass('myprojectsNone').addClass('animate__fadeInRight')
        }
        else{
            $('.about-me-right').removeClass('animate__fadeInRight').addClass('animate__fadeOutRight')
        }
        if (sc>1940) {
            $('.card-contact').removeClass('animate__zoomOutUp').removeClass('myprojectsNone').addClass('animate__zoomInUp')
        }
        else{
            $('.card-contact').removeClass('animate__zoomInUp').addClass('animate__zoomOutUp')
        }
	});
});
window.onload = function(){
          $(function(){
            $('a.smooth-scroll').click(function(event){
                event.preventDefault();
                var section = $(this).attr("href");
                $('html,body').animate({
                    scrollTop: $(section).offset().top - 64
                },1250, "easeInOutExpo");
            });
        });
    }