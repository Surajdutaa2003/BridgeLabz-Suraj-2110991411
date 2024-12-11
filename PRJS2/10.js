const a=[1,2,3,4,5,6,7,8];
const b=a.reduce(function(acc,num){
   return  acc+=num;
},0)
console.log(b);