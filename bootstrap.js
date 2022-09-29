var main = document.getElementById('main');

document.addEventListener('DOMContentLoaded', () =>  {
    var main = document.getElementById('main');
    createDiv('static', main);
    createDiv('titleAndZip', static);
    createP('weatherTitle', 'Weather App', titleAndZip);
    createDiv('zipBox', titleAndZip)
    
    let enterZip = document.createElement('input');
    enterZip.setAttribute('type', 'number');
    enterZip.setAttribute('id', 'userZip')
    titleAndZip.appendChild(enterZip);
    let zipSubmit = document.createElement('button');
    zipSubmit.textContent = 'Get Weather'
    zipSubmit.setAttribute('id', 'zipBtn');
    static.appendChild(zipSubmit);

    zipSubmit.addEventListener('click', () => {
        let inputZip = document.getElementById('userZip').value;
        validateZip(inputZip);
        dynamicInit();
        updateApp();
        
    })
})

function createDiv(/*clas, */id, parent) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    parent.appendChild(div);

}
function createP(id, text, parent) {
    let p = document.createElement('p');
    p.setAttribute('id', id)
    p.textContent = text;
    parent.appendChild(p);
}

function dynamicInit() {

    createDiv('dynamic', main);
    createDiv('city', dynamic)
    createP('cityStatic', 'City', city);
    createP('cityDynamic', 'second P', city);
    createDiv('temperature', dynamic);
    createP('tempStatic', 'Temperature', temperature);
    createP('kTemp', 'Kelvin', temperature);
    createP('fTemp', 'Farenheit', temperature);
    createP('cTemp', 'Centigrade', temperature);
    createDiv('condition', dynamic);
    createP('staticCondition', 'Condition', condition);
    createP('dynamicCondition', 'second P', condition);
    createDiv('icon', dynamic)
    createP('otherStatic', 'Other Information', icon);
    createP('otherDynamic', 'second P', icon);

}

async function getWeather (zipCode) {
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4`;
    console.log('before response', url);
    let response = await axios.get (url)
    return response;

}

function validateZip(usersZip) {
    if (usersZip.length !== 5 || isNaN(usersZip)) {
        return alert('Not a valid zipcode');
        
    }
    else {
        return true;
    }

}

async function updateApp () {

    let data = await getWeather (document.getElementById('userZip').value);
    console.log('after event', data);
    let cityName = data.data.name;
    console.log(cityName);
    let tempK = data.data.main.temp;
    console.log(tempK);
    let condition = data.data.weather[0].main;
    console.log(condition);
    let icon = data.data.weather[0].icon;
    console.log(icon);
    let tempF = ((tempK - 273.15)*(9/5)+(32)).toFixed(2);
    console.log(tempF);
    let tempC = (tempK - 273.15).toFixed(2);
    console.log(tempC);
    document.getElementById('cityDynamic').textContent = cityName;
    document.getElementById('kTemp').textContent = tempK + " Kelvin";
    document.getElementById('fTemp').textContent = tempF + " Farenheit";
    document.getElementById('cTemp').textContent = tempC + " Centigrade";
    document.getElementById('dynamicCondition').textContent = condition;

}

// let zipSubmit = document.getElementById('zipSubmit');
//     zipSubmit.addEventListener('click', () => {
//         dynamicInit();
//         let inputZip = document.getElementById('userZip').value;
//         validateZip(inputZip);
//         updateApp();
        
//     })