const signUpButton = document.querySelector('.hidebutton')
const pizza = document.querySelector('.pizza-banner')
const headerText = document.querySelector('h1')
tl = new TimelineMax({})

tl.fromTo(pizza, 2, { x: -600, opacity: 0 }, { x: -101, opacity: 1 })
tl.staggerTo('.hidetext', .75, { y: -90, ease: Power4.easeOut }, .5);
tl.from('.hidebutton', 01, { y: 90, ease: Power4.easeOut });

signUpButton.addEventListener('mouseover', () => {
    TweenMax.to(pizza, 3, { x: "45%", rotation: 360, scale: 2 })
})

signUpButton.addEventListener('mouseleave', () => {
    TweenMax.to(pizza, 4, { x: "-10%", rotation: 0, scale: 1 })
})