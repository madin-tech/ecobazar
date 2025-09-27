const open = document.getElementById("btn");
const modal = document.getElementById("overlay");
const close = document.querySelector(".exit");

open.addEventListener("click", ()=>{
  modal.classList.add('show');
});
close.addEventListener("click", ()=>{
  modal.classList.remove('show');
});


const bag = document.getElementById('shopping');
const drawer = document.getElementById('drawer');
const exit = document.querySelector('.close');
const box = document.getElementById('box');

bag.addEventListener("click", ()=>{
  drawer.classList.add('opened'); 
  box.classList.add('opened');
});
exit.addEventListener("click", ()=>{
  drawer.classList.remove('opened');
  box.classList.remove('opened');
});
