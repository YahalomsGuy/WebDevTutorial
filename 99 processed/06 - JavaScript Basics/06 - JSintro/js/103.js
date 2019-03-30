var myString = 'Guy Maimon';
console.log(myString.length);
console.log(myString[2]);
console.log(myString.indexOf('imo'));
if(myString.indexOf('Ma') !== -1)
{
    console.log("It's There");
}else{
    console.log("It's not There");
};
console.log(myString.toLowerCase());
console.log(myString.toUpperCase());
console.log(myString.slice(5));
console.log(myString.slice(5,7));