function fade(elem, t) {
  let resolution = 200.0;
  setTimeout(() => {
    let curr = window.getComputedStyle(elem).getPropertyValue("opacity");
    elem.style.opacity = parseFloat(curr) + (t > 0 ? -1.001 / resolution : 1.001 / resolution);
    if (curr > 0)
      fade(elem, t);
    else if (t > 0)
      elem.style.zIndex = -999
  }, Math.abs(t) / resolution * 1000);
}

function fadeBlanker() {
  let t = 1;
  let elem = document.getElementById("blanker");
  fade(elem, t);
  window.onbeforeunload = function(){
    elem.style.zIndex = 99;
    fade(elem, -t)
  };
}

function animateIntro() {
  return
}