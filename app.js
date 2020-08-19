//Animation

const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const intro = document.querySelector('.intro');
const headline = document.querySelector('.headline');
const slider = document.querySelector('.slider');

const tl = new TimelineMax();

//ease make the animation smoothly and nicely

tl.fromTo(intro, 1.5, {height: "0%"}, {height: "95%", ease: Power2.easeInOut})
  .fromTo(intro, 1, {width: "100%"}, {width: "95%", ease: Power2.easeInOut})
  .fromTo(slider, 1, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1")
  .fromTo(logo, 0.5, {y: 15, opacity: 0}, {y: 0, opacity: 1}, "-=0.3")
  .fromTo(menu, 0.5, {y: 15, opacity: 0}, {y: 0, opacity: 1}, "-=0.5")
  .fromTo(headline, 0.5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, "-=0.2");
  //slider -=1, it means second intro and slider will start to animate at the same time
  //here 1s is the duration of second intro animation