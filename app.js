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
	//get saved text and render on page 8
	var notes8am = localStorage.getItem('8AM');
	console.log(notes8am);
	$('#8').val(notes8am);

	//save user input for 9 am and save to local storage
	$('#9AM').on('click', function() {
		var userInput = $('#9').val();
		localStorage.setItem('9AM', userInput);
	});
	//get saved text and render on page 9
	var notes9am = localStorage.getItem('9AM');
	$('#9').val(notes9am);

	//save user input for 10 am and save to local storage
	$('#10AM').on('click', function() {
		var userInput = $('#10').val();
		localStorage.setItem('10AM', userInput);
	});
	//get saved text and render on page 10
	var notes10am = localStorage.getItem('10AM');
	$('#10').val(notes10am);

	//save user input for 11 am and save to local storage
	$('#11AM').on('click', function() {
		var userInput = $('#11').val();
		localStorage.setItem('11AM', userInput);
	});
	//get saved text and render on page 11
	var notes11am = localStorage.getItem('11AM');
	$('#11').val(notes11am);

	//save user input for 12 and save to local storage
	$('#12PM').on('click', function() {
		var userInput = $('#12').val();
		localStorage.setItem('12PM', userInput);
	});
	//get saved text and render on page 12
	var notes12pm = localStorage.getItem('12PM');
	$('#12').val(notes12pm);

	//save user input for 1 pm and save to local storage
	$('#1PM').on('click', function() {
		var userInput = $('#1').val();
		localStorage.setItem('1PM', userInput);
	});
	//get saved text and render on page 1 p
	var notes1pm = localStorage.getItem('1PM');
	$('#1').val(notes1pm);

	//save user input for 2 pm and save to local storage
	$('#2PM').on('click', function() {
		var userInput = $('#2').val();
		localStorage.setItem('2PM', userInput);
	});
	//get saved text and render on page 2 p
	var notes2pm = localStorage.getItem('2PM');
	$('#2').val(notes2pm);

	//save user input for 3 pm and save to local storage
	$('#3PM').on('click', function() {
		var userInput = $('#3').val();
		localStorage.setItem('3PM', userInput);
	});
	//get saved text and render on page 3 p
	var notes3pm = localStorage.getItem('3PM');
	$('#3').val(notes3pm);

	//save user input for 4 pm and save to local storage
	$('#4PM').on('click', function() {
		var userInput = $('#4').val();
		localStorage.setItem('4PM', userInput);
	});
	//get saved text and render on page 4 p
	var notes4pm = localStorage.getItem('4PM');
	$('#4').val(notes4pm);

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
