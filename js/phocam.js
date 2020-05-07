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
  let mobileLinks = doc.gebcn('nav-item-mobile');
  let rate;
  //showing ? menu.style.display = 'block': menu.style.opacity = '0';
  showing ? menu.style.display = 'block': menu.style.height = '0px';
  showing ? rate = 100: rate = 500;

  if (!showing) {
    doc.gebcn('media-item')[0].style.transition = '0.1s';
    doc.gebcn('media-item')[0].style.opacity = '0';
    doc.gebcn('media-item')[0].style.animation = '0';
    for (var m = 0; m < mobileLinks.length; m++) {
      mobileLinks[m].style.transition = '0.1s';
      mobileLinks[m].style.opacity = '0';
    }
  }
  //showing ? mobileLinks.forEach(m => {m.style.opacity = '0'}): let n = 0;

  let id = setInterval(frame, rate);
  let i = 0;

  function frame() {
    i++;
    if (i >= 1 && i < 2) {
      //showing ? menu.style.opacity = '1': menu.style.display = 'none';
      showing ? menu.style.height = wHeight + 'px': menu.style.display = 'none';
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
        //doc.gebcn('media-item')[0].style.opacity = '1';
        //doc.gebcn('media-item')[0].style.transform = 'scale(1) translateX(0px)';
        doc.gebcn('media-item')[0].style.animation = '0.5s var(--cb-bounce) 0s forwards media_bounce';
      }
    } else {
        if (i >= 3) {
          clearInterval(id);
          for (var m = 0; m < mobileLinks.length; m++) {
            mobileLinks[m].style.transform = 'scale(1.1) translateY(-20px)';
            mobileLinks[m].style.transition = '0.5s ease opacity, 0.5s ease transform';
          }
        }
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
      caroDots.style.opacity = '1';
      if (wWidth <= 500) {
        carousel.style.height = '400px';
        homeMedia.style.height = '500px';
      } else {
        carousel.style.height = '600px';
      }
    }
  }
}

function viewHomeImg(dot) {
  let homeImgs = doc.gebcn('home-img-tog');
  let allDots = doc.gebcn('caro-dot');

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

function checkResized() {
  let homeTog = doc.gebcn('home-img-tog');
  if (wWidth <= 1000 && wWidth >= 250) {
    let calculation = Math.abs( (wWidth - 1055) / 2.1 );
    let homeTogLeft = '-' + 0 + calculation + 'px';

    for (var ht = 0; ht < homeTog.length; ht++) {
      homeTog[ht].style.height = '100%';
      homeTog[ht].style.width = 'auto';
    }

    let leftAdjust = ['150', '175', '200', '175', '200'];

    if (wWidth <= 550) {
      leftAdjust.forEach( (l, i) => {
        let iString = i + 1;
        doc.gebi('caro-' + iString).style.left = '-' + l + 'px';
      });
    }
  } else if (wWidth >= 1000) {
    for (var ht = 0; ht < homeTog.length; ht++) {
      homeTog[ht].style.width = '100%';
      homeTog[ht].style.height = 'auto';
    }
  }

  if (wWidth > 1000) {
    homeTog[3].style.top = '40px';
  }
}

function windowLoaded() {
  wind.scroll({ top: 0 });
  let mediaWrapper = doc.gebcn('home-media-wrapper')[0];
  mediaWrapper.style.height = wHeight + 'px';
  lazyLoadHomeImgs();
  checkResized();
}

function galleryModal(subgal) {
  let modal = doc.gebi('modal');
  let img = subgal.children[0];
  let title = subgal.children[1];
  let para = img.id.replace('-main', '');

  let modTitle = doc.gebcn('modal-title')[0];
  doc.clear(modTitle);
  modTitle.innerHTML = title.textContent;

  let modImg = doc.gebcn('modal-img')[0];
  modImg.src = img.src;

  let galleryTexts = {
    aerial: 'A sky as a canvas of viewpoints. Equipped with a DJI Mavic Pro, I enjoy capturing unique angles unable to be seen by the human eye.',
    architecture: 'The shape and design of buildings has always subtly captured my interest. Viewing urban structures through photography sheds light on the various styles of architecture that I find intriguing.',
    portrait: 'People and photography is a combination that I have only recently started to explore. As much as there is detail in a landscape, there is expression in a face.',
    night: 'Walking in the shadows, I see clearly walking in the light. Features of my nighttime perspectives include city lights, contrast, and the moon (thanks to a 210mm lens).',
    landscape: "As an adventurer, I view landscapes as sometimes having the ability to present an all-encompassing view. Whether that be physical, interpretive, or both, is up to the viewer.",
    longexposure: 'Is light that the human eye can never naturally see ever actually seen? What I love about shooting long exposure is the amount of imagination that becomes more than what meets the eye.'
  }

  let modText = doc.gebcn('modal-text')[0];
  modText.innerHTML =  galleryTexts[para];
  delayZoomShow(modal);
}

function closeModal() {
  let modal = doc.gebi('modal');
  modal.style.transform = 'scale(0)';
}

function scrollToContent(content, fromMenu) {
  if (fromMenu) {
    mobileMenu();
  }

  let scrollLocation = {
    about: 840,
    gallery: 1400,
    services: 5100
  };

  wind.scroll({
    top: scrollLocation[content],
    behavior: 'smooth'
  });

  let scrollPos = wind.scrollY;
  console.log(scrollPos);
}

window.addEventListener('resize', checkResized);
//window.addEventListener('scroll', scrollContent);

window.onload = windowLoaded();
