/**
 * Created by Sheep on 2016/2/17.
 */

function asyncFunction(){
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve("Async Hello World!");
    },16)
  })
}

asyncFunction().then(function(value){
  console.log(value); // => 'Async Hello world'
}).catch(function(error){
  console.log(error);
})
