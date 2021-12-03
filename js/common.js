document.addEventListener('DOMContentLoaded', function() {

	// Menu

	function toggleMenu() {
		$('.header .nav__burger').toggleClass('nav__burger--active')
		$('.header .nav__list').toggleClass('nav__list--active')
        $('.body').toggleClass('body--active')
	}

	$('.nav__burger').click(function() { toggleMenu() })


	function closeMenu() {
		$('.nav__burger').removeClass('nav__burger--active')
		$('.nav__list').removeClass('nav__list--active')
		$('.body').removeClass('body--active')
	}

	$(document).click(function(e) {
		if ($(e.target).closest('.nav').length) return
		closeMenu()
	})
})
