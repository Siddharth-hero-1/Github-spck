//  variable staring nameing word
//  variable staring nameing word
//  variable staring nameing word


//let 2t = 45;   error 🥲
var $ry = 7;
var _ry = 7;
var ry = 7;
//var const = 9   error🥲
var sid = 6;
var Sid = 60; // DIFFER FROM sid


// difference in var and let
// difference in var and let
// difference in var and let

var t = 'teal';
var t = 5
//let t = 8  error🥲
let u = 0
//let u = 78  error🥲
u = 78


// const role
// const role
// const role


const r = 673
//r = 673   error🥲
//const h; error 🥲 



// let block working
// let block working
// let block working
console.log('*******let block working********')


let yash = 77;
{
  let yash = 43;
  console.log(yash)
}
console.log(yash)



// datatypes and their syntax
// datatypes and their syntax
// datatypes and their syntax
console.log('*******datatypes and their syntax and type********')


let gh = Symbol('y')
console.log(gh, typeof gh)

let integer = BigInt(78)
console.log(integer, typeof integer)

let v = null
console.log(v, typeof v)


// operation on null
// operation on null
// operation on null
console.log('*******Operations on null********')


console.log(v + 6 + 8)
console.log(v + v)
console.log(typeof(v + v))
console.log(v - 6)
console.log(v == 0)


// object
// object
// object
console.log('*******Object********')

var bh = {
  a: 5,
  u: 9,
  k: 'you'
}
bh['a'] = 8
console.log(bh.a, bh['u'])
bh.u = 'hero';
bh.l = 'online';
console.log(bh)

// operator
// operator
// operator 
console.log('*******Operator********')

let x = 8;
let y = 3;
x %= y;
console.log(x);

let a = 3;
let b = 2;
a **= b;
console.log(a);

let au = 6;
let af = '6';
//console.log(au!==af)
//console.log(au===af)



//ternary operator
//ternary operator
//ternary operator

console.log('*******ternary operator********')


let skd = 6 //Number.parseInt(prompt('your age'));
skd >= 18 ? console.log('you can drive') : console.log('you can not drive')
console.clear()


let agem = 9 //Number.parseInt(prompt('your age'));

console.log('your age lies between 10 and 20. this is ', agem > 10 && agem < 20)

if (agem > 10 && agem < 20) {
  document.write('your age lies between 10 and 20')
} else {
  document.write('your age does not lie between 10 and 20')
}

let expression = Number.parseInt(prompt('your age'));

switch (expression) {
  case '9':
    console.log('hh')
    break;
    
  default:
    console.log('lll')
}