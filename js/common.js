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

