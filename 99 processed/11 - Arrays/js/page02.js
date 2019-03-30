var arr = [  'someString', 
                7 , 
                [ 0, 'oneMoreString', 2], 
                true, 
                { name: 'Guy', 
                  age: 46,
                  lastName: 'maimon'
                },
                [3,4,5,6]
          ]
arr.forEach(function(theItems, myArrIndex, myArr){
        // console.log( theItems, ' ', myArrIndex , ' ' , myArr);
    }
)
arr.push(19);
arr.unshift('Guy')
console.log(arr.length);

console.log(arr.indexOf('Guy'));
var removedItems = arr.slice(2,4);
console.log(removedItems);
console.log(arr);
console.log(arr.;

// for (i= 0 ; i < arr.length ;) {
//     arr.pop();
//     console.log(arr);
    
// }


// while (arr.length >0) {
//     arr.pop();
// }


