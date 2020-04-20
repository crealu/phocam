function mobileMenu() {
  let mobileNav = doc.gebi('nav-mobile');
  if (!(mobileNav.style.display == 'block')) {
    toggleMenuBtn();
    toggleMobileNav(mobileNav, true);
  } else {
      toggleMenuBtn();
      toggleMobileNav(mobileNav, false);
  }
}

function toggleMenuBtn() {
  let bars = doc.gebcn('bar');
  let navBtn = doc.gebi('nav-btn');

  if (bars[2].style.opacity == '0') {
    bars[0].style.transform = 'rotate(0deg)';
    bars[0].style.top = '0px';
    bars[0].style.background = 'white';
    bars[1].style.transform = 'rotate(0deg)';
    bars[1].style.top = '0px';
    bars[1].style.background = 'white';
    bars[2].style.opacity = '1';
    bars[2].style.background = 'white';

  } else {
      bars[0].style.transform = 'rotate(45deg)';
      bars[0].style.top = '5px';
      bars[0].style.background = '#353535';
      bars[1].style.transform = 'rotate(-45deg)';
      bars[1].style.top = '-3px';
      bars[1].style.background = '#353535';
      bars[2].style.opacity = '0';
      bars[2].style.background = '#353535';
  }
}

function toggleMobileNav(menu, showing) {
  let i = 0;
  let id = setInterval(frame, 250);

  showing ? menu.style.display = 'block': menu.style.opacity = '0';

  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      showing ? menu.style.opacity = '1': menu.style.display = 'none';
    }
  }
}



function showHome() {
  let openingWrapper = doc.gebcn('opening-wrapper')[0];
  toggleMobileNav(openingWrapper, false);
  /*
  let topNav = doc.gebcn('nav-container')[0];
  topNav.style.top = '0px';

  let arrowBtn = doc.gebcn('click-arrow-wrapper')[0];
  arrowBtn.style.display = 'none';

  let openingWrapper = doc.gebcn('opening-wrapper')[0];
  openingWrapper.style.display = 'none';
  */
}

function showHoverImg(n) {
  let homeImg = doc.gebcn('home-img');
  for (var j = 0; j < homeImg.length; j++) {
    homeImg[j].style.opacity = '0';
  }
  homeImg[n].style.display = 'block';

  let id = setInterval(frame, 100);
  let i = 0;
  function frame() {
    i++;
    if (i >= 1) {
      homeImg[n].style.opacity = '1';
      clearInterval(id);
    }
  }
}

function playVideo() {
  let video = doc.gebcn('home-video')[0];
  video.play();
}

function scrollTop() {
  window.screenTop = 0;
  console.log(window.screenTop);
}

function checkViewport() {
  let w = window;
  let wWidth = w.innerWidth;
  let wHeight = w.innerHeight;

  let homeImg = doc.gebcn('home-img')[0];

  if (wWidth <= 1055 && wWidth >= 250) {
    let calculation = Math.abs( (wWidth - 1055) / 2.1 );
    homeImg.style.left = '-' + 0 + calculation + 'px';
  } else {
    homeImg.style.left = '0px';
  }
}

window.addEventListener('resize', checkViewport);
window.addEventListener('load', checkViewport);
