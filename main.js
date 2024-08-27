let currentSlide = 0;

const showSlide = (index) => {
    const slides = document.querySelectorAll('.slider_sub');
    const slider = document.querySelector('.slider');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

const onClickNextButton = () => {
    showSlide(currentSlide + 1);
}

const onClickBeforeButton = () => {
    showSlide(currentSlide - 1);
}

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
  showSlide(currentSlide);
};

window.onscroll = function () {
  isScrolled();
};


