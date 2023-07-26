let mobileNav = document.getElementById('nav-mobile');
let bars = document.getElementsByClassName('bar');
let navBtn = document.getElementById('nav-btn');

function mobileMenu() {
  if (!(mobileNav.style.display == 'block')) {
    toggleMenuBtn();
    toggleMobileNav(mobileNav, true);
  } else {
      toggleMenuBtn();
      toggleMobileNav(mobileNav, false);
  }
}

function toggleMenuBtn() {
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
  let mobileLinks = document.getElementsByClassName('nav-item-mobile');
  menu.style.display = showing ? 'block' : 'none';
  menu.style.height = !showing ? '0px' : 'auto';
  let rate = showing ? 100 : 500;
  // showing ? menu.style.display = 'block': menu.style.height = '0px';
  // showing ? rate = 100: rate = 500;

  if (!showing) {
    document.getElementsByClassName('media-item')[0].style.transition = '0.1s';
    document.getElementsByClassName('media-item')[0].style.opacity = '0';
    document.getElementsByClassName('media-item')[0].style.animation = '0';
    for (var m = 0; m < mobileLinks.length; m++) {
      mobileLinks[m].style.transition = '0.1s';
      mobileLinks[m].style.opacity = '0';
    }
  }

  let id = setInterval(frame, rate);
  let i = 0;

  function frame() {
    i++;
    if (i >= 1 && i < 2) {
      showing ? menu.style.height = window.innnerHeight + 'px': menu.style.display = 'none';
    }
    if (showing) {
      if (i >= 2 && i < 3) {
        mobileLinks[0].style.opacity = '1';
        mobileLinks[0].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 3 && i < 4) {
        mobileLinks[1].style.opacity = '1';
        mobileLinks[1].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 4 && i < 5) {
        mobileLinks[2].style.opacity = '1';
        mobileLinks[2].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 5 && i < 6) {
        mobileLinks[3].style.opacity = '1';
        mobileLinks[3].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 9 && i < 10) {
        clearInterval(id);
        document.getElementsByClassName('media-item')[0].style.animation = '0.5s var(--cb-bounce) 0s forwards media_bounce';
      }
    } else {
        if (i >= 2) {
          clearInterval(id);
          for (var m = 0; m < mobileLinks.length; m++) {
            mobileLinks[m].style.transform = 'scale(1.1) translateY(-30px)';
            mobileLinks[m].style.transition = '0.5s ease opacity, 0.5s ease transform';
          }
        }
    }
  }
}

function showHome() {
  document.getElementsByClassName('click-arrow-wrapper')[0].style.animation = 'none';
  document.getElementsByClassName('click-arrow-wrapper')[0].style.transition = '0.5s ease';

  let openingClasses = [
    'opening-logo-wrapper',
    'opening-text-wrapper',
    'click-arrow-wrapper'
  ];

  openingClasses.forEach( c => {
    document.getElementsByClassName(c)[0].style.opacity = '0';
  });

  let nav = document.getElementsByClassName('nav-container')[0];
  let carousel = document.getElementsByClassName('home-carousel-wrapper')[0];
  let homeMedia = document.getElementsByClassName('home-media-wrapper')[0];
  let openingWrapper = document.getElementsByClassName('opening-wrapper')[0];
  let caroDots = document.getElementsByClassName('home-carousel-dots')[0];
  let topics = document.getElementsByClassName('topic-content');

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
      caroDots.style.opacity = '1';
      if (window.innnerWidth <= 500) {
        carousel.style.height = '400px';
        homeMedia.style.height = '500px';
      } else {
        carousel.style.height = '600px';
      }
    }
  }
}

function viewHomeImg(dot) {
  let homeImgs = document.getElementsByClassName('home-img-tog');
  let allDots = document.getElementsByClassName('caro-dot');

  for (var h = 0; h < homeImgs.length; h++) {
    homeImgs[h].style.zIndex = '40';
    allDots[h].style.background = '#e2e2e2';
    homeImgs[h].style.animation = 'none';
  }

  homeImgs[dot].style.zIndex = '41';
  homeImgs[dot].style.opacity = '1';
  allDots[dot].style.background = '#6d6d6d';
}

function lazyLoadHomeImgs() {
  let waitImg = document.getElementsByClassName('wait-img');
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





function galleryModal(subgal) {
  let modal = document.getElementById('modal');
  let img = subgal.children[0];
  let title = subgal.children[1];
  let para = img.id.replace('-main', '');

  let modTitle = document.getElementsByClassName('modal-title')[0];
  clear(modTitle);
  modTitle.innerHTML = title.textContent;

  let modImg = document.getElementsByClassName('modal-img')[0];
  modImg.src = img.src;

  let galleryTexts = {
    aerial: 'A sky as a canvas of viewpoints. Equipped with a DJI Mavic Pro, I enjoy capturing unique angles from above.',
    architecture: 'The shape and design of buildings has always subtly captured my interest. Viewing urban structures through photography sheds light on the various styles of architecture that I find intriguing.',
    portrait: 'People and photography is a combination that I have only recently started to explore. As much as there is detail in a landscape, there can be expression in a face.',
    night: 'Walking in the shadows, I see clearly walking in the light. Features of my nighttime perspectives include city lights, contrast, and the moon (thanks to a 210mm lens).',
    landscape: "As an adventurer, I view landscapes as sometimes having the ability to present an all-encompassing view. Whether that be physical, interpretive, or both, is up to the viewer.",
    longexposure: 'Is light that the human eye can never naturally see ever actually seen? What I love about shooting long exposure is the amount of imagination that goes into each shot.'
  }

  let modText = document.getElementsByClassName('modal-text')[0];
  modText.innerHTML =  galleryTexts[para];
  delayZoomShow(modal);
}

function closeModal() {
  let modal = document.getElementById('modal');
  modal.style.transform = 'scale(0)';
}

function scrollToContent(content, fromMenu) {
  if (fromMenu) {
    mobileMenu();
  }
  // fromMenu ? mobileMenu() : null;

  let scrollLocation = {
    about: [840, 650],
    gallery: [1400, 1100],
    services: [5100, 2500]
  };

  let vp = window.innerWidth <= 600 ? 1 : 0;
  // window.innnerWidth <= 600 ? vp = 1: vp = 0;

  window.scroll({
    top: scrollLocation[content][vp],
    behavior: 'smooth'
  });

  console.log(scrollLocation[content]);
}

function checkResized() {
  let homeTog = document.getElementsByClassName('home-img-tog');
  
  if (window.innnerWidth <= 1000 && window.innnerWidth >= 250) {
    let calculation = Math.abs( (window.innnerWidth - 1055) / 2.1 );
    let homeTogLeft = '-' + 0 + calculation + 'px';

    for (var ht = 0; ht < homeTog.length; ht++) {
      homeTog[ht].style.height = '100%';
      homeTog[ht].style.width = 'auto';
    }

    let leftAdjust = ['150', '175', '200', '175', '200'];

    if (window.innnerWidth <= 550) {
      leftAdjust.forEach( (l, i) => {
        let iString = i + 1;
        document.getElementById('caro-' + iString).style.left = '-' + l + 'px';
      });
    }
  } else if (window.innnerWidth >= 1000) {
    for (var ht = 0; ht < homeTog.length; ht++) {
      homeTog[ht].style.width = '100%';
      homeTog[ht].style.height = 'auto';
    }
  }

  if (window.innnerWidth > 1000) {
    homeTog[3].style.top = '40px';
  }
}


function windowLoaded() {
  window.scroll({ top: 0 });
  let mediaWrapper = document.getElementsByClassName('home-media-wrapper')[0];
  mediaWrapper.style.height = window.innnerHeight + 'px';
  lazyLoadHomeImgs();
  checkResized();
}

window.addEventListener('resize', checkResized);
window.addEventListener('load', windowLoaded);
// window.onload = windowLoaded();
