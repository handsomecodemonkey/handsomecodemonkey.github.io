var main = function(){

	$('.info-card').hide();
	$('#exit-button').hide();

	$('.card-panel').click(function(){
		if( !$(this).hasClass("animate-link") ) {
			$(this).addClass("animate-link");

			$('#exit-button').show();

			switch( $(this).attr('id') ) {
				case "about-panel":
					$('#about-info').fadeIn(2000);
					break;
				case "blog-panel":
					$('#blog-info').fadeIn(2000);
					break;
				case "cv-panel":
					$('#cv-info').fadeIn(2000);
					break;
			}

			$(document).scrollTop(0);
		}
	});

	$('#exit-button').click(function(){
		$('.animate-link').removeClass('animate-link');
		$('.info-card').hide();
		$('#exit-button').hide();

		$(document).scrollTop(0);
	})

	$('.card-panel').hover(
		function(){
			$(this).addClass("z-depth-4");
		},
		function(){
			$(this).removeClass("z-depth-4");
		}
	);

};

$(document).ready(main);