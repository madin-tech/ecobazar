// const open = document.getElementById("btn");
// const modal = document.getElementById("overlay");
// const close = document.querySelector(".exit");

// open.addEventListener("click", ()=>{
//   modal.classList.add('show');
// });
// close.addEventListener("click", ()=>{
//   modal.classList.remove('show');
// });


// const bag = document.getElementById('shopping');
// const drawer = document.getElementById('drawer');
// const exit = document.querySelector('.close');
// const box = document.getElementById('box');

// bag.addEventListener("click", ()=>{
//   drawer.classList.add('opened'); 
//   box.classList.add('opened');
// });
// exit.addEventListener("click", ()=>{
//   drawer.classList.remove('opened');
//   box.classList.remove('opened');
// });









//categ-page
const mid = document.createElement("div");
const categ = document.createElement("div");
const popular = document.createElement("section");


mid.classList.add("categ-mid");
categ.classList.add("categ");
popular.classList.add("popular", "container");


const boxes = [
[
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
  {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
],
 [
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
  {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
    {
    img: "./images/fruit.png",
    text: "Fresh Fruit"
  },
] 
];
boxes.forEach(group=>{
  const row = document.createElement("div");
  row.classList.add("categ-top");
  group.forEach(item=>{
    const img = document.createElement("img");
    const text = document.createElement("h5");
    const box = document.createElement("div");
    img.src=item.img;
    text.innerHTML=item.text;
    box.append(img, text);
    box.classList.add("categ-box");
      row.appendChild(box);
  })
mid.appendChild(row);
});

categ.appendChild(mid);
popular.appendChild(categ);
document.body.appendChild(popular);



// popular-product-page

// const products = [
//   [
//     {
//       img: "./images/apelsin.png",
//       name: "chineese cabbage",
//       price: "$12.00",
//       stars: 
//     }
//   ]
// ]

const left = document.querySelector(".carousel-left");
const right = document.querySelector(".carousel-right");
const carousel = document.querySelector(".carousel-items");
current = 0;
const images = [
  {
    src:"./images/veg1.jpg",
  },
  {
    src:"./images/veg2.jpg",
  },
  {
    src:"./images/veg3.jpg",
  },
  {
    src:"./images/veg4.jpg",
  },
  {
    src:"./images/veg5.jpg",
  }
];

images.map((item)=>{
const box = document.createElement("div");
const img = document.createElement("img");
box.classList.add("carousel-item");
img.src=item.src;
box.appendChild(img);
carousel.appendChild(box);

});

right.addEventListener("click", ()=>{
 current++;
carousel.style.transform = `translateX(-${current*33.33}%)`;
});


left.addEventListener("click", ()=>{
current--;
carousel.style.transform = `translateX(-${current*33.33}%)`;
});















