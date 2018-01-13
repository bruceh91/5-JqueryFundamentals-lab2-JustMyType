document.addEventListener("DOMContentLoaded", function(){


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

// if (event.keyCode == 15) {
//     $('#keyboard-upper-container').show();
//     $('#keyboard-lower-container').hide();}



// $('#keyboard-upper-container').toggle(function (event) {
//     if (event.keycode == 15 ) {
//         $('#keyboard-upper-container').show();
//         $('#keyboard-lower-container').hide();
//     }
// });


});




