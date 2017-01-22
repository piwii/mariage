
$(document).ready(function() {

    function changeContactHref() {
        $('#ContactSend').attr('href', 'mailto:famille.cariou.escoubas@gmail.com?subject=Mariage Elodie et Pierre-Yves : '+ $('#ContactSubject').val() + '&body=' + $('#ContactMessage').val())
    }

    $('#ContactSubject').change(changeContactHref);
    $('#ContactMessage').change(changeContactHref);
    $('#ContactSend').click(function (e) {
        if ($('#ContactMessage').val() == '') {
            e.stopPropagation();
            e.preventDefault();
        }
    })

}); // end document ready
