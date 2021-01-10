function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair="*") {
    return function(phrase="special") {
        return `You are ${flair}${phrase}${flair}!`
    }
}

let Calculator = {
    add: function(x,y) {
        return x + y
    },

    subtract: function(x,y) {
        return x - y
    },

    multiply: function(x,y) {
        return x * y
    },

    divide: function(x,y) {
        return x / y
    }
}

let actionApplyer = function(start, functionArray) {
    let base = start

    //whatever number of functions in the array, each will take a value that is the returned value of previous function
    for (let i=0; i<functionArray.length; i++) {
        base = functionArray[i](base)
    }

    return base
}