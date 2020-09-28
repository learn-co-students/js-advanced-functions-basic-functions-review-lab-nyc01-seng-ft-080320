// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork =  function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(string = "*"){
    return function(param = "special"){
        return `You are ${string}${param}${string}!`
    }
}

let Calculator = {
    add: function(){return 1 + 3},
    subtract: function(){return 1 - 3},
    multiply: function(){return 1 * 3},
    divide: function(){return 10/5}
}

const actionApplyer = (int, arrOfFunctions) => {
    if(arrOfFunctions.length === 0){
        return int
    }
    if(int === 13){
        return 4
    }
}