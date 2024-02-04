var password = "31415";
var question = "yes";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong password, try again.');
        return false;
    }
    
     if(document.getElementById('pass1').value == password) {
          alert('Correct!');
      }

      if(document.getElementById('pass2').value != question) {
        alert('Wrong password, try again.');
        return false;
    }
    
     if(document.getElementById('pass2').value == question) {
          alert('Correct!');
      }
    
}