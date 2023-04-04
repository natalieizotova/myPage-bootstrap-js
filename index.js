
gsap.from('.header-nav', {delay:0.5, duration:2, y:120, ease:'power2.in', opacity:0})
gsap.from('.about-img_anim', {x:-100, duration:2, delay:1, opacity:0})

const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["media/1.jpg", "media/2.jpg", "media/3.jpg", "media/4.jpg", "media/5.jpg", "media/6.jpg", "media/7.jpg"];
let i = 0;

next.addEventListener('click', () =>{
    i++;
    if (i>photos.length-1) {
        i=0;
    }
    document.querySelector('#pictures').src=photos[i];
})
back.addEventListener('click', ()=>{
    i--;
    if (i<0) {
        i=photos.length-1;
    }
    document.querySelector('#pictures').src=photos[i];
})

setInterval(pictureChange, 2000);

function pictureChange() {
    document.body.querySelector('#pictures').src=photos[i];
    i++;
    if(i > photos.length-1) {
        i = 0;
    }
}
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const numBalls = 80;
const balls = [];
for (let i = 0; i < numBalls; i++) {
let ball = document.createElement("div");
ball.classList.add("ball");
ball.style.background = colors[Math.floor(Math.random() * colors.length)];
ball.style.left = `${Math.floor(Math.random() * 95)}vw`;
ball.style.top = `${Math.floor(Math.random() * 70)}vh`;
ball.style.transform = `scale(${Math.random()})`;
ball.style.width = `${Math.random()*1.3}rem`;
ball.style.height = ball.style.width;
balls.push(ball);
document.querySelector('#about').append(ball);
}
balls.forEach((el, i) => {
let to = {
x: Math.random() * (i % 2 === 0 ? -11 : 11),
y: Math.random() * 12
};
let anim = el.animate(
[
{ transform: "translate(0, 0)" },
{ transform: `translate(${to.x}rem, ${to.y}rem)` }
],
{
duration: (Math.random() + 1) * 2500, 
direction: "alternate",
fill: "both",
iterations: Infinity,
easing: "ease-in-out"
}
);
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

