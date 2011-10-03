/* A simple animated image slider by collin
 * 
 * Usage:
 *
 * $(document).ready( function() {
 *      $('.images').slider({
 *        // height and width required
 *        width : 950,
 *        height: 400,
 *        current_index: 0,
 *        pause_time: 7000
 *      });
 * }); 
 *
 *  Where .images is structred like this:
 *
 * <ul class="images">
 *  <li>
 *   <img src="1.jpg" alt="" />
 *  </li>
 *  <li>
 *   <img src="2.jpg" alt="" />
 *  </li>
 * </ul>    
 *
 * The resulting html structure will look like:
 *
 *  <div class="slider">
 *   <ul>
 *     <!-- same structre as above -->
 *   </ul>
 *  </div>
 *  <ul class="rotate_list">
 *    <span class="rotate_list_item [active_rotate_list_item]"></span>
 *  </ul>
 *
 */
(function( $ ){

  $.fn.slider = function(params) {

  params = $.extend( {current_index: 0, pause_time: 7000}, params);

	var ready = false;
	var images = this.find('li img');
  var width = params.width;
  var height = params.height;
	var current = params.current_index;
	var ready = true;
  var pause_time = params.pause_time;
	$obj = this;

  // wrap in a div
	$obj.wrap('<div class="slider" />');
  // create the rotate list
	$('.slider').after('<ul class="rotate_list" />');

  // for each image set the height
	images.each(function(i) {
    $(this).css({'width': width, 'height': height});
    // append a span object
		$('.rotate_list').append('<span></span>');
	});

  // make the ul really big
  $obj.css({'width' : images.length*100+'%',
    'position':'absolute',  
    'left':0,  
    'top':0
  });

  // setup the slider 'window'
	$('.slider').css({'height': height,
    'position':'relative', 
    'height':height, 
    'overflow':'hidden'
  });

  // css stuff
	$('.rotate_list, .slider').css('width', width);
	$('.rotate_list').css('text-align', 'center');
	$('.rotate_list span').addClass('rotate_list_item');
	
  // Set the active classes to the rotate list
	setActive(current);

  // Slide stuff around
	$('.rotate_list span').click( function () {
		slideTo($(this).index());
		clearInterval(interval);
		interval = setInterval(rotate, pause_time);
	});
	
  // hover steez
	$('.rotate_list span').hover( function () {
		$(this).css('cursor', 'pointer');
	} , function () {
		
	});
	
  // Helper functions
	function setActive(i) {
		$('.rotate_list span').removeClass('active_rotate_list_item');
		$('.rotate_list span:eq('+i+')').addClass('active_rotate_list_item');
	}
	
	function slideTo(i) {
		if(ready) {
			ready = false;
			setActive(i);
			$obj.animate( {
				left: i*width*-1
			}, 1000, function () {
				current = i;
				ready = true;
			});
		}
	}
	
	function rotate() {
		var n = (current + 1 == images.size()) ? 0 : current +1 ;
		slideTo(n);
	}	
		
	var interval = setInterval(rotate, pause_time);

  return this;
  };
})( jQuery );
