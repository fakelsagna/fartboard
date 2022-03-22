//fart and shart players
function playFart() {
rand = Math.floor(Math.random() * 3) + 1;
  
  var file = "audio/farts/fart" + rand + ".mp3";
  
  new Audio(file).play();
}
function playShart(rand) {
  rand = Math.floor(Math.random() * 3) + 1;
  
  var file = "audio/sharts/shart" + rand + ".mp3";
  
  new Audio(file).play();
}