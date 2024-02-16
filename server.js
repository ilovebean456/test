var password = "21424";
var question = "yes";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong password, try again.');
        return false;
    }
    
     if(document.getElementById('pass1').value == password) {
          alert('Correct!');
      }
}

function passcheck2(){
    if(document.getElementById('pass2').value != question) {
        alert('WRONG ANSWER');
        return false;
    }
    else if(document.getElementById('pass2').value != question)
    
     if(document.getElementById('pass2').value == question) {
          alert('YIPPEE');
      }
    
}
