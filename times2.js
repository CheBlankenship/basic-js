var myarray = [1,2,3,4,-9,-5];

function times_two(arr){
    return arr.map(function(num){
        return num * 2;
    });
}


console.log(times_two(myarray));
