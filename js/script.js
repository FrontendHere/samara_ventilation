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
	 	nav: true,
	 	items: 1
	 });
 });