// var buttonColors = ["red", "blue", "green", "yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var level;
// var start = false;
// pressTheKey();
// function pressTheKey(){
//   document.addEventListener("keypress", function(){
//     if(!start){
//       level = 0;
//       nextSequence();
//       start = true;
//     }
//   })
// }
// function gameOver(){
//   var audio = new Audio("sounds/wrong.mp3");
//   audio.play();
//   $("body").addClass("game-over");
//   setTimeout(function(){
//     $("body").removeClass("game-over");
//   }, 1000);
//   start = false;
//   pressTheKey();
// }
// function nextSequence(){
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("level " + level);
//   var randomChosenColor;
//   var num = Math.trunc(Math.random()*4);
//   randomChosenColor = buttonColors[num];
//   gamePattern.push(randomChosenColor);
//   setTimeout(function(){
//     sound(randomChosenColor);
//     animate(randomChosenColor);
//   }, 1000);
//
// }
//
// function checkAnswer(currentLevel){
//   if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
//   {
//     if(gamePattern.length === userClickedPattern.length)
//     {
//       nextSequence();
//     }
//   } else{
//     gameOver();
//   }
//
// }
//
// $(".btn").on("click", function(){
//   var userChosenColor = $(this).attr("id");
//   userClickedPattern.push(userChosenColor);
//   checkAnswer(userClickedPattern.length-1);
//   animate(userChosenColor);
//   sound(userChosenColor);
// })
//
// function animate(clickedButton){
//   clickedButton = "#" + clickedButton;
//   $(clickedButton).addClass("pressed");
//   setTimeout(function(){
//     $(clickedButton).removeClass("pressed"); }, 100);
// }
// function sound(clickedButton){
//
//       var audio = new Audio("sounds/" + clickedButton + ".mp3");
//       audio.play();
// }
