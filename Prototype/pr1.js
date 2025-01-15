let a={
    name2:"Suraj",
    phone:7763925826,
    run:function(){
        return ("self Run");
    }
}

let p ={
    run:function(){
        return("p run");
    }
}
p.__proto__ ={
    name:"Jackie"
}
a.__proto__=p;
console.log(a.name2);
console.log(a.run());
console.log(a.phone)