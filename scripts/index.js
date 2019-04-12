// TO MAKE ANIMATION WORK PROPERLY UNCOMMENT THIS IN THE END
window.onload = function() {
  scrollToSection('landing',0);
}


ScrollReveal({ reset: true });

ScrollReveal().reveal('.section-content', {delay: 450, duration: 800});


var isMobile = {
  Android: function() {
          // console.log('android');
          return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
          // console.log('blackberry');
          return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
          // console.log('ios');
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
          // console.log('opera');
          return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
          // console.log('windows');
          return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// nav-bar
let toggled = false;
const nav = document.getElementsByClassName('nav')[0];
const btn = document.getElementsByClassName('nav-tgl')[0];
const navUl = document.getElementsByClassName('nav-toggle')[0];

var fullpage = $("#fullpage");
var delay = 900;
if(!isMobile.any()){
  var fullpageObj = new FullPage(fullpage, delay, isSafari);        //FullPage object.... Add all transition functions to this object
  console.log('testing');
}
else {
  var fullpageObj = new FullPage(fullpage, delay, isSafari);
  console.log('running mobile');
}

$(document).ready(function(){

  //dots in aboutpage
  for (var i=0;i<16;i++) { 
      $(".matrix").append("<div class='dot' style='width:"+ 7+"px; height:"+7+"px'></div>"); 
  }

});


btn.onclick = function(evt) {
  if (!toggled) {
    showNav();
  } else {
    hideNav();
  }
}

function showNav() {
  toggled = true;
  btn.classList.add('toggled');
  nav.classList.add('active');
  setTimeout(function() {
    navUl.classList.remove('nav-toggle');
  },270)
}

function hideNav() {
  toggled = false;
  nav.classList.remove('active');
  btn.classList.remove('toggled');
  setTimeout(function() {
    navUl.classList.add('nav-toggle');
  },220)
}

// function animateSection(sectionNum) {
//   console.log(sectionNum);
//   TweenMax.staggerFrom(".animate"+sectionNum,1,{y: 200, opacity: 0, delay: 0.5},0.4);
// }

function scrollToSection(e, sectionNumber) {
  hideNav();
  fullpageObj.moveToSection(e, sectionNumber);
}

$(".section-arrow").click(()=>{
  fullpageObj.nextSection();
});

