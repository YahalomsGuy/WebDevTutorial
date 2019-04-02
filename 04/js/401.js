
console.log(innerWidth, ' / ', innerHeight )
console.log(outerWidth, ' / ', outerHeight )
console.log(document);
console.log(history);
console.log(location);
console.log(navigator);
console.log(document.querySelectorAll('pre'));

var myDivs = document.querySelectorAll('div.head');
myDivs.forEach(function(everyDiv){
    console.log(everyDiv.innerHTML);  
});

var body = document.body;
for(var index = 0; index < body.children.length ; index++) {
    console.log(body.children[index]);
    
}

var e1 = document.createElement('div');
e1.innerHTML = 'This is added by JS to the first div.head'
document.body.appendChild(e1);
document.querySelector('div.head').appendChild(e1);

var e1 = document.createTextNode(' Added by JS - My Text');                                 //create the element
document.body.appendChild(e1);                                          //add them to the page




var ul = document.querySelector('ul');
for(var index = 0; index < 10; index++){
    var li = document.createElement('li');
    li.className = 'itemAddedByJS'
    li.textContent = 'list item number ' + index;
    ul.appendChild(li);
}

var el = document.querySelector('li');
el.parentNode.removeChild(el);