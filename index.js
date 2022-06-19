$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .nav-small').toggleClass('active');
    });
    $('.nav-link-small').click(function(event) {
        $('.header-burger, .nav-small').toggleClass('active');
    });
});