var myarray = [1,2,3,4,-9,-5];


function square(arr){
    return arr.map(function(num){
        return num * num;
    });
}

console.log(square(myarray));
