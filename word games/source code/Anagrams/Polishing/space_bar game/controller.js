$(document).ready(function () {




    var stage="#game";
    var image ="#image";
var clicks = 0;
var incr = 1;





$(stage).append("<div class = 'start_game'>Press The Space Bar Once to Start Game</div>");

begin();


function begin(){





$(window).keyup(function (e) {
    if (e.key === ' ' || e.charCode === 32) {


start_game();


$(".start_game").css({'display' : 'none'});



clicks = 0;


}});

   




  
    


}



var movement =  setInterval(function(){ 

    $("#image").css({'margin-top' : "-" + clicks + "px"});
    
    
         }, 3);




 var clicks_count = setInterval(function(){ 

clicks = clicks - 10;

console.log(clicks);

     }, 300);





function start_game(){
    


    $(stage).append("<div id = 'game'><img src='main.png'></div>");




    $(stage).append("<div id = 'image'><img src='bar.jpg'></div>");



clicks = -40;
    keysdownward();

      
}
   


function keysdownward(){

 

    $(window).keyup(function (e) {
        if (e.key === ' ' || e.charCode === 32) {

            clicks = clicks + 15;
            
if (clicks > 470){
 
    clearInterval(movement);
    clearInterval(clicks_count);
    console.log("ALERT max clicks reached");
    $("#image").css({'margin-top' : '-490px !important'});
    

document.getElementById('#image').onkeyup = null;



}




            
if (clicks < -40){
 
    clicks = -40;
    console.log("ALERT below norm");
   
  
    



}else{

   window.setInterval(clicks_count);
}




       

window.setInterval(movement);
window.setInterval(clicks_count);






        e.preventDefault();
          console.log('Space pressed');

      


        
            
        }});




}





//movement.start();
    
//clicks_count.start();

 
 


            });












