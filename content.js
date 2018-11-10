function addPadding(x) {
    elements = document.getElementsByClassName(x);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.paddingLeft = "33%";
    }
}

function hide(x) {
    elements = document.getElementsByClassName(x);
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

addPadding("qmain");
hide("header");
hide("nav");
hide("footer");
