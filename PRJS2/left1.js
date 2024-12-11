function a(num){
    if(num.length==0){
        return num;
    }
    let firstElement=num.shift();
    num.push(firstElement);
    return num;
}