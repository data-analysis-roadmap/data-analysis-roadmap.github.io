function goHome() {
  
    var y = document.getElementById("clearMenu");
    var x = document.getElementById("welcome");

    y.style.display = "none";

      x.style.display = "block";
  }


function goPrep() {
    var z = document.getElementById("stagePrep");
    if (z.style.display === "none") {
        z.style.display = "block";
      } else {
        z.style.display = "none";
      }
  }
