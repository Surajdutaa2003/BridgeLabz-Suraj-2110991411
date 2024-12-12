const a=[1,2,3,4,5,6,7,8];
const b=a.filter(function(num){
   if(num%2==0){
    return(num);
   }
})
console.log(b);