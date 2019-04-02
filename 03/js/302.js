var person = {
    age: '46',
    name: {
        first: 'Guy',
        last: 'Maimon'
    },
    address: 'Moscow',
    greetingMsg: function() {
        console.log('My Name Is Guy!');
    }
};

console.log('--------------assignmemt-------------------');
console.log('age before change:' , person.age);
console.log('-> person.age = 17 ->')
person.age = 17
console.log('age after change:' , person.age);
console.log('-------------------------------------------');
console.log('first name before change:' , person.name.first);
console.log('-> person.name.first = \'Ofek\' ->')
person.name.first= 'Ofek';
console.log('first name after change1:' , person.name.first);
console.log(person.name);
console.log(person);
console.log('-> person.name.first = \'Gilad\' ->')
person['name']['first'] = 'Gilad';
console.log('first name  after change2:' , person.name.first);
console.log(person.name);
console.log('-> person.height = 180; ->');
person.height = 180;
console.log(person);
console.log('-----------------This----------------------');
var person2 = {
    name: 'David' ,
    greeting: function() {
        console.log('Hi, My name is ' + this.name );
    }
}
person2.name = "Moshe"
person2.greeting();

console.log('-------------Loop Object-------------------');
var string1 = '';
var object1 = {a:1,b:2,c:3};
for (var property in object1){
    string1 += object1[property] + " ";
}
console.log('output of object1: ' + string1);

string1 = '';
for(var prop2 in person) {
    string1 += person[prop2] + " ; \r\n ";
}

console.log('output of person: ' + string1);