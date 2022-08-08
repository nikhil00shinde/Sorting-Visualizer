function swap2(i,j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp; 
}

async function partition(arr,start,end){
  let i = start;
  let j = start -1;
  await delay(time)
  let div = container.querySelectorAll("div");
  div[end].classList.add("blueC");
  await delay(time)

  while(i < end){
  await delay(time)
   
    if(arr[i].id <= arr[end].id){
      j++;
      let div1 = div[i]
      let div2 = div[j]
      await delay(time+20)


      colorAdd(div1,div2)
     await delay(time)
      swap(div1,div2,j,i)
  await delay(time+20)
      colorRemove(div1,div2)
    }
    i++;
  }
  let div1 = div[j+1];
  let div2 = div[end]
  await delay(time+20)
  colorAdd(div1,div2)
  await delay(time)
  swap(div1,div2,end,j+1)
  div[end].classList.remove("blueC")
  await delay(time+20)
  colorRemove(div1,div2)
  return j+1;
}



async function quickSort(arr,start,end){
    
  if(start <= end){
    let pivot = await partition(arr,start,end);
    await  quickSort(arr,start,pivot-1);
    await quickSort(arr,pivot+1,end);
  }
}

let start = 0;
let end = size - 1;
(
  async ()=>{
    await quickSort(arr,start,end);
    await sortDone()
    await white()
  } 
    
)()
console.log(arr)