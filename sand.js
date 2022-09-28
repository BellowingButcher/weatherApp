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
// let p = document.createElement('p');
// p.textContent = 'first textBox';
// main.appendChild(p);

// let p2 = document.createElement('p');
// p2.textContent = 'second textBox';
// main.appendChild(p2);

/*
================================
below this comment is the usable functions that came from the
above psuedocode.  Above this line helped me through the thought
process of how to build a create element function and make it
more dynamic than just hardcoding seperate elements in.
=================================
*/

/*
let main = document.getElementById('main');

function createDiv(id, parent) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    parent.appendChild(div);
}
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
===================================
above this is the usable init function guts
====================================
*/
// ========================================================
//Here is where i will start my axios sandboxing and try to
//get that to work.

//This is my axios url with the country code us and api key hard coded into it.  
//I want to replace the zip with the zipSubmit button. Im guessing the best way to do that is use a template literal
// axios.get('https://api.openweathermap.org/data/2.5/weather?zip={zip code},us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4')

//let zip = INFORMATION GATHERED AFTER GET WEATHER BUTTON CLICK
// function getWeather () {
    
//     axios.get(
// //`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4`
//         //I used the bellow url for testing hardcoded zips
//         'https://api.openweathermap.org/data/2.5/weather?zip=41472,us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4'
//         )
//         .then(function (response) {
//             //this is where i would pass information off to the elements that i created earlier
//             console.log(response);
//         })
//         .catch(function (error){
//             //this is where I would handle errors 
//             //What errors are possible????????????????????????????????????????????????????????
//             console.log(error);
//         })
//         .then(function() {
//             //always exicuted im unsure about what i would put here.  
//             console.log('always do this')
//         });

//     }

/*==========================================================================
This is the end of getWeather funciton, axios is working and I can point to spacific data within the json object.

Below this line I will be working on the validateZip function
============================================================================*/

// function validateZip(usersZip) {
//     if (usersZip.length !== 5 || isNaN(usersZip)) {
//         alert('Not a valid zipcode');
//     }
//     else {
//         return true;
//     }

// }
/*====================================================
- validateUserZip
    - If submission has any NAN
        - alert
    - If the submission number length is less than 5
        - alert
    - If the submission number length is greater than 5
        - alert
    - else give a true or a green light for the zip submission

End of validateZip function
=====================================================*/

/*
======================================================
Begining my submitZipButton function
==================================================
*/

function submitZipButton() {
    zipSubmit.addEventListener('click' => () {
        //validateZip with the information submited with click
        //if zip is not valid alert not a valid zip
        //if zip is valid run getWeather
    })
}