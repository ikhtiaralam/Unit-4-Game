var winCounter = 0;
var lossCounter = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);



var Gem1 = Math.floor(Math.random() * 11) + 1;
var Gem2 = Math.floor(Math.random() * 11) + 1;
var Gem3 = Math.floor(Math.random() * 11) + 1;
var Gem4 = Math.floor(Math.random() * 11) + 1;


$("#winCounter").html(winCounter);
$("#lossCounter").html(lossCounter);

var counter = 0;
$("#curScore").text(counter);

function restartGame() {

targetNumber = Math.floor(Math.random() * 101) + 19;
$("#targetNumber").text(targetNumber);
Gem1 = Math.floor(Math.random() * 11) + 1;
Gem2 = Math.floor(Math.random() * 11) + 1;
Gem3 = Math.floor(Math.random() * 11) + 1;
Gem4 = Math.floor(Math.random() * 11) + 1;
counter = 0;
$("#curScore").text(counter);

}

function win() {

	alert("You win!");
	winCounter ++;
	$("#winCounter").text(winCounter);
	restartGame();
}

function lose() {

	alert("You lose!");
	lossCounter ++;
	$("#lossCounter").text(lossCounter);
	restartGame();
}

$('#Gem1').on ('click', function(){
    counter = counter + Gem1;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Gem2').on ('click', function(){
    counter = counter + Gem2;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Gem3').on ('click', function(){
    counter = counter + Gem3;
    
    $('#curScore').text(counter); 
          
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  

$('#Gem4').on ('click', function(){
    counter = counter + Gem4;
    
    $('#curScore').text(counter); 
         
        if (counter == targetNumber){
          win();
        }
        else if (counter > targetNumber){
          lose();
        }   
  });  










