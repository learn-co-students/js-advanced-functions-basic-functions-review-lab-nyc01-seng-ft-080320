

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style='*') {
    return function(adj="special") {
        return `You are ${style}${adj}${style}!`
    }
}

let Calculator = {
    add: function(a,b) {
        return a + b
    },

    subtract: function(a,b) {
        return a - b
    },

    multiply: function(a, b) {
        return a * b
    },

    divide: function(a, b) {
        return a / b
    },
}

let actionApplyer = function(startingInteger, array) {
    if(array.length === 0){
        return startingInteger
    }else {
        for(let index of array){
            startingInteger = index(startingInteger)
        }
    }
    return startingInteger
}