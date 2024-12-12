function a(num){
    if(num==0){
        return 1;

    }
    else{
        return num* a(num-1);
    }
}
const b=a(10);
console.log(b);