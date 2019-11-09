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
		 



		 
		 


 timer_start();






 
 



 		$.getJSON('activity.json', function(data) {

		for(i=0;i<data.quizlist.length;i++){ 
			questionBank[i]=new Array;


           
		    questionBank[i][0]=data.quizlist[i].question;

			questionBank[i][1]=data.quizlist[i].option1;
			questionBank[i][2]=data.quizlist[i].option2;
			questionBank[i][3]=data.quizlist[i].option3;
		}
		 numberOfQuestions=questionBank.length; 
		

		displayQuestion();
		
		})//gtjson






function timer_start(){

$('#timer').html(counter);



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


	
	

	
 var rnd=Math.random()*3;
rnd=Math.ceil(rnd);
 var q1;
 var q2;
 var q3;








 

if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];}
if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];}
if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];}




$(stage).append('<div class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="option">'+q1+'</div><div id="2" class="option">'+q2+'</div><div id="3" class="option">'+q3+'</div>');

$(stage).append( '<div id ="timer" style="color:white; padding:100px;">YOU HAVE TEN SECONDS</div>');



	




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


 
	
	

	




  //timeout



 // if (($.timer).html <10){	
//	$(stage).append('<div class="feedback2">TIMEOUT</div>');
	
//	changeQuestion();

//}





 }})
}//display question





	
	function changeQuestion(){
		
		questionNumber++;
	
		

	
	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}
	
	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}
	
	 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
	 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});

	 

	}//change question
	

	
	
	function displayFinalSlide(){
		
		$(stage).append('<div class="questionText">You have finished the DEMO of this MULTIPLE USE engine. hope you enjoyed what you saw!!<br><br>Total questions: '+numberOfQuestions+'<br>Correct answers: '+score+'</div>');
		

		counter = 1000;
		window.alert = ("time left  " + counter);



	}//display final slide
	
	
	
	
	
	
	
	});//doc ready