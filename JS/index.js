window,addEventListener('scroll', function () {
    let Scroll = document.querySelector('.upward');
    Scroll.classList.toggle("activeScrollTop", window.scrollY>500);
 
})
function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// const wrpButton = document.querySelector('.wrp');
// const wrapBlock = document.querySelector('.wrapp');
// const detButton = document.querySelector('.det');
// const rightBlock = document.querySelector('.right');

// wrpButton.addEventListener('click', () => {
//     wrapBlock.style.display = wrapBlock.style.display === 'none' ? 'grid' : 'none';

// });

// detButton.addEventListener('click', () => {
//     rightBlock.style.display = rightBlock.style.display === 'none' ? 'grid' : 'none';
 
// });


// document.addEventListener('DOMContentLoaded', function(){
//     var button = document.querySelector('.header_content_btn');
//     button.addEventListener('click', function(){
//         var servicesTitle = document.querySelector('.services__title');
//         var topPos = servicesTitle.getBoundingClientRect().top + window.pageYOffset - window.pageYOffset;

//         var start = null;
//         var duration = 2000; // Продолжительность анимации в миллисекундах

//         window.requestAnimationFrame(function step(timestamp){
//             if (!start) start = timestamp;
//             var progress = timestamp - start;
//             window.scrollTo(0, easeInOutQuad(progress, window.pageYOffset, topPos, duration));
//             if (progress < duration) window.requestAnimationFrame(step);
//         });
//     });
// });

// function easeInOutQuad(t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t + b;
//     t--;
//     return -c/2 * (t*(t-2) - 1) + b;
// };



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





// // получаем кнопку и элемент, до которого нужно прокрутить
// const button = document.querySelector('.header_content_btn');
// const element = document.querySelector('.services');
// // добавляем обработчик события клика на кнопке
// button.addEventListener('click', function() {
// // прокручиваем страницу к элементу
// window.scrollBy(0,3000);
// });

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

//  const anchors = document.querySelectorAll('a[href*="#"]');

//  anchors.forEach(anchor => {
//     console.log(anchor);
//     anchor.addEventListener('click', event =>{
//         event.preventDefault();

//         const blockID = anchor.getAttribute('href').substring(1);
        
//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
//  })




 function validation(form){
     console.log(form);
 }

 document.getElementById('add-form').addEventListener('submit', function (event){
     validation(this);
 })



