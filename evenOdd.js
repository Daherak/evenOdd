$(document).ready(function(){

    $("#validate").click(function(){
    	$('.text-danger').text('');
    	radio = $('.radio-inline input[name="side"]:checked').val();
        if (!radio){
        	$('.text-danger').text('Pick a side !');
        	return;
        }
    	if (!$('#userNb').val()) {
        	$('.text-danger').text('Pick a number !');
        	return;
    	}
        var randomNumber = Math.floor(Math.random()*(10-0+1)+0);
        $('#iaNb').val(randomNumber);
        result = parseInt($('#userNb').val())+parseInt($('#iaNb').val());
        if (((result % 2) && radio == 'odd')
        	|| (!(result % 2) && radio == 'even')) {
        	$('#result').text(result+', You won !');
        } else {
        	$('#result').text(result+', You lost !');
        }
    });

});