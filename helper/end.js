let allAlgoDiv = document.querySelectorAll(".algo");

for(let i=0;i<allAlgoDiv.length;i++){
  allAlgoDiv[i].addEventListener("click",function(e){
    console.log(run)
    if(i == 0 && run){
      (async () =>{
        try {
          run = false
        await bubble();
        await sortDone();
        await white();
        await runF();
        } catch (error) {
            run = true
        }
        
        })()
    }else if(i == 1 && run){
      (async () =>{
        try{

          run = false
         
          await selection();
          await sortDone();
          await white();
          await runF();
        } catch (error) {
          run = true
        }
        })()
    }else if(i == 2 && run){
      (
        async function(){
          try{
            run = false
          await insertion()
          await sortDone()
          await white()
          await runF();
          } catch (error) {
            run = true
        }
        }
       )()
    }else if(i == 3 && run){
      (
        async function(){
          try{
            run = false
            await cockTailSort();
              await sortDone()
              await white()
              await runF();
          } catch (error) {
            run = true
        }
        }
        )()
    }else if(i == 4 && run){
      (
        async ()=>{
          try{
          run = false
           await mergeSort(arr,start,end);
           await runF();
          } catch (error) {
            run = true
        }
        }
      )()
    }else if(i == 5 && run){
      (
        async ()=>{
          try{
            run = false
            await quickSort(arr,start,end);
            await sortDone()
            await white()
            await runF();
          } catch (error) {
            run = true
        }
        }  
      )()
    }
   
  })
}


async function runF(){
  run = true;
  return;
}