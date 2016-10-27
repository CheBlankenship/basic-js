var myarray = [1,2,3,4,5-6,-7];

function onlyPositiveNum(arr){
    return arr.filter(function(num){
        return num > 0;
    });
}

console.log(onlyPositiveNum(myarray));
