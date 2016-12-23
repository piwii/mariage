
$(document).ready(function() {

	function changeContactHref() {
		$('#ContactSend').attr('href', 'mailto:famille.cariou.escoubas@gmail.com?subject='+ $('#ContactSubject').val() + '&body=' + $('#ContactMessage').val())
	}

	$('#ContactSubject').change(changeContactHref);
	$('#ContactMessage').change(changeContactHref);

}); // end document ready
