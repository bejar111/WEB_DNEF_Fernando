 var urlWEb_Dnef='https://dnef.jne.gob.pe';
 $( document ).ready(function() {
 	scrollBody();

 	$('.btn-responsive-menu').click(function(){
		$(".dnef-menu").slideToggle('slow');
	});

   	     /*TABS*/
    $('.tab-link').click(function(){
		let tab_id = $(this).attr('data-tab');
		$(this).siblings().removeClass('tab-active');
		$(this).parents(".content-tabs").find('.tab-content').removeClass('tab-active');
		$(this).addClass('tab-active');
		$("#"+tab_id).addClass('tab-active');
	});

	$('.dnef-cerrar-pop-up, .btn-cerrar-pop-up').click(function(){
    	$(this).parents(".dnef-fondo-pop-up").hide();
    	scrollBody();
	});
	$(".btn-ver-pop-up").click(function(e){
	      var data_pop = $(this).attr('data-toggle');
	      $("#"+data_pop).show();
	      scrollBody();
    });

    $(".acciones-video").click(function(e){
	      $(this).parents(".content-pop-video").toggleClass('video-mini');
	      $(".acciones-maximizar").fadeIn(500);
    });
    $(".acciones-maximizar").click(function(e){
	      $(this).parents(".content-pop-video").toggleClass('video-mini');
	       $(".acciones-maximizar").hide();
    });

    $(".ir-enlace-blank").click(function(e){
	      window.open($(this).data('file'), '_blank');
	      // usar data-file=".."
    });
    $(".ir-enlace-self").click(function(e){
	      window.open($(this).data('file'), '_self');
	      // usar data-file=".."
    });

  
});

function scrollBody() {
	if ($('.dnef-fondo-pop-up').is(':visible')) {
	  	$("body").css("overflow-y", "hidden");
	} else {
	  	$("body").css("overflow-y", "auto");
	}
}


$(window).scroll(function(){

	  if ( $(this).scrollTop() > 52 ) {
	   	$('header').addClass("header-fix");
	  } else {
	    $('header').removeClass("header-fix");
	  }

});