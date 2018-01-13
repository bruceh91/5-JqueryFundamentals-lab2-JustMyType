document.addEventListener("DOMContentLoaded", function () {


    $('#keyboard-upper-container').hide();


    $(window).keydown(function (e) {
        if (e.keyCode === 16) {
            $('#keyboard-upper-container').show();
            $('#keyboard-lower-container').hide();
        }
    })

    $(window).keyup(function (e) {
        if (e.keyCode === 16) {
            $('#keyboard-upper-container').hide();
            $('#keyboard-lower-container').show();
        }
        
    })



    $(window).keypress(function (e) {
        let code = e.which;
        $('#' + e.which).addClass('highlight');
        $(window).keyup(function (e) {
            let lowerCase = e.which + 32
        $('#' + e.which).removeClass('highlight');
        $('#' + lowerCase).removeClass('highlight');
        
    })
           
    })

})


//     $(window).keyup(function (e) {
//         let code = "'#" + e.keyCode + "'"
//         $(code).removeClass('highlight');
//         console.log(code);

// })

//     var code = e.keyCode || e.which;
//  if(code == 13)

//     $(window).keydown(function (e) {
//         code = "'"+ e.which +"'"
//             $(code).addClass('highlight');
//     })

//     $(window).keydown(function (e) {
//         if (e.keyCode === 97) {
//             $('#97').addClass('highlight');
//         }
//     })



    // let release = $(window).keyup

    // function highlight(press, release) {
    //     let x = press + (function (e))
    // }







