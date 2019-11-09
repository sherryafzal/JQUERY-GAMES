$(document).ready(function () {
	
var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
var score=0;
var counter = 20;
var counter2 = counter;
		 



 		$.getJSON('activity.json', function(data) {

		for(i=0;i<data.quizlist.length;i++){ 
			questionBank[i]=new Array;


           
		    questionBank[i][0]=data.quizlist[i].question;

			questionBank[i][1]=data.quizlist[i].option1;
			questionBank[i][2]=data.quizlist[i].option2;
			//questionBank[i][3]=data.quizlist[i].option3;
		}
		 numberOfQuestions=questionBank.length; 
		
	});


	
		 $('.start_game').on('click', function() {

$(".start_game").css('display','none');
			//$(stage).append('<div class="start_game">start game</div>');
			
	$(stage).append('<div id="box1"></div>');
	$(stage).append('<div id="box2"></div>');
	$(stage).append('<div id="box3"></div>');



			
begin_timer();

		
			});







			
            function begin_game(){



			$("#timer_background").css('display','block !important');

			
			
			
			$("#instructions").css('display','none');
			timer_start();
			   displayQuestion();
			   $("#timer_background").css('opacity','1');
				
	   

				
		
		
	   



		}

	



		function begin_timer(){


			$( "#box1" ).fadeOut( 500, "linear", null );	
			$( "#box2" ).fadeOut( 1500, "linear", null );		
			$( "#box3" ).fadeOut( 3000, "linear", begin_game );	

		//	begin_game();


		}

	

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
counter = 20;






	changeQuestion();



	}
		




function displayQuestion(){


	
	


	
 var rnd=Math.random()*2;
rnd=Math.ceil(rnd);
 var q1;
 var q2;










 if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];}
 if(rnd==2){q2=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];}



$(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+ "A   "  +q1+'</div><div id="2" class="option">' + "B  " +q2+'</div>');

$('#timer_background').append( '<div id ="timer"></div>');




	




 $('.option').click(function(){
  if(questionLock==false){questionLock=true;	
  //correct answer
  if(this.id==rnd){
   $(stage).append('<div class="feedback1">CORRECT</div>');
   score++;
   




  

 timer_timeout();



   }
  //wrong answer	
  if(this.id!=rnd){
   $(stage).append('<div class="feedback2">WRONG</div>');

 timer_timeout();


  }


 
	  
  }
});

}
	




  //timeout



 // if (($.timer).html <10){	
//	$(stage).append('<div class="feedback2">TIMEOUT</div>');
	
//	changeQuestion();

//}





 
//display question





	
	function changeQuestion(){
		
		questionNumber++;
	
		

	
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
	
	 
	  
	//$(stage).append('<div class="blank">Going to the Next Question....</div>');


	 $(stage2).animate({"z-index": "35"},"slow", function() {$(stage2).css('z-index','20');$(stage2).empty();});
	
	  $(stage).animate({"z-index": "25"},"slow", function() {questionLock=false;});

	 

	}//change question
	

	
	
	function displayFinalSlide(){
		
		$(stage).append('<div class="questionText">You have finished the DEMO of this MULTIPLE USE engine. hope you enjoyed what you saw!!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
		

		$("#timer_background").css('opacity','0');

		counter = 1000;
	//	window.alert = ("time left  " + counter);



	}//display final slide
	
	
	
	
});