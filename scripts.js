document.addEventListener("DOMContentLoaded", function () {

    //hides uppercasek keyboard when page loads
    $('#keyboard-upper-container').hide();

    //changes keyboard to uppercase when shift is pressed
    $(window).keydown(function (e) {
        if (e.keyCode === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    })
    // changes back to lowercase when shift is released
    $(window).keyup(function (e) {
        if (e.keyCode === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }

    })


    // highlights keys when pressed
    $(window).keypress(function (e) {
        $('#' + e.which).addClass('highlight');
        //removes highlight                   
        $(window).keyup(function (e) {
            $('span').removeClass('highlight');
        })

    })

    //resets game when button is clicked
    function click () {                    
        $('#btn').click(function () {
        location.reload(true);   //refreshes
    })
}
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];   

    //puts first sentence on screen
    $('#sentence').prepend('<p class="sentence">' + sentences[0] + '</p>');

    //puts first target letter on screen
    $('#target-letter').prepend(sentences[0].charAt(0));

    //increments when keystrokes are greater than the number of chars in the sentnece.
    let sentenceCount = 0;

    //shows current sentence number 
    let currentSentence = 0;

    //counts the number of key strokes by incrementing with every key press.
    let strokeCount = 1;

    //current position of yellow box
    let pxCount = 0;

    //value of next sentence to be displayed
    let nextDisplaySentence = 1;

    //brings in xs and checks
    var right = 'checkMark.svg';
    var wrong = 'xMark.png'

    //when this = 1 the timer starts
    let timer = 0;

    // var for start time and end time
    let start = 0;
    let end = 0;

    //counts number of mistakes
    let mistakes = 0;

    

function everything(){
    $(window).keypress(function (event) {

        //var for current sentence
        currentSentence = sentences[sentenceCount];

        //var for the length of current sentence
        let sentenceLength = currentSentence.length;

        //value of the next letter you need to type
        let letter = currentSentence.charAt(strokeCount);

        //puts restart and stay button on screen
        let restartBtn = '<button class="btn-danger" id="btn">Click here to play again</button>'
        let stayBtn = '<button class="btn-success" id="btnTwo">Click here to not restart</button>'


        // section for displaying score
        if (sentenceCount >= sentences.length - 1 && strokeCount == currentSentence.length) {       
            end = Date.now();
            finishTime = end - start;
            minutes = finishTime / 1000 / 60;
            totalTime = (54 / minutes - 2 * mistakes);

            //takes away sentences and adds score
            $('.sentence').replaceWith('<p class="sentence">Your score was     ' + totalTime + '</p>');

            //displays buttons
            $('#feedback').empty().css({'display': 'none'}).append(restartBtn, stayBtn).slideUp( 1000 ).delay( 2000 ).fadeIn( 1000 );
            
            //takes away target letter and yellow block when score is displayed
            $('#target-letter').replaceWith('');
            $('#yellow-block').replaceWith('');


        } else if (strokeCount < sentenceLength) {

            //increases pxCount by the size of one letter
            pxCount += .72;
            
            // moves the yellow box one letter to the right
            $('#yellow-block').css('margin-left', pxCount + 'em');

            //generates letters in middle of screen
            $('#target-letter').replaceWith('<div class="row col-lg-12 text-center" id="target-letter">' + letter + '</div>');

            //starts timer
            if (timer == 1) { 
                start = Date.now();
            }

            //checks if key pressed matches key needed
            if (currentSentence.charCodeAt(strokeCount - 1) == event.keyCode) {
                //adds check if correct
                $('#feedback').append('<img class="correct" src=' + right + '>');
                //styles check
                $(".correct").css({
                    'height': '20px',
                    'width': '20px',
                })
            } else {
                //adds red x if incorrect
                $('#feedback').append('<img class="incorrect" src=' + wrong + '>');
                //styles red x
                $(".incorrect").css({
                    'height': '15px',
                    'width': '15px',
                })
                //counts mistakes
                mistakes++;
            }

        } else if (strokeCount == sentenceLength) {
            //placeholder for next sentence to be displayed
            nextSentence = sentences[nextDisplaySentence];
            //replaces old sentence with new one
            $('.sentence').replaceWith('<p class="sentence">' + nextSentence + '</p>');
            //increments when keystrokes are greater than the number of chars in the sentnece.
            sentenceCount++;
            //reset keystroke for each new sentence
            strokeCount = 0;
            // reset the position of yellow box
            $('#yellow-block').css('margin-left', '0em');
            pxCount = 0;
            //increment value of next sentence to be displayed
            nextDisplaySentence++;
            // nextSentenceue = strokeCount;
            $('#target-letter').replaceWith('<div class="row col-lg-12 text-center" id="target-letter">' + nextSentence.charAt(0) + '</div.>');
            //removes previous checks and red xs from screen
            $('.correct').remove();
            $('.incorrect').remove();
        }
        //increment the number of key strokes by incrementing with every key press.
        strokeCount++;
        timer++;
    })
}

everything();    /////// runs everything










})