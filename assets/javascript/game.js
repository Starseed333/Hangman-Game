
var words = [
	"johnwilliams",
	"michaelgiacchino"
]



document.onkeyup = function(event) {


	var guess = event.key;

	var word = words[Math.floor(Math.random() * words.length)];

	//answerarray
	var answerArray = [];
	for (var i = 0; i< word.length; i++) {
		answerArray[i] = "_";
	}

	//var to keep track of letters
	var remainingLetters = word.length;

	// game loop
	while (remainingLetters > 0) {
		//player progress
		var el = document.getElementById("game");
		el.innerHTML = answerArray.join(" "); 


		//player guess
		var guess = prompt("Guess a letter or click Cancel to stop playing.");
		
		if(guess === null) {
			break;
		} else if (guess.length !== 1) {
			alert("Please enter a single letter.");
		
		} else {
			//update the game
			for (var j = 0; j < word.length; j++) {
				if (word[j] === guess) {
					answerArray[j] = guess;
					remainingLetters--; 
				}

			}
		}

	}
		
}

		el.innerHTML = answerArray.join(" ");
		alert("Great Job!!! The answer was " + word + ".");	




			
		
	

	
		

