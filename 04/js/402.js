var bgColor = document.querySelector('.bg');
// el.style.backgroundColor = 'green';
bgColor.style.backgroundColor = 'pink';         

var notDisp = document.querySelector('.dsp');
notDisp.style.display = 'none';

var hid = document.querySelector('.hid');
hid.style.visibility = 'hidden';

var fontCol = document.querySelector('.fnt');
fontCol.style.color = 'red';
fontCol.style.fontSize = '25px';

console.log(hid.style);

console.log(fontCol.style['color']);



