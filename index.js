//SELECT ALL BUTTONS drum
var btn=document.querySelectorAll(".drum ");

//USE EVENT LISTNER IN THE KEYPRESSES
 document.addEventListener("keypress",hadlekeypress);

 //USING FOR LOOP TO ADD EVENTLISTNER TO EACH BUTTON drum
for (var i=0;i<btn.length;i++){
  btn[i].addEventListener("click",handelClick); 
}

//FUNCTION OF THE KEY PRESS TO READ THE KEY THAT IS PRESSED
function hadlekeypress(event){
key(event.key);   
}

//FUNCTION OF THE CLICK TO KNOW WICH BUTTON GOT CLICKED
function handelClick(){
  var btn =this.innerHTML;
  key(btn);
}

//A GENERAL FUNCTION THAT HOLD THE SWITCH OF THE KEYS AND THE CLICKES 
function key(key){
 switch (key){
  case "W" :
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

   case "A" :
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

     case "S" :
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "D" :
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "J" :
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "K" :
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    case "L" :
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;
 }

}