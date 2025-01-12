function stepOne(callback){
    console.log("step 1 done");
    callback();
}

function stepTwo(callback){
    console.log("step 2 done");
    callback();
}
function stepThree(){
    console.log("Step 3 done")
    
}

stepOne(function(){
    stepTwo(function(){
        stepThree();
    })
})

stepOne(stepTwo(stepThree()))