const hamBtn = document.querySelector('.ham_btn');
const moMenu = document.querySelector('.mo_menu');
const header = document.querySelector('header');
const topBtn = document.querySelector('top_btn_wrap');

// hamburger menu
hamBtn.addEventListener('click', ()=> {
  hamBtn.classList.toggle('open');
  moMenu.classList.toggle('open');
  header.classList.toggle('shadow');
});

// header scroll fixed
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
}

window.onscroll = function() {scrollFunction()};

// back to top
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 스크롤 이벤트
const scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
const elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {
  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      // element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 800
      && rect.bottom >= 800)
    ||
    (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top >= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 800 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}