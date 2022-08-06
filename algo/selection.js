async function selection(){
  for(let i=0;i<size;i++){
    let ind = i
    let div1 = container.querySelector(`[data-id${arr[i].index}='${arr[i].id}']`);
    div1.classList.add("greenC");
    await delay(20);

    for(let j=i+1;j<size;j++){
        let div2 = container.querySelector(`[data-id${arr[j].index}='${arr[j].id}']`);
        div2.classList.add("redC");
        if(Number(arr[ind].id) >= Number(arr[j].id)){
           ind = j
        } 
        await delay(20)
        div2.classList.remove("redC")
    }
    //swap
  
    let div3 = container.querySelector(`[data-id${arr[ind].index}='${arr[ind].id}']`)
      div1.style.height = arr[ind].id+"px";
      div3.style.height = arr[i].id+"px";
      await delay(20)
      div1.removeAttribute("data-id"+arr[i].index);
      div3.removeAttribute("data-id"+arr[ind].index);
      div1.setAttribute("data-id"+arr[ind].index,arr[ind].id);
      div3.setAttribute("data-id"+arr[i].index,arr[i].id);
      let temp = arr[ind];
      arr[ind] = arr[i];
      arr[i] = temp;
  
    
    //remove green color
    div1.classList.remove("greenC")
  }
}

(async () =>{
  await selection();
  await sortDone();
  await white();
  })()