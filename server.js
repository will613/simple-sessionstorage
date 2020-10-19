const rememberDiv = document.querySelector('.husk');
const forgetDiv = document.querySelector('.glem');
const form = document.querySelector('form');
const nameInput = document.querySelector('#skrivenavn')
const submitBtn = document.querySelector('#submitnavn')
const forgetBtn = document.querySelector('#glemmenavn')

const h1 = document.querySelector('h1')
const personalGreeting = document.querySelector('.personal-greeting')


form.addEventListener('submit',function(e){
    e.preventDefault();
});

submitBtn.addEventListener('click', function(){
    sessionStorage.setItem('navn', nameInput.value);
    nameDisplayCheck();
})

forgetBtn.addEventListener('click', function(){
    sessionStorage.removeItem('navn')
})


function nameDisplayCheck() {
    if(sessionStorage.getItem('navn')){
        let name = sessionStorage.getItem('navn');
        h1.textContent-'Velkommen' +" " + name
        personalGreeting.textContent = 'Velkommen til vores hjemmeside ' + name
    } else {
        h1.textContent = 'Velkommen ukendte person'
        personalGreeting= 'Hej person som jeg ikke kender'
    }
    personalGreeting
}

document.body.onload = nameDisplayCheck();




