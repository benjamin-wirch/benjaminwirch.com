var i = 0;
var txt = "Hi! I'm Ben.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("welcometext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
