function swapBubble(div1,div2,i,j){
  div1.style.height = arr[j].id+"px";
  div2.style.height = arr[j+1].id+"px";
  div1.removeAttribute("data-id"+arr[j+1].index);
  div2.removeAttribute("data-id"+arr[j].index);
  div1.setAttribute("data-id"+arr[j].index,arr[j].id);
  div2.setAttribute("data-id"+arr[j+1].index,arr[j+1].id);
   let k = arr[j]
   arr[j] = arr[j+1] 
   arr[j+1] = k
}


function swap(div1,div2,i,j){
  div1.style.height = arr[i].id+"px";
  div2.style.height = arr[j].id+"px";
  div1.removeAttribute("data-id"+arr[j].index);
  div2.removeAttribute("data-id"+arr[i].index);
  div1.setAttribute("data-id"+arr[i].index,arr[i].id);
  div2.setAttribute("data-id"+arr[j].index,arr[j].id);
   let k = arr[i]
   arr[i] = arr[j] 
   arr[j] = k
}

function colorAdd(div1,div2){
  div1.classList.add("redC")
  div2.classList.add("redC");
}

function colorRemove(div1,div2){
  div1.classList.remove("redC")
  div2.classList.remove("redC");
}