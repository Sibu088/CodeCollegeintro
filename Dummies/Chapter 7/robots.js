var rightEye = document.getElementById("rightbye");

rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + ’%’
        top++;
        if (top === 20){
          clearInterval(id);
        }
      }
     }
     