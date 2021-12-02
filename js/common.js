document.addEventListener('DOMContentLoaded', function() {

	// Menu

	function toggleMenu() {
		$('.nav__burger').toggleClass('nav__burger--active')
		$('.nav__list').toggleClass('.nav__list--active')
	}

	$('.nav__burger').click(function() { toggleMenu() })

})
