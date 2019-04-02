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


console.log(person);
console.log('console.log(person.age); -> ' , person.age);
console.log('console.log(person.name.first) -> ' , person.name.first);
console.log('person.greetingMsg(); --->'); 
person.greetingMsg();
console.log('-------------------------------------------');
console.log('console.log(person.name); ->', person.name);
console.log('console.log(person[\'name\']); -> ', person['name']);
console.log('console.log(person[\'name\'][\'first\']);' , person['name']['first']);
console.log('-------------------------------------------');
console.log('console.log(person[\'name\'].first); ->', person['name'].first);
console.log('console.log(person.name[\'last\']); ->', person.name['last']);
console.log('-------------------------------------------');
var ageProperty = 'age';
var nameProperty = 'name';
console.log('var ageProperty = \'age\';');
console.log('var nameProperty = \'name\';');
console.log('console.log(person[ageProperty]); -> ', person[ageProperty]);
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
