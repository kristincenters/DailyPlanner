$(document).ready(function() {
	var now = moment().format('LLL');

	var currentDay = document.getElementById('currentDay');
	currentDay.innerHTML = now;
});

// Get value on button click and show alert
$('#saveBtn').click(function() {
	var userSave = $('#userNotes').val();
});
