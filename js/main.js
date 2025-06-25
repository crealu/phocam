let burger = document.getElementById('burger');
let bars = document.getElementsByClassName('bar');
let mobileNav = document.getElementById('nav-mobile');
let mobileList = document.getElementsByClassName('nav-list-mobile')[0];
let mobileLinks = document.getElementsByClassName('nav-item-mobile');
let submitBtn = document.getElementById('submit-btn');

let state = {
  menuOpen: false
}

function toggleNav() {
  if (!state.menuOpen) {
    toggleMobileNav(mobileNav, true);
  } else {
    toggleMobileNav(mobileNav, false);
  }

  state.menuOpen = !state.menuOpen;
  switchBurger();
}

function switchBurger() {
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
    bars[0].style.background = 'white';
    bars[1].style.transform = 'rotate(-45deg)';
    bars[1].style.top = '-3px';
    bars[1].style.background = 'white';
    bars[2].style.opacity = '0';
    bars[2].style.background = 'white';
  }
}

function openNav() {
  mobileNav.style.display = 'block';
  setTimeout(() => {
    mobileNav.style.height = '100vh';
  }, 250);
}

function closeNav() {
  mobileNav.style.height = '0px';
  setTimeout(() => {
    mobileNav.style.display = 'none';
  }, 500);
}

function toggleMobileNav(menu, showing) {
  if (showing) {
    openNav()
    mobileList.style.opacity = '1';
  } else {
    mobileList.style.opacity = '0';
    closeNav();
  }

  let rate = showing ? 100 : 500;

  if (!showing) {
    for (var m = 0; m < mobileLinks.length; m++) {
      mobileLinks[m].style.transition = '0.1s';
      mobileLinks[m].style.opacity = '0';
    }

    setTimeout(() => {
      for (var m = 0; m < mobileLinks.length; m++) {
        mobileLinks[m].style.transition = '0.5s ease';
      }
    }, 500)
  }

  let id = setInterval(frame, rate);
  let i = 0;

  function frame() {
    i++;
    if (i >= 1 && i < 2) {
      if (showing) {
        mobileNav.style.height = window.innnerHeight + 'px';
      } else {
        mobileNav.style.display = 'none';
      }
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
      } else if (i >= 6 && i < 7) {
        mobileLinks[4].style.opacity = '1';
        mobileLinks[4].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 7 && i < 8) {
        clearInterval(id);
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

function handleLoad() {
  burger.addEventListener('click', toggleNav);
  for (let i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', toggleNav);
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  let name = document.getElementsByClassName('name-input')[0].value;
  let email = document.getElementsByClassName('email-input')[0].value;
  let message = document.getElementsByClassName('message-input')[0].value;
  
  let data = {
    name: name,
    email: email,
    message: message
  }

  console.log(data);

  const options = {
    method: 'post',
    headers: {'Content-Type': 'application/json'},    
    body: JSON.stringify(data)
  }

  await fetch('https://phocam-mail-737252cd3924.herokuapp.com/send-email', options)
    .then(res => res.json())
    .then(data => { console.log(data) })
    .catch(err => { console.log(err) })
}

submitBtn.addEventListener('click', handleSubmit);
window.addEventListener('load', handleLoad);
