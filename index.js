let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
  search.classLisst.toggle('active');
}

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0)
})