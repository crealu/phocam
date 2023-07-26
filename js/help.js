// const doc = {
//   createl: (e) => { return document.createElement(e) },
//   textnode: (t) => { return document.createTextNode(t) },
//   gsv: (e, s) => { return getComputedStyle(e).getPropertyValue(s) }
// };

function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function delayZoomShow(element) {
  let id = setInterval(frame, 100);
  let i = 0;
  element.style.display = 'block';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      element.style.opacity = '1';
      element.style.transform = 'scale(1)';
    }
  }
}
