function delay(time) {
  return new Promise((resolve, reject) => {
          setTimeout(resolve, time);
  });
}

async function sortDone(){
  for(let j=1;j<size;j++){
    let div1 = container.querySelector(`[data-id${arr[j-1].index}='${arr[j-1].id}']`)
    let div2 = container.querySelector(`[data-id${arr[j].index}='${arr[j].id}']`);
    await delay(2);
    div1.classList.remove("redC");
    div1.classList.add("greenC");
    await delay(3);
    div2.classList.add("redC");
    if(j == size -1){
     div2.classList.remove("redC")
    div2.classList.add("greenC")
    }
   }
   await delay(50);
}


async function white(){
    for(let i=0;i<size;i++){
     let div = container.querySelector(`[data-id${arr[i].index}='${arr[i].id}']`);
     div.classList.remove("greenC");
      await delay(15)
    }
}