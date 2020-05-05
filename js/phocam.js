const wind = window;
const wWidth = wind.innerWidth;
const wHeight = wind.innerHeight;

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
    bars[0].style.background = '#676767';
    bars[1].style.transform = 'rotate(0deg)';
    bars[1].style.top = '0px';
    bars[1].style.background = '#676767';
    bars[2].style.opacity = '1';
    bars[2].style.background = '#676767';

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
  let id = setInterval(frame, 500);

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
  doc.gebcn('click-arrow-wrapper')[0].style.animation = 'none';
  doc.gebcn('click-arrow-wrapper')[0].style.transition = '0.5s ease';

  let openingClasses = [
    'opening-logo-wrapper',
    'opening-text-wrapper',
    'click-arrow-wrapper'
  ];

  openingClasses.forEach( c => {
    doc.gebcn(c)[0].style.opacity = '0';
  });

  let nav = doc.gebcn('nav-container')[0];
  let carousel = doc.gebcn('home-carousel-wrapper')[0];
  let homeMedia = doc.gebcn('home-media-wrapper')[0];
  let openingWrapper = doc.gebcn('opening-wrapper')[0];
  let caroDots = doc.gebcn('home-carousel-dots')[0];
  let topics = doc.gebcn('topic-content');

  homeMedia.style.transition = '1s';
  caroDots.style.display = 'block';

  let id = setInterval(frame, 500);
  let i = 0;
  function frame() {
    i++;
    if (i >= 4) {
      clearInterval(id);
      document.querySelector('body').style.overflowY = 'scroll';
    }
    if (i >= 1.5) {
      nav.style.top = '0px';
      nav.style.opacity = '1';
      openingWrapper.style.display = 'none';
      for (var t = 0; t < topics.length; t++) {
        topics[t].style.display = 'block';
      }
    } else if (i >= 0.5 || i <= 1.0) {
      homeMedia.style.top = '0px';
      carousel.style.width = '90%';
      carousel.style.height = '600px';
      caroDots.style.opacity = '1';
    }
  }


  /*
  let topNav = doc.gebcn('nav-container')[0];
  topNav.style.top = '0px';

  let arrowBtn = doc.gebcn('click-arrow-wrapper')[0];
  arrowBtn.style.display = 'none';
  */
}

function viewHomeImg(dot) {
  let homeImgs = doc.gebcn('home-img-tog');
  let allDots = doc.gebcn('caro-dot');

  for (var h = 0; h < homeImgs.length; h++) {
    homeImgs[h].style.zIndex = '40';
    allDots[h].style.background = '#e2e2e2';
    homeImgs[h].style.animation = 'none';
  }

  homeImgs[dot].style.opacity = '1';
  allDots[dot].style.background = '#6d6d6d';
}

function scrollTop() {
  window.screenTop = 0;
  console.log(window.screenTop);
}

function checkViewport() {
  scrollTop();
  let mediaWrapper = doc.gebcn('home-media-wrapper')[0];
  mediaWrapper.style.height = wHeight + 'px';

  lazyLoadHomeImgs();

  let homeTog = doc.gebcn('home-img-tog');
  if (wWidth <= 1000 && wWidth >= 250) {
    let calculation = Math.abs( (wWidth - 1055) / 2.1 );
    let homeTogLeft = '-' + 0 + calculation + 'px';
    for (var ht = 0; ht < homeTog.length; ht++) {
      homeTog[ht].style.left = homeTogLeft;
    }
  } else if (wWidth >= 1000) {
    for (var ht = 0; ht < homeTog.length; ht++) {
      homeTog[ht].style.width = '100%';
    }
  }

  if (wWidth > 1000) {
    homeTog[3].style.top = '40px';
  }
}

function lazyLoadHomeImgs() {
  let waitImg = doc.gebcn('wait-img');
  var id = setInterval(frame, 1000);
  var i = 0;
  function frame() {
    i++;
    if (i >= 3 && i <= 5) {
      waitImg[0].style.display = 'block';
    } else if (i >= 5 && i <= 6) {
      waitImg[1].style.display = 'block';
    } else if (i >= 6 && i <= 8) {
      waitImg[2].style.display = 'block';
    } else if (i >= 8 && i <= 10) {
      waitImg[3].style.display = 'block';
    }
  }
}

window.addEventListener('resize', checkViewport);

window.onload = checkViewport();
