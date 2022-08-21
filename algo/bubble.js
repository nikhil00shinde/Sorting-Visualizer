async function bubble(){
    for(let i=0;i<size;i++){
      for(let j=0;j<size-i-1;j++){
        let div1 = container.querySelector(`[data-id${arr[j+1].index}='${arr[j+1].id}']`);
        let div2 = container.querySelector(`[data-id${arr[j].index}='${arr[j].id}']`);
        div2.classList.add("compare2")
        await delay(time);
        div2.classList.remove("compare2")
        if(Number(arr[j+1].id) <= Number(arr[j].id)){   
           swapBubble(div1,div2,i,j);
          }
      }
      if(resetBtn)
      throw Error("newm")
    }
  }



