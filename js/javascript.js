$(document).ready (function(){
   $('nav ul li li').hide();
   $('li').hover(function(){
       $(this).find('ul>li').stop().slideToggle(400);
   });

// For index page
    
    $('.main-text-block').hide();
    $('.main-text-block').fadeIn(800);
    
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

   $("#flip4").click(function(){
       $("#panel4").slideToggle("slow");
   });

   $("#flip5").click(function(){
       $("#panel5").slideToggle("slow");
   });
});