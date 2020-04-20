const doc = {
  gebi: (i) => { return document.getElementById(i) },
  gebcn: (c) => { return document.getElementsByClassName(c) },
  clear: (e) => { while(e.firstChild) { e.removeChild(e.firstChild); } },
  createl: (e) => { return document.createElement(e) },
  textnode: (t) => { return document.createTextNode(t) },
  gsv: (e, s) => { return getComputedStyle(e).getPropertyValue(s) }
};

function delayZoomShow(el) {
  let id = setInterval(frame, 100);
  let i = 0;
  el.style.display = 'block';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      el.style.opacity = '1';
      el.style.transform = 'scale(1)';
    }
  }
}
