var hour_8 = '8:00 AM';
var $timeBlock_8;
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
	$('form').prepend('<p>8:00 AM');
	$('p')
		.last()
		.addClass('col');

	//render 8am notes
	var $timeBlock_8 = $('<input>');
	$timeBlock8.attr('type', 'text');
	$timeBlock8.attr('class', 'form-control');

	//save 8am notes
	$('saveBtn').on('click', function() {
		var userInput = $('#8am-input').val();
		//var userNotes = $("userInput" + hour_8)
		console.log(userInput);
		localStorage.setItem('saveBtn', userInput);
	});
});
