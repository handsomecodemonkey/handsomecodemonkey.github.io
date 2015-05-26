var main = function(){

	$('.info-card').hide();
	$('#exit-button').hide();

	$('.card-panel').click(function(){
		$(this).addClass("animate-link");

		$('#nav-button').hide();
		$('#exit-button').show();

		switch( $(this).attr('id') ) {
			case "about-panel":
				$('#about-info').fadeIn(3000);
				break;
			case "blog-panel":
				$('#blog-info').fadeIn(3000);
				break;
			case "contact-panel":
				$('#contact-info').fadeIn(3000);
				break;
			case "cv-panel":
				$('#cv-info').fadeIn(3000);
				break;
		}
	});

	$('#exit-button').click(function(){
		$('.animate-link').removeClass('animate-link');
		$('.info-card').hide();
		$('#exit-button').hide();
		$('#nav-button').show();
	})

};

$(document).ready(main);