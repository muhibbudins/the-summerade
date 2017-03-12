$(document).ready(function() {
	// Vendor Initialize
	AOS.init();

	$('body').niceScroll({
		cursorborder: 'transparent',
		cursorcolor: '#525252',
		scrollspeed: 120,
		mousescrollstep: 65
	});

	new Swiper('#swiper-testimony', {
	    speed: 600,
	    slidesPerView: 1,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: true
	});

	new Swiper('#swiper-client', {
	    speed: 400,
	    slidesPerView: 5,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 60
			}
		}
	});

	// Scroll to Div
	$('a[data-slide="slide"]').click(function(e) {
		e.preventDefault();
		$('.sidebar-overlay').trigger('click');
		var target = $(this).data('slide-target');
	    $("html, body").animate({
	        scrollTop: $(target).offset().top - 100
	    }, 600);
	})

	// Sidebar Trigger
	$('.sidebar-trigger').click(function(e) {
		e.preventDefault();
		$('.sidebar').addClass('active');
		$('.sidebar-overlay').css('visibility', 'visible');
	});
	$('.sidebar-overlay').click(function(e) {
		e.preventDefault();
		$('.sidebar').removeClass('active');
		$('.sidebar-overlay').css('visibility', 'hidden');
	});

	// Search Trigger
	$('#search-trigger').click(function(e) {
		e.preventDefault();
		$('.search-area').addClass('active');
		$('body').css('overflow-y', 'hidden')
	});
	$('#close-search').click(function(e) {
		e.preventDefault();
		$('.search-area').removeClass('active');
		$('body').css('overflow-y', 'scroll')
	});

	// Navbar Scroll Animation
	function animatedNavbar() {
		if (window.scrollY > 100) {
			$('.navbar.navbar-default').addClass('scrolled');
		} else {
			$('.navbar.navbar-default').removeClass('scrolled');
		}
	}

	animatedNavbar();
	$(window).scroll(function() {
		animatedNavbar();
	})
	$(window).resize(function() {
		animatedNavbar();
	})
});
