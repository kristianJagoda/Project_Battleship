document.addEventListener('DOMContentLoaded', function(){
  var messageArea = document.querySelector('.messageArea');

  //Creating View Object to display information for the user whether it was a hit or miss

  var view = {


    // This method takes an argument msg and displays it to the user.

    displayMessage: function(msg){
      var messageArea = document.querySelector('.messageArea');
      messageArea.innerHTML = msg;
    },

    displayHit: function(location){
      var cell = document.getElementById(location);
      cell.setAttribute('class', 'hit');
    },

    displayMiss: function(location){
      var cell = document.getElementById(location);
      cell.setAttribute('class','miss');

    }



  };





});
