const menu = document.querySelector('#menu')
const link = document.querySelector('.navbarmenu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    link.classList.toggle('active');
})