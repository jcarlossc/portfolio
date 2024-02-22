function readText1(){
    var message = new SpeechSynthesisUtterance();
    text = document.getElementById("text1").innerHTML;
    message.text = text;
    speechSynthesis.speak(message);
}
function stop(){
    speechSynthesis.cancel();
}
function readText2(){
    var message = new SpeechSynthesisUtterance();
    text = document.getElementById("text2").innerHTML;
    message.text = text;
    speechSynthesis.speak(message);
}
function readText3(){
    var message = new SpeechSynthesisUtterance();
    text = document.getElementById("text3").innerHTML;
    message.text = text;
    speechSynthesis.speak(message);
}
function readText4(){
    var message = new SpeechSynthesisUtterance();
    text = document.getElementById("text4").innerHTML;
    message.text = text;
    speechSynthesis.speak(message);
}
function readText5(){
    var message = new SpeechSynthesisUtterance();
    text = document.getElementById("text5").innerHTML;
    message.text = text;
    speechSynthesis.speak(message);
}