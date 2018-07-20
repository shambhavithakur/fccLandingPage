var selectToggler = document.querySelector('button');
var getNavbar = document.querySelector('.navbar');
var getFirstBar = document.querySelector('.firstBar');
var toggleBtn = document.querySelector('.navbarToggle');
var navlistBtn = document.querySelector('.closelist');
var getNavListBackground = document.querySelector('#nav-bar');
var getNavList = getNavListBackground.querySelector('#nav-list');
var getNavLink = getNavList.querySelectorAll('a');

toggleBtn.addEventListener('click', navListOpen);
navlistBtn.addEventListener('click', navListClose);
getNavListBackground.addEventListener('click', function(){
    selectToggler.classList.remove("toggleStyle");
});

function navListOpen() {
    document.querySelector("#nav-bar").style.height = "100%";
}

function navListClose() {
    document.querySelector("#nav-bar").style.height = "0%";
    selectToggler.classList.toggle("toggleStyle");
    return false;
}

var currentPosition = window.pageYOffset;
var previousPosition = window.pageYOffset;
var headerPosition = document.querySelector('header').scrollTop;
var section1Position = document.querySelector('.section1').scrollTop;

window.onscroll = function () {
    var currentPosition = window.pageYOffset;
    if (previousPosition > currentPosition) {
        getNavbar.style.top = '0';
        getNavbar.classList.add('navBarStyle');
        getNavbar.style.transition = 'all .4s ease-in';
    } else {
        getNavbar.style.top = '-15rem';
        getNavbar.classList.remove('navBarStyle');
        getNavbar.style.transition = 'all .4s ease-in';
    }

    if (currentPosition === section1Position) {
        getFirstBar.style.top = '0';
        getNavbar.classList.remove('navBarStyle');
    } else {
        getFirstBar.style.top = '-4px';
    }

    previousPosition = currentPosition;
}

for(var i = 0; i<getNavLink.length; i++){
    getNavLink[i].addEventListener('click', navListClose);
}


// Media query
function mediaQuery(widthValue) {
    if (widthValue.matches) { 
        getNavListBackground.addEventListener('mouseover', function(){
            getNavbar.classList.add('navBarStyle');
            getNavbar.style.transition = 'all .4s ease-in';
            getNavbar.style.transitionDelay = '.10s'; 
        });
    }
}

var w961 = window.matchMedia("(min-width: 961px)");
mediaQuery(w961);
w961.addListener(mediaQuery);