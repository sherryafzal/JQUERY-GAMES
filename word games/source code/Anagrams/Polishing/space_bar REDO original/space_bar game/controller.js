$(document).ready(function () {




    var stage="#game";
    var image ="#image";
var clicks = 0;
var clicksnow = 0;

var incr = 1;


begin();

    $(stage).append("<div class = 'start_game'>Press space bar to begin</div>");



function begin(){

    $(".start_game").css({'display' : 'none'});
start_game();
}





function start_game(){

    $(stage).append("<div id = 'game'><img src='main.png'></div>");




    $(stage).append("<div id = 'image'><img src='bar.jpg'></div>");


 var clicks_count = setInterval(function(){ 

clicks = clicks - 10;


     }, 300);


      keysdownward();
clicks = clicksnow;
}





    




function keysdownward(){

 

    $(window).keyup(function (e) { 
        
        
        
clicks = clicksnow;


        if (e.key === ' ' || e.charCode === 32) {



clicks = clicksnow + 15;
          


            
if (clicks > 470){
 
    clearInterval(testing);
    clearInterval(clicks_count);
    console.log("ALERT");
    $("#image").css({'margin-top' : '-490px !important'});
    

document.getElementById('#image').onkeyup = null;



}




            
if (clicks < -40){
 
    clicks = -40;
    console.log("ALER lowest count");
    console.log(clicks);
  
    



}

   window.setInterval(clicks_count);






      

        clicksnow = clicks;
console.log(clicks);

      //   e.preventDefault();
          console.log('Space pressed');

      


         var testing =  setInterval(function(){ 

            $("#image").css({'margin-top' : "-" + clicks + "px"});
            
            clicks = clicksnow;
                 }, 3);

                }
                 
            
                });



}





 clicks_count.start();  



   

 testing.start();


 


    
    












});
