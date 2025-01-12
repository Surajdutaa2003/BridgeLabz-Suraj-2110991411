function DelayMessage(message,callback){
    setTimeout(function(){
        console.log("message:" +message);
        callback();
    },2000)
}

function hello(){
    console.log("hello i am callback");
}

DelayMessage("hello after 2 sec",hello);
