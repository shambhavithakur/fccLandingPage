var selectToggler = document.querySelector("button");
var getNavbar = document.querySelector(".navbar");
var getFirstBar = document.querySelector(".firstBar");
var toggleBtn = document.querySelector(".navbarToggle");
var navlistBtn = document.querySelector(".closelist");
var getNavListBackground = document.querySelector("#nav-bar");
var getNavList = getNavListBackground.querySelector("#nav-list");
var getNavLink = getNavList.querySelectorAll("a");

toggleBtn.addEventListener("click", navListOpen);
navlistBtn.addEventListener("click", navListClose);
getNavListBackground.addEventListener("click", function() {
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

var section1Position = document.querySelector(".section1").scrollTop;

window.onscroll = function() {
  var currentPosition = window.pageYOffset;

  if (currentPosition <= 150) {
    getNavbar.classList.remove("navBarStyle");
    getFirstBar.style.top = "0";
  } else {
    getNavbar.classList.add("navBarStyle");
    getFirstBar.style.top = "-4px";
  }
};

for (var i = 0; i < getNavLink.length; i++) {
  getNavLink[i].addEventListener("click", navListClose);
}
