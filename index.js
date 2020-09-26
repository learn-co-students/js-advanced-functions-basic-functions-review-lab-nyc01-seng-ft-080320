// Your code here
const saturdayFun = (activity="roller-skate") => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity="go to the office") => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (string="*") => {
    let innerFunction =  function(word="special") {
        return `You are ${string}${word}${string}!`
    }
    return innerFunction;
}

const Calculator = {
   
    add: function(a,b) {
        return a + b
    },

    subtract: function(a,b) {
        return a - b
    },

    multiply: function(a,b) {
        return a * b
    },

    divide: function(a,b) {
        return a / b
    }
}

let actionApplyer = function(integer, array) {
    let a = integer
    
    for (let i = 0; i < array.length; i++) {
        a = array[i](a)
    }

    return a
}
