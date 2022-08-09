// time
let time = 20
let size = 100;
let old = [];
const map = new Map();
for(let i=0;i<size;){
  let a = Math.floor(Math.random() * (722 - 20)) + 20;
  if(!map.has(a)){
    old.push(a);
    i++;
  }
}
let arr = []



let container = document.querySelector(".container");
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


function getIndexes(arr,k){
  let t = 0;
   for(let i=0;i<arr.length;i++){
     if(arr[i] == k){
       t++;
     }
   }
   return t;
}