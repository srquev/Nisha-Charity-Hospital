$(document).ready(function(){
    $('.box').mouseenter(function(){
        $(this).css({
       'opacity':'0.7'    
        });
    });
    
    
    $('.box').mouseout(function(){
        $(this).css({
       'opacity':'1'    
        });
    });
    
});