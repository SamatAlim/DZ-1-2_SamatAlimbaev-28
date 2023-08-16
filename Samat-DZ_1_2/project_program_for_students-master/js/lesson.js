// PhoneCheck

const phone_input = document.querySelector('#phone_input')
const phone_button = document.querySelector('#phone_button')
const phone_result = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phone_input.value = '+996 '

phone_button.addEventListener('click',() => {
    if (regExp.test(phone_input.value)) {
        phone_result.innerHTML = 'Ok'
        phone_result.style.color = 'green'
    } else{
        phone_result.innerHTML = 'not'
        phone_result.style.color = 'red'
    }

})


