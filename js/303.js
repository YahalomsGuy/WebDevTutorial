
var goBtn = document.querySelector('#myBtn')
console.log(goBtn);

goBtn.onclick = function() {
    alert("You just Clicked");
}
var noBtn = document.querySelector('#btnNoBtn')
console.log(noBtn);

noBtn.onclick = function() {
    alert("You just Clicked the text");
}

var secondMove = function() {
    alert('the second move');
}
goBtn.addEventListener('click',secondMove)

document.querySelector('button').
    addEventListener('mouseclick', function (e) {
        console.log();
            }
    )