var arr = [];
var userClick = [];
var clickedButton;
var level;
var start = false;
pressTheKey();
function gameOver(){
  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 1000);
  start = false;
  arr = [];
  $("#level-title").text("Game Over, Press any key to start");
  pressTheKey();
}

function check(userLength){

    if(arr[userLength] === userClick[userLength]){
      if(arr.length === userClick.length){
        generateNumber();
      }
    } else {
      gameOver();
    }
}


function pressTheKey(){
  document.addEventListener("keypress", function(){
    if(!start){
      level = 0;
      generateNumber();
      start = true;
    }
  })
}

function generateNumber(){
  userClick = [];
  level++;
  $("#level-title").text("level " + level);
  var num = Math.trunc((Math.random()*4)+1);
  if(num === 1)
  {
    arr.push("green");
    setTimeout(function(){

      animate("green");
      sound("green");
    }, 1000);
  }else if(num === 2)
  {
    arr.push("red");
    setTimeout(function(){

      animate("red");
      sound("red");
    }, 1000);
  }else if(num === 3)
  {
    arr.push("yellow");
    setTimeout(function(){

      animate("yellow");
      sound("yellow");
    }, 1000);
  }else {
    arr.push("blue");
    setTimeout(function(){

      animate("blue");
      sound("blue");
    }, 1000);
  }
}



  $(".btn").on("click", function(){
    clickedButton = $(this).attr("id");
    userClick.push(clickedButton);
    check(userClick.length-1);
    animate(clickedButton);
    sound(clickedButton);
  })



function animate(clickedButton){
  clickedButton = "#" + clickedButton;
  $(clickedButton).addClass("pressed");
  setTimeout(function(){
    $(clickedButton).removeClass("pressed"); }, 100);
}
function sound(clickedButton){
  switch (clickedButton) {
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
  }
}
