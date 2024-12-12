function a(num){
    sum=0
    if(num%2==0){
        while(num!=0){
            b=num%10
            sum+=b;
            num=num/10;
        }
    }
    return Math.floor(sum);
}
const d=a(104);
console.log(d);