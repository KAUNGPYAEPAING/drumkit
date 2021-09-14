// Detect by clicking the button

var numberofdrumbth = document.querySelectorAll("button").length;

for (i = 0; i < numberofdrumbth; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var clickbutton = this.innerHTML;
    makeSong(clickbutton);
    btnanimation(clickbutton);
  });

}

// Detecting Base on keyboard

document.addEventListener("keydown", function(event){
  makeSong(event.key);
  btnanimation(event.key);
})


function makeSong(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "k":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    default:console.log(clickbutton);

  }
}

function btnanimation(currentkey){

  var btnActive = document.querySelector("." + currentkey);

  btnActive.classList.add("pressed");

  setTimeout(function() {
    btnActive.classList.remove("pressed");
  },100)
}
