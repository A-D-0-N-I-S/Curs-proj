window,addEventListener('scroll', function () {
    let Scroll = document.querySelector('.upward');
    Scroll.classList.toggle("activeScrollTop", window.scrollY>900);
 
})
function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


const accordions = document.querySelectorAll('.accordion');
let accordion;
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        accordion.classList.toggle('active');
     
    })
   
})


window.onscroll = function() {
    var elements = document.querySelectorAll('.accordion'); // выбираем все элементы с классом 'accordion'

    elements.forEach(function(element) {
        var rect = element.getBoundingClientRect(); // получаем позицию элемента относительно видимой части страницы
        var elementTop = rect.bottom - 250; // получаем верхнюю границу элемента

        if (elementTop < 0) { // если верхняя граница элемента выше верхней границы видимой части страницы
            element.classList.remove('active'); // удаляем класс 'active'
        } 
    });
};

// бургер-меню
const menu = document.querySelector('.header_menu');
const menuBtn = document.querySelector('.burger');

const body = document.body;
 if (menu && menuBtn) {
    menuBtn.addEventListener('click', () =>{
        menu.classList.toggle('activ');
        menuBtn.classList.toggle('activ');
        body.classList.toggle('lock');
    })
 }

 document.getElementById('add-form').addEventListener('submit', function (event){
     validation(this);
 })



// МАСКА ДЛЯ НОМЕР ТЕЛЕФОНА
const phone = document.querySelector(".phones");

const mask = new IMask(phone, {
    mask: "{+375}(00)000-00-00",
});