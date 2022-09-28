# Weather App
### INIT
- static
    - titleBox
    - zipSubmitBox
        - text box for user zip
        - button for submiting zip
- dynamic
    - displayedInfoBox
    - city
    - temperature
        - kelvin
        - farenheit
        - celcius
    - Daily condition
    - Image box
    - errorMessage box
    - API key **!DONT DISPLAY!**
---

### FunctionalityFatality

- initStatic
    - create title element
    - create zipSubmit box
        - zipSubmitText field
        - zipSubmitButton
- initDynamic
    - create displayBox
        - cityBox
            - static- 'city' box
            - dynamic- city name per API call
        - temperatureBox
            - static- 'temperature' box
            - dynamic- temperature per api call
                - dynamic- kelvin box
                - dynamic- ferinheit box
                - dynamic- celcius box
        - conditionBox
            - static- 'condition' box
            - dynamic- conditions box from api
        - imageBox
            - static- 'Other info'
            - dynamic- displays image based on api icon
- addElement
    - div
        - static 'paragraph'
        - dynamic 'paragraph'
    - display box
        - city textBox
        - temperatureTextBox
        - conditionTextBox
        - imageBox
- temp convert
    - k to ferinheit
    - k to celcius
- get api data
- submitButtonClick
    - on click
        - validateUserZip
            - if the zip is valid
                - use the interger in zipSubmitText to change the state of our dynamic elements to the information found in the API
            - else
                - alert user of an invalid zip
- validateUserZip
    - If submission has any NAN
        - alert
    - If the submission number length is less than 5
        - alert
    - If the submission number length is greater than 5
        - alert
    - else give a true or a green light for the zip submission
    
- handleError



