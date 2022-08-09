// bi-directional bubble sort

async function cockTailSort(){


  let start = 0;
  let end = size -1;

  while(start < end){
    let div = container.querySelectorAll("div");

    for(let i=start+1;i<=end;i++){
      let div1 = div[i-1];
      let div2 = div[i];
      div2.classList.add("redC")
      
      if(arr[i-1].id > arr[i].id){

        swap(div1,div2,i,i-1);

      }
      await delay(time)
      div2.classList.remove("redC")
     
    }
    
    end--;
    await delay(time)


    for(let i=end;i>start;i--){
      let div1 = div[i-1];
      let div2 = div[i];
      
      div1.classList.add("redC")
      
      if(arr[i].id < arr[i-1].id){
         swap(div1,div2,i,i-1);
      }
        await delay(time)
      div1.classList.remove("redC")
       
    }
    start++;
  

  }

}


(
async function(){

  await cockTailSort();
    await sortDone()
    await white()
}

)()
console.log(arr)