const trigger = document.querySelector('.trigger');
const input = document.querySelector('.input');

trigger.addEventListener('click', ()=>{
    if(!input.classList.contains('input-open')){
        input.classList.add('input-open');
        trigger.innerHTML="<i class='fas fa-times'></i>";

    }
    else{
        input.classList.remove('input-open');
        trigger.innerHTML="<i class='fas fa-search'></i>";
    }
});


var header = document.querySelector('header');
var lastScrollPosition = 0;

function updateHeader() {
  var currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollPosition > lastScrollPosition) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', updateHeader);
