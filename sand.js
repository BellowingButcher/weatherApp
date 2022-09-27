function addTextBox () {
    const box = document.createElement('div');
    box.setAttribute('id', 'box');
    document.body.appendChild(box);
    const staticText = document.createElement('p');
    staticText.setAttribute('id', 'staticText');
    //staticText.textContent = 'Hello';
    box.appendChild(staticText);
    const dynamicText = document.createElement('p');
    dynamicText.setAttribute('id', 'dynamicText');
    //dynamicText.textContent = 'What up';
    box.appendChild(dynamicText);

}
addTextBox()
