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
  if(arr1[i-start].id <= arr2[j-(mid+1)].id){

   arr[k] = arr1[i-start]
    i++;
  }else{  
    arr[k] = arr2[j-(mid+1)]
    j++;
  }

  k++;
}

while( i <= mid){
  
  arr[k] = arr1[i-start]
  i++; 
  k++;
}

while(j <= end){
  arr[k] = arr2[j-(mid+1)]
    j++;
    k++;
}

let temp = start
while(temp <= end){
  await delay(20)

  let div = container.querySelectorAll("div");
  div[temp].style.height = arr[temp].id+"px";
  div[temp].removeAttribute("data-id"+arr[temp].index);
  div[temp].setAttribute("data-id"+arr[temp].index,arr[temp].id);
  div[temp].classList.add("redC")
  await delay(20)
  temp++;
}

temp = start
while(temp <= end){
  await delay(20)
  let div = container.querySelectorAll("div");
  div[temp].classList.remove("redC");
  await delay(20)
  temp++
}
return 

}


async function mergeSort(arr,start,end){
  if(start == end || end < start){
    return 
  }
  let mid = Math.floor((start + end)/2);
  await delay(20)
  await mergeSort(arr,start,mid);
  await delay(20)
  await mergeSort(arr,mid+1,end);
  await delay(20)
  await arrange2Array(arr,start,end,mid);
  await delay(20)
}

let start =0;
let end = size - 1;
(
  async ()=>{
    await mergeSort(arr,start,end)
    console.log(arr)
  }
)()



