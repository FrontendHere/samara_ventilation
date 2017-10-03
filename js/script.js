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
	 $('partners__carousel').owlCarousel();
 });