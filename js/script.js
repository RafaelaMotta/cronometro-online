var sec = 0;
var min = 0;
var hr = 0;

var interval;

function twoDigits(digit) {
  if (digit < 10) {
    return "0" + digit;
  } else {
    return digit;
  }
}

function trocar() {
    if (document.querySelector('button').classList.contains('start-btn')) {
        document.querySelector('button').classList.remove('start-btn')
        document.querySelector('button').classList.add('pause-btn')  
        document.querySelector("button").innerHTML = "Pausar";  
        watch(); interval =setInterval(watch, 10);
    } else {
        document.querySelector('button').classList.remove('pause-btn')
        document.querySelector('button').classList.add('start-btn')
        document.querySelector("button").innerHTML = "Iniciar";
        clearInterval(interval);
    }
}

function stop() {
  document.querySelector('button').classList.remove('pause-btn')
  document.querySelector('button').classList.add('start-btn')
  document.querySelector("button").innerHTML = "Iniciar";
  clearInterval(interval);
  sec = 0;
  min = 0;
  
  var textarea= document.querySelector("#message_text")
  textarea.innerHTML = "Eu gastei " + document.getElementById("watch").innerText  + " para:" 
   
  document.getElementById("watch").innerText = "00:00:00";
   

}

function watch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      min = 0;
      hr++;
    }
  }
  document.getElementById("watch").innerText =
    twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec);
}