var hour_8 = '8:00 AM';
var $timeBlock_8 = '8a_notes';
var saveBtn = $('<button>');
//'9', '10', '11', '12', '1', '2', '3', '4'];
//var userNoteInput = [];
//render current time
$(document).ready(function() {
	var now = moment().format('LLL');

	var currentDay = document.getElementById('currentDay');
	currentDay.innerHTML = now;

	moment().hour(Number);

	//render 8am time slot
	$('.container').prepend('<p>8:00 AM');
	$('p')
		.last()
		.addClass('container');

	//save user input for 8 am and save to local storage
	$('#8AM').on('click', function() {
		var userInput = $('#8').val();
		var userNotes = $('userInput' + hour_8);
		console.log(userInput);
		localStorage.setItem('8AM', userInput);
	});
});
