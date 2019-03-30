var Array1 = ['someString', 5 , [ 0, 'oneMoreString', 2], true, 
                { name: 'Guy', 
                  age: 46
                }
            ]
console.log(Array1);
console.log(Array1[0]);
console.log(Array1[1]);
console.log(Array1[2]);
console.log(Array1[2][1]);
console.log(typeof(Array1[2][1]));
console.log(Array1[Array1.length-1]);
console.log(typeof(Array1[Array1.length-1]));
console.log('--------------------------------------')
console.log(Array1[4].age);
console.log('--------------------------------------')
console.log(Array1);
Array1[1] = 7;
Array1[4].lastName = 'Maimon';
Array1[Array1.length] = [3,4,5,6];
console.log(Array1[Array1.length-1]);
console.log(Array1[Array1.length-1][Array1[Array1.length-1].length-1]);