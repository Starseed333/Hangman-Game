function hangman(word) {
    var trys = 0;
    var guess = 0;

    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var strBuilder = [];
    $.each(alpha.split(''), function (i, val) {
        strBuilder[strBuilder.length] = '<span class="guess">' + val + '</span>';
    });
   

   
    $('#alpha').html(strBuilder.join(''));
    strBuilder = [];
    $.each(word.split(''), function (i, val) {
        strBuilder[strBuilder.length] = '<span class="letter" letter="' + val + '">-</span>';
    });
    

   
    $('#word').html(strBuilder.join(''));

   
   
    $('.guess').click(function () {
        var count = $('#word [letter=' + $(this).text() + ']').each(function () {
            $(this).text($(this).attr('letter'));
        }).length;
        $(this).removeClass('guess').css('color', (count > 0 ? 'green' : 'red')).unbind('click');

        if (count > 0) {
            $('#win').text("Correct Guess");
        } else if (count <= 0) {
            trys++;
            $('#win').text("You have tried to guess the word with no success " + trys + " times");
        }
        if ($("#word").text() === word) {
            if (window.confirm("SUCCESS! Play again?")) {
                newGame();
                $("#win").text("");
            }
        }
        if (trys == 6) {
            alert("Guessed you have six times! May the Word be With You, To try or not to Try?");
            $("#win").text("");
            newGame(); 
        }
    });
}

function newGame() {
    $("#win").text("");
    var options = new Array("ANAKINSKYWALKER", "CHEWBACCA", "JARJARBINKS");
    var random = 0 + Math.floor(Math.random() * 3);
    hangman(options[random]);
}

$(document).ready(function () {
    $('#but').click(newGame);
});





			
		
	

	
		

