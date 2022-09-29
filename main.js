var main = document.getElementById('main');
main.setAttribute('class', 'container.fluid text-center bg-light text-success');

document.addEventListener('DOMContentLoaded', () =>  {
    console.log(this);
    var main = document.getElementById('main');
    createDiv('container.fluid text-center bg-light text-success', 'static', main);
    createDiv('container', 'titleAndZip', static);
    createP('col', 'weatherTitle', 'Weather App', titleAndZip);
    createDiv('container', 'zipBox', titleAndZip)
    
    let enterZip = document.createElement('input');
    enterZip.setAttribute('type', 'number');
    enterZip.setAttribute('id', 'userZip')
    enterZip.setAttribute('placeholder', 'Enter Zipcode')
    titleAndZip.appendChild(enterZip);
    let zipSubmit = document.createElement('button');
    zipSubmit.textContent = 'Get Weather';
    zipSubmit.setAttribute('id', 'zipBtn');
    zipSubmit.setAttribute('class', 'btn bg-dark text-danger')
    static.appendChild(zipSubmit);

    zipSubmit.addEventListener('click', () => {
        let inputZip = document.getElementById('userZip').value;
        validateZip(inputZip);
        dynamicInit();
        updateApp();
        
    })
})

function createDiv(clas, id, parent) {
    let div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', clas);
    parent.appendChild(div);

}
function createP(clas, id, text, parent) {
    let p = document.createElement('p');
    p.setAttribute('id', id);
    p.setAttribute('class', clas);
    p.textContent = text;
    parent.appendChild(p);
}

function dynamicInit() {

    createDiv('container', 'dynamic', main);
    createDiv('row border', 'city', dynamic);
    createP('border bg-dark', 'cityStatic', 'City', city);
    createP('bg-secondary', 'cityDynamic', 'second P', city);
    createDiv('row border', 'temperature', dynamic);
    createP('bg-dark', 'tempStatic', 'Temperature', temperature);
    createP('col bg-secondary border', 'kTemp', 'Kelvin', temperature);
    createP('col bg-secondary border', 'fTemp', 'Farenheit', temperature);
    createP('col bg-secondary border', 'cTemp', 'Centigrade', temperature);
    createDiv('row border', 'condition', dynamic);
    createP('border bg-dark', 'staticCondition', 'Condition', condition);
    createP('border bg-secondary', 'dynamicCondition', 'second P', condition);
    createDiv('border', 'icon', dynamic);
    createP('bg-dark', 'otherStatic', 'Other Information', icon);
    createP('bg-secondary', 'otherDynamic', 'second P', icon);

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