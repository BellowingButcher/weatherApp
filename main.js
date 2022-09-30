//when the page loads
document.addEventListener('DOMContentLoaded', () =>  {
    //declares main as the div element with main as the id
    var main = document.getElementById('main');
    //this sets my class for the main div element
    main.setAttribute('class', 'container.fluid text-center bg-light text-success');
    //create title, zip input, and get weather button
    createDiv('container.fluid text-center bg-light text-success', 'static', main);
    createDiv('container', 'titleAndZip', static);
    createP('col', 'weatherTitle', 'Weather App', titleAndZip);
    createDiv('container', 'zipBox', titleAndZip)
    //delcares enterZip as the input element
    let enterZip = document.createElement('input');
    //changes the attributes of input element
    enterZip.setAttribute('type', 'number');
    enterZip.setAttribute('id', 'userZip')
    enterZip.setAttribute('placeholder', 'Enter Zipcode')
    //this appends the input element to the parent element titleAndZip
    titleAndZip.appendChild(enterZip);
    //delcares zipSubmit as the button element
    let zipSubmit = document.createElement('button');
    //changes attributes for the submit button
    zipSubmit.textContent = 'Get Weather';
    zipSubmit.setAttribute('id', 'zipBtn');
    zipSubmit.setAttribute('class', 'btn bg-dark text-danger')
    //this places the button under the parent element static
    static.appendChild(zipSubmit);
    //adds an event listener to the zip submit button for running 3 diffrent functions
    zipSubmit.addEventListener('click', () => {
        //declares inputZip as the zipcode entered by the user in the text field
        let inputZip = document.getElementById('userZip').value;
        //runs validateZip with the parameter of inputZip
        validateZip(inputZip);
        //if the zip code is valid (minus a couple unfixed features)
        //run dynamicInit
        dynamicInit();
        //then run updateApp
        loadApp();
        
        
    })
})
//These are the create element functions
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
//This creates all the elements that will be dipsplaying the information
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
//This function runs the axios get and replaces the zipcode with the parameter entered when running the getweather function
async function getWeather (zipCode) {
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=3fd35bfbfb5f10cf0f3d2a3ec1f270a4`;
    // console.log('before response', url);
    let response = await axios.get (url)
    return response;

}
//this function validates if the users zipcode is a valid code
function validateZip(usersZip) {
    //if the usersZip length is anything other than 5 or if it is NaN return an alert of not valid zip
    if (usersZip.length !== 5 || isNaN(usersZip)) {
        //alert message
        alert('Not a valid zipcode');
        //return false
        return false;
        
    }
    //else return true 
    else {
        return true;
    }

}
//This app updates all the temps, names, and conditions that need to be changed when the api call is made
async function updateApp () {
    //use data as a variable that holds the json object gathered with the api call
    let data = await getWeather (document.getElementById('userZip').value);
    // console.log('after event', data);
    //delcare cityName as the name value in the jason object data
    let cityName = data.data.name;
    // console.log(cityName);
    // same for tempK
    let tempK = data.data.main.temp;
    // console.log(tempK);
    //same for condition
    let condition = data.data.weather[0].main;
    // console.log(condition);
    // same for icon... this isnt working for me atm
    // let icon = data.data.weather[0].icon;
    // console.log(icon);
    //Temp conversion for farenheit
    let tempF = ((tempK - 273.15)*(9/5)+(32)).toFixed(2);
    // console.log(tempF);
    // temp conversion for centigrade
    let tempC = (tempK - 273.15).toFixed(2);
    // console.log(tempC);
    //This is where i gather each element with its id and modify what text is inside them
    document.getElementById('cityDynamic').textContent = cityName;
    document.getElementById('kTemp').textContent = tempK + " Kelvin";
    document.getElementById('fTemp').textContent = tempF + " Farenheit";
    document.getElementById('cTemp').textContent = tempC + " Centigrade";
    document.getElementById('dynamicCondition').textContent = condition;

}
//This function is the same as updateApp but the end changes the event listener
async function loadApp () {

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
    //Here is my attempt at making the page update on each click
    //Here is where it starts to break
    //remove the event listener from the button
    document.createElement('button').removeEventListener;
    //adds the event listener that will run updateApp rather than loadApp
    document.createElement('button').addEventListener('click', updateApp());
        

}
