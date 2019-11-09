$(document).ready(function () {




    var stage="#game";
    var image ="#image";
var clicks = 0;
var incr = 1;
var counter = 0;




    $(stage).append("<div id = 'game'><img src='main.png'></div>");




    $(stage).append("<div id = 'image'><img src='bar.jpg'></div>");


 var clicks_count = setInterval(function(){ 

clicks = clicks - 10;




     }, 300);


     keysdownward();




function keysdownward(){

 

    $(window).keyup(function (e) {
        if (e.key === ' ' || e.charCode === 32) {


            counter = counter + 1;
            console.log("COUNTER COUNT IS   " + counter);





            
if (counter < 27){
           
 
$('.results').html("<div>YOU'RE A SPEED DEMON</div>");

      
            console.log("ALERT counter is less than 20 ");





}


  


if (counter > 30){
              

    $(".results").html("<div> you're VERY Anxious.</div>");
    console.log("ALERT counter is more than 40 ");

 


}





if (counter > 50){
              

    $(".results").html("<div> seriously?</div>");
    console.log("ALERT counter is more than 40 ");

 


}
          
          

         
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





        clicks = clicks + 15;


console.log(clicks);

      //   e.preventDefault();
          console.log('Space pressed');

      


         var testing =  setInterval(function(){ 

            $("#image").css({'margin-top' : "-" + clicks + "px"});
            
            
                 }, 3);

                }
                 
            
                });



}





 clicks_count.start();  



   

 testing.start();


 


  
    












});
