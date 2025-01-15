async function fetchSequential(){
    try{
        var response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        var data=await response.json();
        console.log("fetching data ....")
        console.log("fetche data",data);

        console.log("fetching other data");
        var response1=await fetch("https://jsonplaceholder.typicode.com/posts/2");
        var data1=await response1.json();
        console.log("fetched data",data1);
    }
    catch(error){
        console.log("error caught",error);
    }
}
fetchSequential();
// async function fetchSequential() {
//     try {
//         console.log("Fetching first resource...");
//         var response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         var data1 = await response1.json();
//         console.log("First Resource:", data1);

//         console.log("Fetching second resource...");
//         var response2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//         var data2 = await response2.json();
//         console.log("Second Resource:", data2);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

 fetchSequential();
