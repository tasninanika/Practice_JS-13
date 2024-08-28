// task-2
const arr = [ 33, 50, 79, 78, 90, 101, 30];

const divisbleNum = arr.filter(a => a % 10 === 0);
const divisbleNum2 = arr.find(a => a % 10 === 0);
console.log(divisbleNum);
console.log(divisbleNum2);