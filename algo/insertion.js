async function insertion(){

     for(let i=1;i<size;i++){
     
       let ind = i;
      


       for(let j=i-1;j>=0;j--){
        await delay(50);
        let div1 = container.querySelector(`[data-id${arr[ind].index}='${arr[ind].id}']`);
        div1.classList.add("greenC");
        let div2 = container.querySelector(`[data-id${arr[j].index}='${arr[j].id}']`);
        console.log(div2)
        await delay(40)
        div2.classList.add("redC");
        await delay(40);
        div1.classList.remove("greenC") 
        await delay(40);
        div2.classList.remove("redC")
       
        if(Number(arr[ind].id) < Number(arr[j].id)){
             await delay(20)  
            div2.classList.add("greenC")
            swap(div1,div2,j,ind)
            await delay(20);
            div1.classList.remove("greenC")
            div2.classList.remove("greenC")
            ind = j
          }
       } 
     }
}


//  4 5 3 2 1


insertion()
console.log(arr)

