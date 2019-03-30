function randBetween(min,max){
    max = Math.ceil(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (max-min)) + min;
}
var a = 6;
var b = 200;

console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
console.log(randBetween(a,b));
