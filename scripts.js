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

    let sentenceCount = 1;    //increments when keystrokes are greater than the number of chars in the sentnece.
    let currentSentence = 0;  //shows current sentence number 
    let strokeCount = 0       //counts the number of key strokes by incrementing with every key press.

    $(window).keypress(function () {
        currentSentence = sentences[sentenceCount];
        let sentenceLength = currentSentence.length;
        if (strokeCount <= sentenceLength) {
            console.log(strokeCount);     // will be where the highlighting function goes later
            console.log(sentenceCount);
        } else if (currentSentence > sentences.length) {
            return ""         ///function to return score will go here
        } else {
            $('.sentence').replaceWith('<p class="sentence">' + currentSentence + '</p>');//replaces old sentence with new one
            sentenceCount++;
            strokeCount = 0;//reset keystroke for each new sentence
        }
        strokeCount++;

    })










})