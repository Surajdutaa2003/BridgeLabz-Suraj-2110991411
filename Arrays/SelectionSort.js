let arr=[38,52,9,18,6,62,13];
for(i=0;i<arr.length;i++){
    min=i;
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
        temp=arr[i];
        arr[i]=arr[min]
        arr[min]=temp;
    }
    
}

console.log(arr);