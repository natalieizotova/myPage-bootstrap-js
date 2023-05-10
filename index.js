
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

const items = document.querySelectorAll('.item');

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, options);

items.forEach(item => {
  observer.observe(item);
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeEl = document.querySelector('.menu_close')

hamburger.addEventListener('click', ()=>{
    menu.classList.add('active')
})

closeEl.addEventListener('click', ()=>{
    menu.classList.remove('active')
})



// pieChart


const data = [
  { language: "Python", percent: 30 },
  { language: "Java", percent: 20 },
  { language: "JavaScript", percent: 30 },
  { language: "TypeScript", percent: 20 }
];


const width = 400;
const height = 400;
const radius = Math.min(width, height) / 2;


const color = d3.scaleOrdinal()
  .domain(data.map(d => d.language))
  .range(["#E64C3C", "#3C8DAD", "#F0C808", "#4DB6AC"]);


const pie = d3.pie()
  .value(d => d.percent);


const arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);


const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", `translate(${width / 2},${height / 2})`);


svg.selectAll("path")
  .data(pie(data))
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", d => color(d.data.language))
  .append("title")
  .text(d => `${d.data.language}: ${d.data.percent}%`);


svg.selectAll("text")
  .data(pie(data))
  .enter()
  .append("text")
  .attr("transform", d => `translate(${arc.centroid(d)})`)
  .attr("dy", "0.35em")
  .text(d => `${d.data.language}: ${d.data.percent}%`)
  .attr("fill", "white")
  .attr("font-size", "16px")
  .attr("font-weight", "bold")
  .attr("text-anchor", "middle");


// list-sorter

// Get the input field, submit button, sort button, clear button, and item list from the HTML document
const inputItem = document.getElementById('inputItem');
const submitBtn = document.getElementById('submitBtn');
const sortBtn = document.getElementById('sortBtn');
const clearBtn = document.getElementById('clearBtn');
const itemList = document.getElementById('itemList');

// Add event listeners to the submit, sort, and clear buttons
submitBtn.addEventListener('click', addItem);
sortBtn.addEventListener('click', sortList);
clearBtn.addEventListener('click', clearList);
inputItem.addEventListener('keydown', handleKeyDown);

// This function is called when the submit button is clicked
function addItem() {
    // Get the value of the input field and trim any whitespace
    const itemValue = inputItem.value.trim();

    // Check if the input field is not empty
    if (itemValue.length > 0) {
        // Create a new list item element and set its text content to the input value
        const li = document.createElement('li');
        li.textContent = itemValue;
        // Add the new list item to the item list
        itemList.appendChild(li);
        // Clear the input field
        inputItem.value = '';
    }
}

// This function is called when the sort button is clicked
function sortList() {
    // Convert the item list to an array of list item elements
    const itemsArray = Array.from(itemList.children);
    // Sort the array of list item elements by their text content using the `localeCompare` method
    itemsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Remove all the list item elements from the item list
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    // Add the sorted list item elements back to the item list
    itemsArray.forEach(item => {
        itemList.appendChild(item);
    });
}

// This function is called when the clear button is clicked
function clearList() {
    // Remove all the list item elements from the item list
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}



