$(document).ready (function(){
  // for Header
    $('nav ul li li').hide();
    $('li').hover(function(){
        $(this).find('ul>li').stop().slideToggle(400);
    });

// For slider
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });

    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });
});


//for submision button
function myFunction() {
  alert("Reservation confirmed!");
}

// For index page
    
    $('.main-text-block').hide();
    $('.main-text-block').fadeIn(800);
    
