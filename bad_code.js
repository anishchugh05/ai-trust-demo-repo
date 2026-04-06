var userInput = "5"

if(userInput == 5){
    console.log("Access granted")
}

function calculateTotal(items){
    var total = 0
    for(var i=0;i<items.length;i++){
        total = total + items[i]
    }
    return total
}

console.log(calculateTotal([1,2,3]))
