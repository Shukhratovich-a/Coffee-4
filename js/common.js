document.addEventListener('DOMContentLoaded', function () {
    
    function toggleMenu() {
        $('.header').toggleClass('header--active')
    }

    $('.nav__burger').click(function () { toggleMenu() })
})
