$(document).ready(function () {
	
var questionNumber=0;
var truth;
var truthvalue = new Array();
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;
var counter = 5;
var counter2 = counter;
var qcounter;
	var j = 0;	 
var tr;
var k = 0;
var margincounter = 800;




		 
		 











 		$.getJSON('activity.json', function(data) {

		for(i=0;i<data.quizlist.length;i++){ 
			questionBank[i]=new Array;

			truthvalue[i] = new Array;

          
		    questionBank[i][0]=data.quizlist[i].question;

			//questionBank[i][1]=data.quizlist[i].option1;
		//	questionBank[i][2]=data.quizlist[i].option2;
			truthvalue[i]=data.quizlist[i].truth;
		
		
		}
		 numberOfQuestions=questionBank.length; 
		
		


	
		 $('.start_game').on('click', function() {


			$(stage).append('<div class="start_game">start game</div>');

			$("#timer_background").css('display','block !important');

			$(".start_game").remove();
			$("#instructions").remove();
			timer_start();
			   displayQuestion();
			   $("#timer_background").css('opacity','1');
				})
	   

				
		
		
	   



		})//gtjson





function timer_start(){

//$('#timer').html(counter);



var x = setInterval(function () {
  counter = counter-1;

  $('#timer').html(counter);


  if (counter < 1){

	
	
		$(stage).append('<div class="feedback2">TIMEOUT</div>');
		
		timer_timeout();
	
	
	}


},1000);






}







 
function timer_timeout(){

//$("#timer").stop();	
counter = 5;






	changeQuestion();



	}
		




function displayQuestion(){


	
	


	

 var q1;

var rnd = 1;










q1=questionBank[questionNumber][1];







console.log("THE GRAND VALUE OF TR IS   ==== " + tr);








$(stage).append('<div id="questionText">'+questionBank[questionNumber][0]+'</div>');


$('#timer_background').append( '<div id ="timer"></div>');








$("#questionText" ).animate({
    "margin-top" : margincounter,
    }, 8000, function() {
    // Animation complete.
  });



function clicks(){


	
$("#questionText").on("swipeleft", function(){

	
	qcounter = 0;
console.log("SWIPE LEFT"); 
console.log ("COUNTER =  " +  qcounter);
console.log("TRUTH VALUE  = " + truthvalue);





	//$(".option").trigger('click');
	


	calculate();


 });


 
$("#questionText").on("swiperight", function(){

qcounter = 1;

	console.log("SWIPE right");

	console.log ("COUNTER =  " +  qcounter);
	console.log("TRUTH VALUE  = " + truthvalue);

	

	
//	$(".option").trigger('click');


 calculate();



 });


}






clicks();

	
}	

	




  //timeout



 // if (($.timer).html <10){	
//	$(stage).append('<div class="feedback2">TIMEOUT</div>');
	
//	changeQuestion();

//}





 
//display question










function calculate(){




	


tr = truthvalue[j];
	
    console.log("The Value of TR  = " + tr);
	console.log("value of J is   = " + j);
	
//  if(questionLock==false){questionLock=true;	
  //correct answer
  if(qcounter == tr){
   $(stage).append('<div class="feedback1">CORRECT</div>');

   $("#questionText").animate({
	"opacity" : 0.1,
	}, 500);



   score++;
 


   }
  //wrong answer	
  if(qcounter != tr){


	
	
	
   $(stage).append('<div class="feedback2">WRONG</div>');


   $("#questionText").animate({
	"opacity" : 0.1,
	}, 500);

  }
 // }
 timer_timeout();
}

 


	
	function changeQuestion(){
		


		
		questionNumber++;
	
		j++;

		


		

	
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(questionNumber<numberOfQuestions){
		$("#questionText").remove();
		displayQuestion();


	
	}else{displayFinalSlide();}
	
	 
	  
	//$(stage).append('<div class="blank">Going to the Next Question....</div>');



	

$(stage).animate({"z-index": "35"},"slow", function() {$(stage2).css('z-index','20');$(stage2).empty(); });
	
	$(stage).animate({"z-index": "35"},"slow", function() {questionLock=false;});

	






	
	 

	}//change question
	

	
	
	function displayFinalSlide(){
		
		$(stage).append('<div class="questionText">You have finished the DEMO of this MULTIPLE USE engine. hope you enjoyed what you saw!!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
		

		$("#timer_background").css('opacity','0');

		counter = 1000;
	//	window.alert = ("time left  " + counter);



	}//display final slide
	
	
	
	
	
	
	
	});//doc ready