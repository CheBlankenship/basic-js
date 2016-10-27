var phonebookDict ={
    Alice: "703-493-1834",
    Bob: "857-384-1234",
    Elizabeth: "484-584-2923"
};
//1 print eli's phonenum
// console.log(phonebookDict.Elizabeth);
// 2 Add new person Kareem
// phonebookDict.Kareem = "938-489-1234";
// 3 delete Alice's phonenum
// delete phonebookDict.Alice;
// phonebookDict.Alice = "";
// phonebookDict["Alice"] = "";
// 4 Change Bob's num
// phonebookDict.Bob = "968-345-2345";
// 5 Print all the phone entries
for (var num in phonebookDict){
    var phonenum = phonebookDict[num];
    console.log(num + ": " + phonenum);
}
// console.log(phonebookDict);
