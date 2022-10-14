const marker = document.getElementById("marker");


marker.addEventListener("click", function () {
    
    console.log("hello");
       document.getElementById("number").innerHTML = 0;
    let mark = document.getElementById("mark");
    mark.classList.remove("unread")
    let angela = document.getElementById("angela");
    angela.classList.remove("unread")
    let jacob = document.getElementById("jacob");
    jacob.classList.remove("unread")
    let dotMark = document.getElementById("dotMark");
    dotMark.classList.add("hiddenDot")
    let dotAngela = document.getElementById("dotAngela");
    dotAngela.classList.add("hiddenDot");
    let dotJacob = document.getElementById("dotJacob");
    dotJacob.classList.add("hiddenDot")
  });

