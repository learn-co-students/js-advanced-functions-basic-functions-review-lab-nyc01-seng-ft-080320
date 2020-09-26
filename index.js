// Your code here
function wrapAdjective(thing = "*"){
    return function(word = "special"){
        return `You are ${thing}${word}${thing}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")

function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

const Calculator = { add:
    function(){
        return 1+3
    },
    subtract: function(){
        return 1-3
    },
    multiply: function(){
        return 1*3
    },
    divide: function(){
        return 10/5
    }
}

function actionApplyer(int, arr){
    if (arr.length === 0){
        return int
    }else{
        arr.forEach(fnc=>{
            int = fnc(int)
        })
    }
    return int
}