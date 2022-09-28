// function addTextBox (type, id, textContent) {
//     const box = document.createElement('div');
//     box.setAttribute('id', 'box');
//     document.body.appendChild(box);
//     const element = document.createElement(type);
//     element.setAttribute('id', id);
//     element.textContent = textContent;
//     box.appendChild(element);
//     const dynamicText = document.createElement(type);
//     dynamicText.setAttribute('id', id);
//     dynamicText.textContent = textContent;
//     box.appendChild(dynamicText);

// }

// let div1 = document.createElement('div');
// document.body.appendChild(div1)
// let div2 = document.createElement('div');
// document.body.appendChild(div2)
let main = document.getElementById('main');

function createDiv(id, parent) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    parent.appendChild(div);
}
// let p = document.createElement('p');
// p.textContent = 'first textBox';
// main.appendChild(p);

// let p2 = document.createElement('p');
// p2.textContent = 'second textBox';
// main.appendChild(p2);

function createP(text, parent) {
    let p = document.createElement('p');
    p.textContent = text;
    parent.appendChild(p);
}


createDiv('static', main);
createDiv('titleAndZip', static);
createP('Weather App', titleAndZip);
createDiv('zipBox', titleAndZip)

let enterZip = document.createElement('input');
enterZip.setAttribute('type', 'number');
titleAndZip.appendChild(enterZip);
let zipSubmit = document.createElement('button');
zipSubmit.textContent = 'Get Weather'
zipSubmit.setAttribute('id', 'zipBtn');
static.appendChild(zipSubmit);


createDiv('dynamic', main);
createDiv('city', dynamic)
createP('City', city);
createP('second P', city);
createDiv('temperature', dynamic);
createP('Temperature', temperature);
createP('Kelvin', temperature);
createP('Farenheit', temperature);
createP('Centigrade', temperature);
createDiv('condition', dynamic);
createP('Condition', condition);
createP('second P', condition);
createDiv('icon', dynamic)
createP('Other Information', icon);
createP('second P', icon);
