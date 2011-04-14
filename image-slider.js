$(document).ready( function () {
	$('.images').slider();
});

(function( $ ){

  $.fn.slider = function() {
	var ready = true;
	var width = 800;
	var height = 280;
	var images = this.find('li img');
	var current = 0;
	$obj = this;
	$obj.wrap('<div class="slider" />');
	$('.slider').after('<ul class="rotate_list" />');
	$.each( images, function(i) {
		$('.rotate_list').append('<span></span>');
	});
	
	$('.rotate_list').css('width', width);
	$('.rotate_list').css('text-align', 'center');
	$('.rotate_list span').addClass('rotate_list_item');
	
	setActive(current);
	
	$('.rotate_list span').click( function () {
		slideTo($(this).index());
		clearInterval(interval);
		interval = setInterval(rotate, 7000);
	});
	
	$('.rotate_list span').hover( function () {
		$(this).css('cursor', 'pointer');
	} , function () {
		
	});
	
	function setActive(i) {
		$('.rotate_list span').removeClass('active_rotate_list_item');
		$('.rotate_list span:eq('+i+')').addClass('active_rotate_list_item');
	}
	
	function slideTo(i) {
		setActive(i);
		$obj.animate( {
			left: i*width*-1
		}, 1000, function () {
			current = i
		});
	}
	
	function rotate() {
		var n = (current + 1 == images.size()) ? 0 : current +1 ;
		slideTo(n);
	}	
		
	var interval = setInterval(rotate, 7000);
	
  };
})( jQuery );
