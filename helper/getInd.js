// time
let time = 2;
let size = 100;
let old = [];
const map = new Map();
let arr = [];
let run = true;

let container = document.querySelector(".container");
// time
let timeRange = document.querySelector("#time");
timeRange.addEventListener("change",(e)=>{
 time = e.target.value;
})

// size
let arrRange = document.querySelector("#size");
arrRange.addEventListener("change",(e)=>{
 size = e.target.value;
 let container = document.querySelector(".container");
 container.innerHTML = "";
 createStick();
})


function createStick(){
  old = []
  for(let i=0;i<size;){
    let a = Math.floor(Math.random() * (722 - 20)) + 20;
    if(!map.has(a)){
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