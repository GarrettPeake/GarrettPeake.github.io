var alpha = 1;
var counter = 0;
var resolution = 100.0;
function fade(t) {
  let elem = document.getElementById("blanker");
  counter++;
  setTimeout(() => {
    console.log(alpha);
    alpha -= 1.001 / resolution;
    if (counter < resolution) {
      elem.setAttribute("style", "opacity: ".concat(alpha.toString(), ";"));
      fade(t);
    } else
      setTimeout(() => {
        elem.parentNode.removeChild(elem);
      }, 2 * t);
  }, t / resolution * 1000);
}

function trackIntro() {
  document.getElementById('cardintro').addEventListener('ended', function (e) {
    let elem = document.getElementById('cardintro');
    elem.parentNode.removeChild(elem);

  }, false);
}