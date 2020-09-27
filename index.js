// Your code here
function saturdayFun(string = 'roller-skate') {
  return `This Saturday, I want to ${string}!`
}

function mondayWork(string = 'go to the office') {
  return `This Monday, I will ${string}.`
}

function wrapAdjective(string = '*') {
  return function innerFuction(innerString = 'special') {
    return `You are ${string}${innerString}${string}!`
  }
}

class Calculator {
  static add(a, b) {
    return a + b
  }
  static subtract(a, b) {
    return a - b
  }
  static multiply(a, b) {
    return a * b
  }
  static divide(a, b) {
    return a / b
  }
}

function actionApplyer(int, arr) {
  for (const func of arr) {
    int = func(int)
  }
  return int
}