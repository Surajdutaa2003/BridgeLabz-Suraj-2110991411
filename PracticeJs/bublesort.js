const arr=[5,3,4,2,1];
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);