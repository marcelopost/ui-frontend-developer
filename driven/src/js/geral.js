$(function() {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 400) {
            $('.navbar').addClass('menu-topo-principal-driven');
		}

		else {
			$('.navbar').removeClass('menu-topo-principal-driven');
		}
	});
})