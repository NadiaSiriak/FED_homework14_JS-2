var userObj = {
  firstName: 'Frank',
  lastName: 'Cowperwood',
  age: 36,
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
};

console.log(userObj);

console.log(userObj.fullName());

function defUpperStr(str) {
  return (str || 'Default text').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

function evenFn(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i);

  return arr
}

console.log(evenFn(8));
console.log(evenFn(21));

function weekFn(days) {
let str = '';

switch (days) {
  case 1: str = 'Понедельник'; break;
  case 2: str = "Вторник"; break;
  case 3: str = "Среда"; break;
  case 4: str = "Четверг"; break;
  case 5: str = "Пятница"; break;
  case 6: str = "Суббота"; break;
  case 7: str = "Воскресенье"; break;
  default: str = null;
}

return str;
}

console.log(weekFn(2));
console.log(weekFn(4));
console.log(weekFn(5));
console.log(weekFn(3.14));
console.log(weekFn('a word'));

function ageClassification(age) {
  return age > 0 ? age > 24 ? age > 44 ? age > 65 ? age > 75 ? age > 90 ? age > 122 ? null
  : 'долгожители' : 'старческий возраст' : 'пожилой возраст' : 'средний возраст' : 'молодой возраст' : 'детский возраст' : null;
  }

  console.log('-5:', ageClassification(-5));
  console.log('6:', ageClassification(6));
  console.log('25:', ageClassification(25));
  console.log('44.01:', ageClassification(44.01));
  console.log('59:', ageClassification(59));
  console.log('65.5:', ageClassification(65.5));
  console.log('75:', ageClassification(75));
  console.log('77:', ageClassification(77));
  console.log('90.09:', ageClassification(90.09));
  console.log('122:', ageClassification(122));
  console.log('130:', ageClassification(130));

function oddFn(n) {
  let arr = [];
  i = 0;

  while (i++ < n) if (i % 2 !== 0) arr.push(i);

  return arr;
}

console.log(oddFn(12));
console.log(oddFn(21));

function mainFunc (a, b, cb) {
  if (cb && typeof cb === 'function') return cb(a, b);

  return false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(4, 15, cbRandom));
console.log(mainFunc(8, 88, cbRandom));
console.log(mainFunc(2, 7, cbPow));
console.log(mainFunc(5, 16, cbAdd));
console.log(mainFunc(5, 16, 'klm'));