/* Javascript for Wedding Template - Created by www.designkindle.com */

/* =jQuery
============================================================================== */
	
$(document).ready(function() {
		
	/* Slideshow
	-------------------------------------------------------------------------- */
	$(function(){
		$('#slideshow img:gt(0)').hide();
		setInterval(function(){
		  $('#slideshow :first-child').fadeOut()
			 .next('img').fadeIn()
			 .end().appendTo('#slideshow');},
		  3000);
	});

}); // end document ready
