const openMenu = () => {
  document.getElementById("sidebar").style.maxWidth = "720px";
  document.getElementById("sidebar").style.width = "100%";
  document.getElementById("header-scrolled").style.marginLeft = "0px";
};

const closeMenu = () => {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("header-scrolled").style.marginLeft = "0";
  document.getElementById("header-scrolled").style.marginLeft = "0";
};

const isScrolled = () => {
  const bodyScroll = document.body.scrollTop > 100;
  const documentScroll = document.documentElement.scrollTop > 100;
  if (bodyScroll || documentScroll) {
    document.getElementById("header").className = "header-none";
    document.getElementById("header-scrolled").className = "header-scrolled";
    document.getElementById("sidebar").className = "sidebar";
  } else {
    document.getElementById("header").className = "header";
    document.getElementById("header-scrolled").className = "header-none";
  }
};

window.onload = function () {
  isScrolled();
};

window.onscroll = function () {
  isScrolled();
};

