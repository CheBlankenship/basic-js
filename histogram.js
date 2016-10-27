// var phonebook = {
//     John: 333
// };
//
// phonebook.che = "4555452";

function histogram(string){
    var countObj = {};
    for (var i = 0; i < string.length; i++){
        if (string[i] in countObj){
            countObj[string[i]]++;
        }
        else{
            countObj[string[i]] = 1;
        }
    }
    return countObj;
}

console.log(histogram("cdskdfkfskkkhe"));
