let inputUserId = document.querySelector('#userId');
let inputPassword = document.querySelector('#password');


inputUserId.addEventListener('keyup', (e) => { 
    let feedback = document.querySelector('.userIdFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El nombre de usuario es obligatorio'
    }

})

inputPassword.addEventListener('keyup', (e) => { 
    let feedback = document.querySelector('.passwordFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'La contraseña es oblgatoria'
    }

})