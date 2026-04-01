// time
let time = 2;
let size = 100;
let old = [];
let arr = [];
let run = true;

let container = document.querySelector(".container");
// time
let timeRange = document.querySelector("#time");
timeRange.addEventListener("input",(e)=>{
  time = Number(e.target.value);
})
let reset = document.querySelectorAll("button");
let resetBtn = false;
reset[0].addEventListener("click",()=>{
  resetBtn = true;
  let container = document.querySelector(".container");
  container.innerHTML = "";
  createStick();
  if(run) resetBtn = false; // no sort was running, clear the flag
})
reset[1].addEventListener("click",(e)=>{
  resetBtn = true;
});
// size
let arrRange = document.querySelector("#size");
arrRange.addEventListener("input",(e)=>{
  size = Number(e.target.value);
  let container = document.querySelector(".container");
  container.innerHTML = "";
  createStick();
})


function createStick(){
  old = []
  for(let i=0;i<size;){
    let a = Math.floor(Math.random() * (722 - 20)) + 20;
    if(!old.includes(a)){
      old.push(a);
      i++;
    }
  }
  arr = [];
  for(let i=0;i<size;i++){
    let num = old[i];
    let div = document.createElement("div")
    div.classList.add("common")
    let newArr = old.slice(0,i)
    let index = getIndexes(newArr,num);
    div.setAttribute("data-id"+index,num)
    div.style.height = num+"px"
    div.style.setProperty("--i", i)
    div.classList.add("bar-entering")
    div.addEventListener("animationend", () => div.classList.remove("bar-entering"), { once: true })
    container.append(div)
    let obj = {
      id:num,
      index
    }
    arr.push(obj)
  }
}

createStick()

function getIndexes(arr,k){
  let t = 0;
   for(let i=0;i<arr.length;i++){
     if(arr[i] == k){
       t++;
     }
   }
   return t;
}