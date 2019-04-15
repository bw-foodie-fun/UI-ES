const dish = document.querySelector('.pizza-banner')
const headerText = document.querySelector('h1')

TweenMax.fromTo(dish, 2, { x: -600, opacity: 0 }, { x: -101, opacity: 1 })

tl = new TimelineMax({})

tl
    .staggerTo('.hidetext', 1, { y: -90, ease: Power4.easeOut, delay: 2 }, .5);