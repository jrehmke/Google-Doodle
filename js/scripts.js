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

gsap.fromTo(".cloud-1", {x: 700}, {x: -225, ease: "none", duration: 20,  repeat: -1});
gsap.fromTo(".cloud-2", {x: 500}, {x: -550, ease: "none", duration: 30,  repeat: -1});
gsap.fromTo(".cloud-3", {x: 400}, {x: -600, ease: "none", duration: 15,  repeat: -1});