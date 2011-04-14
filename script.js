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
		$('.rotate_list').append('<li>'+i+'</li>');
	});
	
	$('.rotate_list').css('width', width);
	$('.rotate_list').css('text-align', 'center');
	
	$('.rotate_list li').click( function () {
		//alert($(this).index());
		slideTo($(this).index());
	});
	
	function slideTo(i) {
		$obj.animate( {
			left: i*width*-1
		}, 1000, function () {
		
		});
	}
	
  };
})( jQuery );