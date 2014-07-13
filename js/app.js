$(document).ready(function() {
	var input = +prompt("Please enter a FizzBuzz number");
	if (input == NaN) {
		alert("Please enter an integer.");
	}
	else if (input % 1 != 0) {
		alert("Please enter an integer.");	
	}
	else {
		$('body').append(fizzBuzz(input));
	}
 })

var fizzBuzz = function (inputNum) {
		var textOutput = "";
		console.log(inputNum);
	for (i = 1; i <= inputNum; i++) {
		console.log(i);
		if (i % 15 == 0) {
			textOutput = textOutput + "fizzbuzz\n";
		}
		else if (i % 3 == 0) {
			textOutput = textOutput + "fizz\n";
		}
		else if (i % 5 == 0) {
			textOutput = textOutput + "buzz\n";
		}
		else {
			textOutput = textOutput + i + "\n";
			console.log(i);
		}
	}
	return "<p>"+textOutput+"</p>"
}
