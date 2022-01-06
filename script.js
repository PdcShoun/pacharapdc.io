console.log(20)

window.onscroll = function() {myFunction()};

var header = document.getElementById("top");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}



console.log(50)