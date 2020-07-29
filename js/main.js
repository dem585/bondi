$(function(){
	$('.header__top-language-btn1-button').click(function(){
		$('.header__top-language-btn1-button-ul').slideToggle(500);

	});

	$('.header__top-language-btn2-button').click(function(){
		$('.header__top-language-btn2-button-ul').slideToggle(500);

	});



	$('.header__top-language-btn1-button').click(function(){
  	$(this).toggleClass('active')

  	});	
  	$('.header__top-language-btn2-button').click(function(){
  	$(this).toggleClass('active1')

  	});

  	$('.header__info-text-btn').click(function(){
  	$('.header__info-text-info-form').addClass('info-form-activ')

  	});	

  	  	$('.section__inner-block a').click(function(){
  	$('.header__info-text-info-form').addClass('info-form-activ')

  	});

  	 $('.form-exit').click(function(){
  	$('.header__info-text-info-form').removeClass('info-form-activ')

  	});	

  	 $('.section__inner-construkt-block-1').click(function(){
  	$('.section__inner-construkt-block-inf').addClass('block-activ')

  	});

  	 $('.block-inf-section-title-btn').click(function(){
  	$('.section__inner-construkt-block-inf').removeClass('block-activ')

  	});

  	   	  $('.section__inner-construkt-block-2').click(function(){
  	$('.section__inner-construkt-block-inf-2').addClass('block-activ')

  	});

  	 $('.block-inf-section-title-btn').click(function(){
  	$('.section__inner-construkt-block-inf-2').removeClass('block-activ')

  	});



  	  $('.section__inner-construkt-block-3').click(function(){
  	$('.section__inner-construkt-block-inf-3').addClass('block-activ')

  	});

  	 $('.block-inf-section-title-btn').click(function(){
  	$('.section__inner-construkt-block-inf-3').removeClass('block-activ')

  	});

  	   	  $('.section__inner-construkt-block-4').click(function(){
  	$('.section__inner-construkt-block-inf-4').addClass('block-activ')

  	});

  	 $('.block-inf-section-title-btn').click(function(){
  	$('.section__inner-construkt-block-inf-4').removeClass('block-activ')

  	});

  	   	  $('.section__inner-construkt-block-5').click(function(){
  	$('.section__inner-construkt-block-inf-5').addClass('block-activ')

  	});

  	 $('.block-inf-section-title-btn').click(function(){
  	$('.section__inner-construkt-block-inf-5').removeClass('block-activ')

  	});
});