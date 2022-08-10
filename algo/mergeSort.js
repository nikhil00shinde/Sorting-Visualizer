async function arrange2Array(arr,start,end,mid){ 
  let arr1 = [];
  let arr2 = []
  
for(let i=start;i<=mid;i++){
   arr1.push(arr[i])
 }

for(let i=mid+1;i<=end;i++){
  arr2.push(arr[i])
}

let i = start;
let j = mid+1;
let k = start;




while(i<=mid && j <= end){

  let div = container.querySelectorAll("div");
  let div1 = div[k];
  let div2 = div[i];
  let div3 = div[j];

  await delay(time);
  div2.classList.add("redC");
  div3.classList.add("blueC");
  await delay(time);

  if(arr1[i-start].id <= arr2[j-(mid+1)].id){
    div1.style.height = arr1[i-start].id+"px";
    div1.removeAttribute("data-id"+arr[k].index);
    div1.setAttribute("data-id"+arr1[i-start].index,arr1[i-start].id);
    await delay(time)
   arr[k] = arr1[i-start]
    i++;
  }else{  
    div1.style.height = arr2[j-(mid+1)].id+"px";
    div1.removeAttribute("data-id"+arr[k].index);
    div1.setAttribute("data-id"+arr2[j-(mid+1)].index,arr2[j-(mid+1)].id);
    
    await delay(time)
  
    arr[k] = arr2[j-(mid+1)]
    j++;
  }
  await delay(time);
  div2.classList.remove("redC");
  div3.classList.remove("blueC");
  await delay(time);
  k++;
}

while( i <= mid){
  await firstLoop(i,k,start,arr1)
  arr[k] = arr1[i-start]
  i++; 
  k++;
}

while(j <= end){
 await secondLoop(j,k,mid,arr2)
  arr[k] = arr2[j-(mid+1)]
    j++;
    k++;
}

k = start
while(k <= end){
  let div = container.querySelectorAll("div");
  let div1 = div[k];
  div1.classList.add("greenC")
  await delay(time)
  k++
}

k = start
while(k <= end){
  let div = container.querySelectorAll("div");
  let div1 = div[k];
  div1.classList.remove("greenC")
  await delay(time)
  k++
}
return 

}


async function mergeSort(arr,start,end){
  if(start == end || end < start){
    return 
  }
  let mid = Math.floor((start + end)/2);
  await delay(time)
  await mergeSort(arr,start,mid);
  await delay(time)
  await mergeSort(arr,mid+1,end);
  await delay(time)
  await arrange2Array(arr,start,end,mid);
  await delay(time)
}

let start =0;
let end = size - 1;



async function firstLoop(i,k,start,arr1){
  let div = container.querySelectorAll("div");
  let div1 = div[k];
  let div2 = div[i];
  div1.style.height = arr1[i-start].id+"px";
  div1.removeAttribute("data-id"+arr[k].index);
  div1.setAttribute("data-id"+arr1[i-start].index,arr1[i-start].id);
  await delay(time)
  div1.classList.add("redC");
  await delay(time);
  div1.classList.remove("redC");
}

async function secondLoop(j,k,mid,arr2){
  let div = container.querySelectorAll("div");
  let div1 = div[k];
  let div2 = div[j];
  div1.style.height = arr2[j-(mid+1)].id+"px";
    div1.removeAttribute("data-id"+arr[k].index);
    div1.setAttribute("data-id"+arr2[j-(mid+1)].index,arr2[j-(mid+1)].id);
  await delay(time)
    div1.classList.add("blueC");
    await delay(time);
    div1.classList.remove("blueC");
}


