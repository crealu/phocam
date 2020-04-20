function toggleNavList() {
  let navList = document.getElementById('nav-list-container-mobile');
  let body = document.body;
  if (!(navList.style.left === '100px')) {
    navList.style.left = '100px';
    navList.style.opacity = '1';
    //body.style.opacity = '0.5'
  } else {
      navList.style.left = '355px';
      navList.style.opacity = '0';
      ///body.style.opacity = '1';
  }
}

function playVideo() {
  let video = doc.gebcn('home-video')[0];
  video.play();
}

// clears the children of any div
function clearDiv(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

// fade current title out
function fadeTitleOut() {
  if (document.getElementsByClassName('active-content')[0]) {
    let activeC = document.getElementsByClassName('active-content')[0];
    activeC.style.opacity = '0';
    activeC.classList.remove("active-content");
  }
}

// changes title
function changeTitle(title, titleH) {
  let newTitle = document.createTextNode(title);
  titleH.appendChild(newTitle);
}

// displays the selected topic content and hides all the rest
function displayProject(div) {
  let topicContents = document.getElementsByClassName('topic-content');
  for (let i = 0; i < topicContents.length; i++) {
    topicContents[i].style.opacity = '0';
    topicContents[i].style.display = 'none';
  }

  let contentToDisplay = document.getElementById(div);
  contentToDisplay.style.display = 'block';
  contentToDisplay.style.opacity = '1';
}

function displayContent(topic) {
  let sth = document.getElementById('section-title-here');
  sth.style.opacity = '0';
  fadeTitleOut();
  var i = 1;
  let id = setInterval(frame, 1000);
  function frame() {
    i--;
    if (i == 0) {
      clearInterval(id);
      clearDiv(sth);

      let titleH2 = document.createElement("h2");
      titleH2.setAttribute("class", "section-title");

      let titleDiv = document.createElement("div");
      titleDiv.setAttribute("id", "section-title-wrapper");

      titleDiv.appendChild(titleH2);
      sth.appendChild(titleH2);

      switch (topic) {
        case 'About':
          toggleNavList();
          changeTitle(topic, titleH2);
          displayProject('about-content');
          break;
        case 'Services':
          toggleNavList();
          changeTitle(topic, titleH2);
          displayProject('services-content');
          //createList('s');
          break;
        case 'Gallery':
          toggleNavList();
          changeTitle(topic, titleH2);
          displayProject('photo-content');
          //createList('va');
          break;
        case 'Showreel':
          toggleNavList();
          changeTitle(topic, titleH2);
          displayProject('video-content');
        break;
      }
      sth.style.opacity = '1';
    }
    document.getElementById('portfolio-footer').style.display = 'block';
  }
}
