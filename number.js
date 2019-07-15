function sendData(form) {
    var guessNum = form.inputbox.value;
    var randNum = Math.round( Math.random() * 201 ) - 100;

   
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
