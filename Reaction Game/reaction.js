$(document).ready(function () {

	

	var stage = "#game";
	var score = 0;
	var counter = 0;
	var counter2 = 0;

	
	




	$(stage).append("<div id = 'circle-red'></div>");

	$(stage).append("<div id = 'circle-green'></div>");

	$("#circle-green").css({'display' : 'none'});	
	$("#circle-red").css({'display' : 'none'});	



	var random_var = ((Math.random() * 6) + 2000);

	
 var counter =  ((Math.random() * 6) + 2000);
             

	var counter2 = ((Math.random() * 2) + 3000);

             

	var random_var2 =  ((Math.random() * 2) + 3000);




		 










    $(document).keyup(function (e) {
   



	if (e.keyCode === 32) {


		if( $("#circle-green").css('display') == 'block') {

			score = score + 2;
			console.log("Score is now  " + score);
			$("#score_id").html("My current count is: "+ score);
		
		}


		else{

			$("#score_id").html("My current count is: "+ score);
		
		console.log("red circle");
		score = score - 1;

	


	
		}
		
	

	}

	
		

	});





	

	var random_timer = setInterval(function(){ 





if (counter > random_var){

$("#circle-red").css({'display' : 'none'});	
	console.log("counter1 is  " + counter);
	
	
	
	counter = Math.floor((Math.random() * 8) + 2000);
     
;


 }	


		console.log("counter1  = " + counter);

	counter = counter * 4;


	$("#circle-green").css({'display' : 'none'});	



	$("#circle-red").css({'display' : 'block'});







		
			 }, random_var);
	
			
			///////////////////////////////////////////////////////






			 var random_timer2 = setInterval(function(){ 


			if (counter2 > random_var2){

				$("#circle-green").css({'display' : 'none'});
			
			
	var counter2 =  Math.floor((Math.random() * 2) + 8000);
             



			
			 }		 
			 

				counter2 = counter2 * 2;



	
				$("#circle-red").css({'display' : 'none'});	
$("#circle-green").css({'display' : 'block'});
console.log("counter2  = " + counter2);



	
		
						
							 }, random_var2);
							


							



							 if (random_var = random_var2){

								console.log("mismatch, timer is equal")
clearInterval(randomtimer);
clearInverval(randomtimer2);


							 }
							 else{





random_timer.start();

random_timer2.start();


							 }






				var main_timer = setInterval(function(){


random_timer.start();

random_timer2.start();


$('#score_id').html(score);




				}, 1000);




				main_timer.start();



							
						


				
		
		
	   



		});
		
		
		