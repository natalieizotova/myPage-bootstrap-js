
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
