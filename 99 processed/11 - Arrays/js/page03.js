var arr = [  'someString', 7 , [ 0, 'oneMoreString', 2], true, { name: 'Guy', age: 46, lastName: 'maimon'}, [3,4,5,6]]



var words = ['Spray', 'employee', 'limit', 'encyclopedia', 'elite', 'destruct'];

function filterItems(query){
    return words.filter(
        function(e1) {
            return e1.toLowerCase().indexOf(query.toLowerCase()) > -1
        }
    )
}
console.log(filterItems('r'));

var nums = [5, 12, 8, 130, 44];
var found = nums.find(
    function(element) {
        return element > 10;
    }
);
console.log(found);

console.log(nums.join(';'));

var mapped = nums.map(
        function(x){
            return x * 2
        }
    );
console.log(mapped);


var arr3 = [1,2,3,4];var reducer = function(acc, currVal){
    return acc+currVal
}
console.log(arr3.reduce(reducer,1));

