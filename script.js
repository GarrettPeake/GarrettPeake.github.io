function fade(t) {
    let elem = document.getElementById("blanker")
    for(alpha = 100; alpha > 0; alpha--) {
        elem.setAttribute("style", "opacity: " + (alpha/100.0).toString() + ";");
        await new Promise(r => setTimeout(r, t/100.0*1000.0));
    }
    elem.parentNode.removeChild(elem);
  }