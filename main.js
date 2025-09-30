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






// const top3 = document.createElement("div");
// const mid3 = document.createElement("div");
// const categ3 = document.createElement("div");
// const popular3 = document.createElement("section");

// const boxes3 = [
//   {
//     img: "./images/fruit.png",
//     text: "Fresh Fruit"
//   },
//   {
//     img: "./images/fruit.png",
//     text: "Fresh Fruit"
//   },
//     {
//     img: "./images/fruit.png",
//     text: "Fresh Fruit"
//   },
//     {
//     img: "./images/fruit.png",
//     text: "Fresh Fruit"
//   },
//     {
//     img: "./images/fruit.png",
//     text: "Fresh Fruit"
//   },
//     {
//     img: "./images/fruit.png",
//     text: "Fresh Fruit"
//   },
  
// ]

// boxes3.map((item, index)=>{
// const imgFruit = document.createElement("img");
// const textFruit = document.createElement("h5");
// const box3 = document.createElement("div");
// imgFruit.src = item.img;
// textFruit.innerHTML = item.text;
// box3.append(imgFruit, textFruit);

// box3.classList.add("categ-box");
// top3.append(box3);
// top3.classList.add("categ-top");

// mid3.append(top3);
// mid3.classList.add("categ-mid");


// categ3.appendChild(mid3);
// categ3.classList.add("categ");

// popular.append(categ3);
// popular3.classList.add("popular");
// popular3.classList.add("container");
// document.body.appendChild(popular3);
// })


// const categ = document.createElement("div");
// const popular = document.createElement("section");
// const mid = document.createElement("div");

// categ.classList.add("categ");
// popular.classList.add("popular", "container");
// mid.classList.add("categ-mid");

// const boxes = [
//   [
//     { img: "./images/fruit.png", text: "Fresh Fruit" },
//     { img: "./images/fruit.png", text: "Fresh Vegetables" },
//     { img: "./images/fruit.png", text: "Meat & Fish" },
//     { img: "./images/fruit.png", text: "Snacks" },
//     { img: "./images/fruit.png", text: "Beverages" },
//     { img: "./images/fruit.png", text: "Beauty & Health" }
//   ],
//   [
//     { img: "./images/fruit.png", text: "Frozen" },
//     { img: "./images/fruit.png", text: "Bakery" },
//     { img: "./images/fruit.png", text: "Dairy" },
//     { img: "./images/fruit.png", text: "Household" },
//     { img: "./images/fruit.png", text: "Pet Food" },
//     { img: "./images/fruit.png", text: "Others" }
//   ]
// ];

// boxes.forEach(group => {
//   const topRow = document.createElement("div"); // ✅ new row each time
//   topRow.classList.add("categ-top");

//   group.forEach(item => {
//     const box2 = document.createElement("div");
//     const imgFruit = document.createElement("img");
//     const textFruit = document.createElement("h5");

//     imgFruit.src = item.img;
//     textFruit.textContent = item.text;

//     box2.classList.add("categ-box");
//     box2.append(imgFruit, textFruit);

//     topRow.append(box2);
//   });

//   mid.append(topRow); // ✅ add row to mid
// });

// categ.append(mid);
// popular.append(categ);
// document.body.append(popular);


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



//popular-product-page

const products = [
  [
    {
      img: "./images/apelsin.png",
      text: "chineese cabbage",
      

    },
  ]
]















