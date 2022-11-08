'use script';

const social_div = document.querySelector('.social_media');
const button_top = document.querySelector('.fa-chevron-up');
const main_page = document.querySelector('.wrapper');


function handleHover(e) {
    if (e.target.classList.contains('fa')) {
    const link = e.target;
    const siblings = link.closest('.social_media').querySelectorAll('.fa');
    
    siblings.forEach(el => {
        if (el !== link) {
            el.style.opacity = this;
        }
    })
}

}

social_div.addEventListener('mouseover', handleHover.bind(0.5));
social_div.addEventListener('mouseout', handleHover.bind(1));


const take_up = function(e) {
    e.preventDefault();

    main_page.scrollIntoView({top: 0, behavior: 'smooth'});
}

button_top.addEventListener('click', take_up);