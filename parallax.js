let bg = document.getElementById('#bg');
let moon = document.getElementById('#moon');
let mountain = document.getElementById('#mountain');
let road = document.getElementById('#road');
let text = document.getElementById('#text');

window.addEventListener('scroll', function(){
    const value = window.scrollY;
    // console.log(value);
    this.bg.style.top = value * 0.5 + "px";
    this.moon.style.left = -value * 0.5 + "px";
    this.mountain.style.top = -value * 0.15 + "px";
    this.road.style.top = value * 0.15 + "px";
    this.text.style.top = value * 1 + "px";
});