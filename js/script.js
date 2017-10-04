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
 });