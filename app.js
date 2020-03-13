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

	//render 8am time slot dynamically
	//$('.container').prepend('<p>8:00 AM');
	//$('p')
	//	.last()
	//	.addClass('container');

	//save user input for 8 am and save to local storage
	$('#8AM').on('click', function() {
		var userInput = $('#8').val();
		console.log(userInput);
		localStorage.setItem('8AM', userInput);
	});
	//get saved text and render on page
	var notes8am = localStorage.getItem('8AM');
	console.log(notes8am);
	$('#8').val(notes8am);

	//add background color based on time
	/*setInterval(function() {
		var currentTime = moment().format('LLL');
		if (currentTime > 7 && currentTime <= 12) {
			// before noon
			$('#8row').css('background-color: #d3d3d3');
		} else if (hour > 12 && hour < 18) {
			// noon
			$('#8row').css('background-color: #ff6961;');
		} else {
			// after noon
			$('#row').css('background-color: #77dd77;');
		}
	});
	*/
});
