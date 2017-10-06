 $(document).ready(function () {
 	//Убираем placeholder
	 $('input,textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
	   $(this).attr('placeholder','');
	 });
	 $('input,textarea').blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	 });
	 //Карусель в партнерах
	 $('.partners__carousel').owlCarousel({
	 	loop: true,
	 	nav: false,
	 	dots: true,
	 	items: 1
	 });
	 //Карусель патнеров
	 $('.partnership__owl').owlCarousel({
	 	loop: true,	 	
	 	navText: [],
	 	dots: false,
	 	items: 1,
	 	margin: 10,
	 	responsive:{
	 		0:{
	 			nav: false
	 		},
	 		768:{
	 			nav: true
	 		}
	 	}
	 });
	 //Карусель портфолио
	 $('.examples__owl').owlCarousel({
	 	loop: true,
	 	dots: false,
	 	navText: [],
	 	//autoWidth: true,
	 	margin: 10,
	 	responsive:{
	 		0:{
	 			items: 1,
	 			nav: false
	 		},
	 		768:{
	 			nav: true
	 		},
	 		992:{
	 			center: true,
	 			nav: true
	 		}
	 	}
	 });
	 //Карусель сертификатов
	 $('.sertificates__owl').owlCarousel({
	 	loop: true,	 	
	 	dots: false,
	 	navText: [],
	 	responsive:{
	 		0:{
	 			items: 1,
	 			nav: false
	 		},
	 		470:{
	 			items: 1,
	 			nav: true
	 		},
	 		768:{
	 			items: 2,
	 			nav: true
	 		},
	 		992:{
	 			items: 3,
	 			nav: true
	 		},
	 		1200:{
	 			items: 4,
	 			nav: true
	 		}
	 	}
	 	
	 });

	 //Slick

	 
 	
	//Появление модального окна
	$('.modal-open').click(function(e) {
		e.preventDefault();

		var serviceH1 =  $(this).parent('.service__description').find('.service__h1').html(),
			serviceTitle = $(this).parent('.service__description').find('.service__h1').attr('data-title'),
			modalWidth = $('.modal').clientWidth;
			alert(modalWidth)

		if(serviceH1 != undefined){
			$('.modal__h1').css('font-size', 24);
			$('.modal__text').html("Оставьте заявку на "+serviceTitle+". Мы свяжемся с Вами в ближайшее время.");
			$('.modal__text').css({'width': modalWidth, 'padding-left': '7px', 'padding-right': '7px'})
			$('[name=title]').val(serviceH1);
		}
		else{
			$('.modal__h1').css('font-size', 28);
			$('.modal__h1').html("Обратный звонок");
			$('[name=title]').val('Обратный звонок');
		}
		
		document.getElementsByClassName('modal')[0].style.cssText = "opacity: 1;\
			visibility: visible;\
			margin-top: 0;\
		";


		document.getElementsByClassName('bg-modal')[0].style.cssText = "opacity: 1; \
			visibility: visible;\
		";

		//Модальное окно по центру по вертикали
	 	var windowHeight = document.documentElement.clientHeight;
	 	var modalHeight = document.getElementsByClassName('modal')[0].offsetHeight;
	 
	 	var mtModal = (windowHeight - modalHeight)/2;

	 	document.getElementsByClassName('modal')[0].style.marginTop = mtModal + "px";
	});

	//Закрытие модального окна
	$('.modal__close').click(function(e) {
		e.preventDefault();

		document.getElementsByClassName('modal')[0].style.cssText = "opacity: 0;\
			visibility: hidden;\
			margin-top: -40px;\
		";


		document.getElementsByClassName('bg-modal')[0].style.cssText = "opacity: 0; \
			visibility: hidden;\
		";

	});

	$('.bg-modal').click(function(e) {
		e.preventDefault();

		document.getElementsByClassName('modal')[0].style.cssText = "opacity: 0;\
			visibility: hidden;\
			margin-top: -40px;\
		";


		document.getElementsByClassName('bg-modal')[0].style.cssText = "opacity: 0; \
			visibility: hidden;\
		";

	});
 });