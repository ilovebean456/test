var password = "31415";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong password, try again.');
        return false;
    }
    
     if(document.getElementById('pass1').value == password) {
          alert('Correct!');
      }
    
}