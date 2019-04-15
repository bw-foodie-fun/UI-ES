const dish = document.querySelector('.pizza-banner')
const headerText = document.querySelector('h1')

TweenMax.fromTo(dish, 2, { x: -600, opacity: 0 }, { x: -101, opacity: 1 })


tl = new TimelineMax({})

tl
    .staggerTo('.hidetext', .75, { y: -90, ease: Power4.easeOut, delay: 2 }, .5);
tl.from('.hidebutton', 01, { y: 90, ease: Power4.easeOut });



dish.addEventListener('mouseover', () => {
    TweenMax.to(dish, 3, { x: 600, rotation: 360, scale: 3 })
})

dish.addEventListener('mouseleave', () => {
    TweenMax.to(dish, 4, { x: -101, rotation: 0, scale: 1 })
})