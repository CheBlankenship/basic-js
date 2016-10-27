var myarray = [1,2,3,4,-9,-5];

function onlyEvenNum(arr){
    return arr.filter(function(num){
        return num % 2 === 0;
    });
}


console.log(onlyEvenNum(myarray));
