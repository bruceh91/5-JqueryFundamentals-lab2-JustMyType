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
    //removes highlight                            //doesn't unhighlight non-letter characters
        $(window).keyup(function (e) {
            let lowerCase = e.which + 32
        $('#' + e.which).removeClass('highlight');
        $('#' + lowerCase).removeClass('highlight');
        })
        
    })
    

})






