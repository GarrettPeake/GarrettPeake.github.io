function fade(elem, t) {
  let resolution = 100.0;
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
  let t = .5;
  let elem = document.getElementById("blanker");
  fade(elem, t);
  window.onbeforeunload = function(){
    elem.style.zIndex = 99;
    fade(elem, -t)
  };
}

function moveEverything(){
  return 1;
}

function trackIntro() {
  let t = .5;
  let elem = document.getElementById('cardintro');
  let blanker2 = document.getElementById("blanker2");
  blanker2.style.zIndex = 97;
  // Testing
  fade(elem, t);
  fade(blanker2, t)
  // document.getElementById('cardintro').addEventListener('ended', function (e) {
  //   let elem = document.getElementById('cardintro');
  //   fade(elem, t);
  //   fade(blanker2, t)
  //   setTimeout(() => {
  //     moveEverything();
  //   }, t);
  // }, false);
}