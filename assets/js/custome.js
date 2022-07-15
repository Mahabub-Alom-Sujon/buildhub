jQuery(document).ready(function () {
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
         $(".heder-bottom").removeClass("sticky");
        }else{
         $(".heder-bottom").addClass("sticky");
        }
    });
    //menu nav smooth
    function smoothSctollTop() {
        $('.heder-bottom ul li a').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        });
    }
	smoothSctollTop();
	//preloder 
	jQuery(window).load(function() {
		$(".preloder").delay(350).fadeOut('slow');
	});
  //sub menu
  $("nav ul li i").click(function () {
    $(this).next('ul.dropdown-menu').slideToggle(400);
	$(this).toggleClass("sub-rotate");
  });
  //scroll up
  //$('.scrollup').hide(0)
  $(window).scroll(function (){
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      //$('.scrollup').fadeIn();    // Fade in the arrow
     $('.scrollup').css("opacity", "1");
     // $('.scroll').css("right", "30px","opacity", "1");
   	// $('.scroll').addClass('active') 
    } else {
      //$('.scrollup').fadeOut();   // Else fade out the arrow
     $(".scrollup").css("opacity", "0");
     //$('.scroll').css("right", "-50px","opacity", "0");
     //$('.scroll').removeClass('active')
    }
  });
 	$('.scrollup').click(function () {      // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0                       // Scroll to top of body
    }, 500);
  });
  //counterup
  $('.counter').counterUp({
	delay: 10,
	time: 3000
});

  //slider active
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function(e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
        BasicSlider.slick({
            Infinite: true,
            cssEase: 'linear',
			autoplay: true,
			autoplaySpeed: 6000,
			dots: false,
			fade: true,
			pauseOnHover: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();
    //project slider
    $('.project-active').owlCarousel({
        loop: true,
		autoplay: true,
		smartSpeed: 1500,
		autoplayHoverPause: true,
		margin: 30,
		autoplayTimeout: 6000,
		nav: false,
		dots: true,
		responsive: {
            0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1000: {
				items: 2
			},
			1200: {
				items: 3
			}
        }
		
    });
    //brand slide
    // brand active
	$('.brand-active').owlCarousel({
		loop:true,
		margin:0,
		items:1,
		dots:false,
		autoplay:true,
		smartSpeed: 1000,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:2
			},
			767:{
				items:3
			},
			992:{
				items:3
			},
			1200:{
				items:5
			}
		}
	})
    //testimonial active
    $('.testimonial-active').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
			},
			577: {
				items: 1	
			},
            768: {
                items: 1
			},
            992: {
                items: 1
            }
        }
    });
});
///

