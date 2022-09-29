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


// let main = document.getElementById('main');

// function createDiv(id, parent) {
//     let div = document.createElement('div');
//     div.setAttribute('id', id);
//     parent.appendChild(div);
// }
// function createP(id, text, parent) {
//     let p = document.createElement('p');
//     p.setAttribute('id', id)
//     p.textContent = text;
//     parent.appendChild(p);
// }


//     createDiv('static', main);
//     createDiv('titleAndZip', static);
//     createP('weatherTitle', 'Weather App', titleAndZip);
//     createDiv('zipBox', titleAndZip)
    
//     let enterZip = document.createElement('input');
//     enterZip.setAttribute('type', 'number');
//     enterZip.setAttribute('id', 'userZip')
//     titleAndZip.appendChild(enterZip);
//     let zipSubmit = document.createElement('button');
//     zipSubmit.textContent = 'Get Weather'
//     zipSubmit.setAttribute('id', 'zipBtn');
//     static.appendChild(zipSubmit);


// function dynamicInit() {

//     createDiv('dynamic', main);
//     createDiv('city', dynamic)
//     createP('cityStatic', 'City', city);
//     createP('cityDynamic', 'second P', city);
//     createDiv('temperature', dynamic);
//     createP('tempStatic', 'Temperature', temperature);
//     createP('kTemp', 'Kelvin', temperature);
//     createP('fTemp', 'Farenheit', temperature);
//     createP('cTemp', 'Centigrade', temperature);
//     createDiv('condition', dynamic);
//     createP('staticCondition', 'Condition', condition);
//     createP('dynamicCondition', 'second P', condition);
//     createDiv('icon', dynamic)
//     createP('otherStatic', 'Other Information', icon);
//     createP('otherDynamic', 'second P', icon);

// }


// ===================================
// above this is the usable init function guts
// ====================================

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
//===========================
//this is me turning getWeather into an async function
//USE THE ASYNC FUNCTION
//=============================
// async function getWeather (zipCode) {
//     let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4`;
//     console.log('before response', url);
//     let response = await axios.get (url)
//     return response;

// }

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

// async function updateApp () {

//     let data = await getWeather (document.getElementById('userZip').value);
//     console.log('after event', data);
//     let cityName = data.data.name;
//     console.log(cityName);
//     let tempK = data.data.main.temp;
//     console.log(tempK);
//     let condition = data.data.weather[0].main;
//     console.log(condition);
//     let icon = data.data.weather[0].icon;
//     console.log(icon);
//     let tempF = ((tempK - 273.15)*(9/5)+(32)).toFixed(2);
//     console.log(tempF);
//     let tempC = (tempK - 273.15).toFixed(2);
//     console.log(tempC);
//     document.getElementById('cityDynamic').textContent = cityName;
//     document.getElementById('kTemp').textContent = tempK + " Kelvin";
//     document.getElementById('fTemp').textContent = tempF + " Farenheit";
//     document.getElementById('cTemp').textContent = tempC + " Centigrade";
//     document.getElementById('dynamicCondition').textContent = condition;

// }
    // zipSubmit.addEventListener('click', () => {
    //     dynamicInit();
        // let userZip = document.getElementById('zipSubmit').value;
        // console.log('afterclick', userZip);
        // validateZip(userZip);
        // updateApp();
        
    //     validateZip with the information submited with click
    //     if zip is not valid alert not a valid zip
    //     if zip is valid run getWeather
    //     use information from getWeather to populate the dynamic elements

        
        
    // })
let icon = document.getElementById('icon');
function createImg(src, alt) {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('class', 'img-fluid');
    img.setAttribute('id', 'image');
    icon.appendChild(img);
    
    tempF = 30;
    
    let imgSrc;
    let imgAlt;

    switch(tempF) {
        case tempF <= 32:
            imgSrc = 'images/cold.jpg'
            imgAlt = 'cold thermometer'
            console.log(imgSrc, imgAlt);
            break;
        case tempF >= 60:
            imgSrc = 'images/hot.jpg'
            imgAlt = 'hot themometer'
            break;
        case tempF > 32 && tempF < 60:
            imgSrc = 'images/mild.jpg'
            imgAlt = 'mild thermometer'
            break;
    }
}

createImg(imgSrc, imgAlt);
// document.getElementById('image');
// if (tempF < 32) {
//     imgSrc = 'images/cold.jpg';
//     imgAlt = 'cold thermometer';
// }
// else if (tempf > 55) {
//     imgSrc = 'images/hot.jpg';
//     imgAlt = 'hot thermometer';
// }
// else if (tempF > 32 & tempF < 55){
//     imgSrc = 'images/mild.jpg';
//     imgAlt = 'mild thermometer';
// }