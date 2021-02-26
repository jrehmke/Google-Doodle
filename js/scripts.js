// This changes everything

// retrieve the element
var element = document.getElementById("art1");

// reset the transition by...
element.addEventListener(
  "click",
  function (e) {
    e.preventDefault;

    // -> removing the class
    element.classList.remove("arts");

    //element.offsetWidth = element.offsetWidth;

    void element.offsetWidth;

    // -> and re-adding the class
    element.classList.add("arts");
  },
  false
);
