function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function mondayWork(action = "go to the office") {
  return `This Monday, I will ${action}.`;
};
mondayWork();

let wrapAdjective = function (str = "*") {
  return function (adj = "special") {
    return `You are ${str}${adj}${str}!`;
  };
};

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function actionApplyer(start, arr) {
  let a = start;
  for (let i = 0; i < arr.length; i++) {
    a = arr[i](a);
  }
  return a;
}
