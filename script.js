function fade(elem, t) {
  // Fades in or out an element in time t, to fade out make t negative
  elem.setAttribute("style", "z-index: 9999;");
  var alpha = t>0?1:0;
  var counter = 0;
  var resolution = 100.0;
  function fadeInner(elem, t) {
    console.log("run");
    counter++;
    setTimeout(() => {
      console.log(alpha);
      alpha += t>0 ? -1.001 / resolution : 1.001 / resolution;
      if (counter < resolution) {
        elem.setAttribute("style", "opacity: ".concat(alpha.toString(), ";"));
        fadeInner(elem, t);
      } else
        setTimeout(() => {
          elem.setAttribute("style", "opacity: 0;");
          elem.setAttribute("style", "z-index: -9999;");
        }, Math.abs(t));
    }, Math.abs(t) / resolution * 1000);
  }
  fadeInner(elem, t);
}

function fadeBlanker() {
  let elem = document.getElementById("blanker");
  document.addEventListener('DOMContentLoaded', (event) => {
    //event.preventDefault();
    //event.returnValue = '';
    elem.setAttribute("style", "z-index: 9999;");
    fade(elem, -1)
  });
  fade(elem, 1);
}

function trackIntro() {
  document.getElementById('cardintro').addEventListener('ended', function (e) {
    let elem = document.getElementById('cardintro');
    fade(elem, 2);
  }, false);
}