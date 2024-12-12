function Sum(num){
   return num.split(",").reduce(function(Sum,num){
return sum+ parseFloat(num);
    },0)
}
console.log(Sum("10,20,30,40"));