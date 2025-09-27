const open = document.getElementById("btn");
const modal = document.getElementById("overlay");
const close = document.querySelector(".exit");

open.addEventListener("click", ()=>{
  modal.classList.add('show');
});
close.addEventListener("click", ()=>{
  modal.classList.remove('show');
})
