Date.prototype.isLeapYear=function(){
   let year= this.getFullYear();
    return(year%4===0 && year%100!==0 )|| (year%400===0);
}

let date = new Date(2024, 1, 29);  
console.log(date.isLeapYear());