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
    // changes bacl to lowercase when shift is released
    $(window).keyup(function (e) {
        if (e.keyCode === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }

    })


    // highlights keys when pressed
    $(window).keypress(function (e) {
        let code = e.which;
        $('#' + e.which).addClass('highlight');
        //removes highlight                     //doesn't unhighlight non-letter characters
        $(window).keyup(function (e) {
            let lowerCase = e.which + 32
            $('#' + e.which).removeClass('highlight');
            $('#' + lowerCase).removeClass('highlight');
        })

    })




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


    $(window).keypress(function (event) {
        //var for current sentence
        currentSentence = sentences[sentenceCount];
        //var for the length of current sentence
        let sentenceLength = currentSentence.length;
        //value of the next letter you need to type
        let letter = currentSentence.charAt(strokeCount);
        
        if (strokeCount < sentenceLength) {
            //increases pxCount by the size of one letter
            pxCount += .71;
            // moves the yellow box one letter to the right
            $('#yellow-block').css('margin-left', pxCount+'em');

            //generates letters in middle of screen
            $('#target-letter').replaceWith('<div class="row col-lg-12 text-center" id="target-letter">' + letter + '</div>');

            //checks if key pressed matches key needed
            if (currentSentence.charCodeAt(strokeCount -1) == event.keyCode) {
                console.log('yes');
            } else {
                console.log('no')
            }


        
        } else if (currentSentence > sentences.length) {
            return ""         ///function to return score will go here
        } else if (strokeCount == sentenceLength){
            //placeholder for next sentence to be displayed
            tempVal = sentences[nextDisplaySentence];
            //replaces old sentence with new one
            $('.sentence').replaceWith('<p class="sentence">' + tempVal + '</p>');
            //increments when keystrokes are greater than the number of chars in the sentnece.
            sentenceCount++;
            //reset keystroke for each new sentence
            strokeCount = 0;
            // reset the position of yellow box
            $('#yellow-block').css('margin-left', '0em');
            pxCount = 0;
            //increment value of next sentence to be displayed
            nextDisplaySentence ++;

            // tempValue = strokeCount;
            $('#target-letter').replaceWith('<div class="row col-lg-12 text-center" id="target-letter">'+ tempVal.charAt(0) + '</div.>');
        }
        //increment the number of key strokes by incrementing with every key press.
        strokeCount++;

    })




    ////////////////// ///////////////// ///////////////// ////////////////// ///////////////////








})