var randNum = 0;
window.onload = function loadData(){
    randNum = Math.floor(Math.random() * Math.floor(100))+ 1;
    document.getElementById("myspan").innerHTML = randNum;
};

function sendData(form) {
    var guessNum = form.inputbox.value; 
   guessNum = parseFloat(guessNum);
  
   // get value from text box

   if (guessNum < randNum) {
    {alert ("Sorry, You are too low!");}
}
else {
    if (guessNum > randNum) {
        alert ("Sorry, you are too High!");}
    else {
        alert ("Correct! Nice Job!");
    }       
}
}

