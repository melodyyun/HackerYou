$(document).ready(() => {
	// need to create a counter variable
	let counter = 0;

	// when user clicks on the add button, add a number to the counter
	// link the counter variable to the counter HTML
	$('#add').on('click', () => {
		counter = counter + 1;
		$('.counter').text(counter);
		checkGoal(counter);
	});

	// when user clicks on the subtract button, subtract a number from the counter
	// link the counter variable to the counter HTML
	$('#subtract').on('click', () => {
		counter = counter - 1;
		$('.counter').text(counter);
		checkGoal(counter);
	});

	let goal;

	$('form').on('submit', (e) => {
		e.preventDefault();
		goal = parseInt($('input#goal').val());
		$('input[type=submit]').addClass('submitted');
		$('input[type=text]').addClass('set');
	});

	const checkGoal = (current) => {
		if (current === goal) {
			alert(`You met your goal of ${goal}`);
			$('input[type=submit]').removeClass('submitted');
			$('input[type=text]').removeClass('set').val('');
		}
	}
});