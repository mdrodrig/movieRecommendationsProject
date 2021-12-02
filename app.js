
/* Collapsible*/

(document).addEventListener('DOMContentLoaded', function () {
    var coll = document.getElementsByClassName("collapsible");
    var i;
  
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  });
  
  /* Images in array - Movie Picker */
  
  function myFunction() {
    var pictures = [
      "badboys.jpg",
      "The_Golden_Compass.jpeg",
      "bad_teacher.jpeg",
      "gonegirl.jpg",
      "halloween.jpeg",
      "moulinrouge.jpg",
      "serendipity.jpg",
      "armageddon.jpeg",
      "6th sense.png",
      "Room_(2015_film).png",
    ];
    var index = document.getElementById('movieByGenre').selectedIndex;
    document.getElementById('img1').src = pictures[index];
  }
  
  