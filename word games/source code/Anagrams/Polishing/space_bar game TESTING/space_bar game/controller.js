$(document).ready(function () {




    var stage="#game";
    var image ="#image";
var clicks = 0;
var incr = 1;


$(stage).append("<div class = 'start_game'>Press Space Bar to begin Game</div>");



$(window).keyup(function (e) {
    if (e.charCode === 13) {

    begin();

     
    }keysdownward();
    });



function begin(){

$(".start_game").css({'display' :  "none"});


}




function keysdownward(){



    

    $(stage).append("<div id = 'game'><img src='main.png'></div>");




    $(stage).append("<div id = 'image'><img src='bar.jpg'></div>");


 var clicks_count = setInterval(function(){ 

clicks = clicks - 10;


     }, 300);

 

    $(window).keyup(function (e) {
        if (e.key === ' ' || e.charCode === 32) {



            
        clicks = clicks + 15;





            
if (clicks > 470){
 
    clearInterval(testing);
    clearInterval(clicks_count);
    console.log("ALERT");
    $("#image").css({'margin-top' : '-490px !important'});
    

document.getElementById('#image').onkeyup = null;



}




            
if (clicks < -40){
 
    clicks = -40;
    console.log("ALERT");
    console.log(clicks);
  
    



}else{

   window.setInterval(clicks_count);
}







console.log(clicks);

      //   e.preventDefault();
          console.log('Space pressed');

      


         var testing =  setInterval(function(){ 

            $("#image").css({'margin-top' : "-" + clicks + "px"});
            
            
                 }, 3);

                }
                 
            
                });



}





 //clicks_count.start();  



   

// testing.start();


 


    
    












});
