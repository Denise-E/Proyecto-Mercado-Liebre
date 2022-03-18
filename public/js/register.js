let inputName = document.querySelector('#name');
let inputLastName = document.querySelector('#lastName');
let inputEmail = document.querySelector('#email');
let inputBirthdayDate = document.querySelector('#birthdayDate');
let inputAdress = document.querySelector('#adress');
let inputUserId = document.querySelector('#userId');
let inputPassword = document.querySelector('#password');
let inputImage = document.querySelector('#image');

inputName.addEventListener('mouseup', (e) => { 
    let feedback = document.querySelector('.nameFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El nombre es obligatorio'
    }

})
inputName.addEventListener('keydown', (e) => {
    let feedback = document.querySelector('.nameFeed');
    let value = e.target.value
    if(value.length < 1){
       feedback.innerHTML = 'Debe tener al menos 2 caracteres.'
       // Chequear que no se vea dos veces al enviar form !!!
   }
   if(value.length >= 1){
       feedback.innerHTML = ''
   }
})

inputLastName.addEventListener('mouseup', (e) => { 
    let feedback = document.querySelector('.lastNameFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El apellido es obligatorio'
    }

})
inputLastName.addEventListener('keydown', (e) => {
    let feedback = document.querySelector('.lastNameFeed');
    let value = e.target.value
    if(value.length < 1){
       feedback.innerHTML = 'Debe tener al menos 2 caracteres.'
       // Chequear que no se vea dos veces al enviar form !!!
   }
   if(value.length >= 19){
       feedback.innerHTML = ''
   }
})

inputEmail.addEventListener('mouseup', (e) => { 
    let feedback = document.querySelector('.emailFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El email es obligatorio'
    }

})

inputBirthdayDate.addEventListener('mouseup', (e) => { 
    let feedback = document.querySelector('.birthdayDateFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'La fecha es obligatoria'
    }

})

inputAdress.addEventListener('mouseup', (e) => { 
    let feedback = document.querySelector('.adressFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'La dirección es oblgatoria'
    }

})
inputAdress.addEventListener('keydown', (e) => {
    let feedback = document.querySelector('.adressFeed');
    let value = e.target.value
    if(value.length < 4){
       feedback.innerHTML = 'Debe tener al menos 5 caracteres.'
       // Chequear que no se vea dos veces al enviar form !!!
   }
   if(value.length >= 4){
       feedback.innerHTML = ''
   }
})

inputUserId.addEventListener('mouseup', (e) => { 
    let feedback = document.querySelector('.userIdFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'El nombre de usuario es obligatorio'
    }

})
inputUserId.addEventListener('keydown', (e) => {
    let feedback = document.querySelector('.userIdFeed');
    let value = e.target.value
    if(value.length < 1){
       feedback.innerHTML = 'Debe tener al menos 2 caracteres.'
       // Chequear que no se vea dos veces al enviar form !!!
   }
   if(value.length >= 1){
       feedback.innerHTML = ''
   }
})
inputPassword.addEventListener('mouseup', (e) => { 
    let feedback = document.querySelector('.passwordFeed');
    let value = e.target.value
    console.log(value);
    if(value.length == 0){
        feedback.innerHTML = 'La contraseña es oblgatoria'
    }

})
inputPassword.addEventListener('keydown', (e) => {
    let feedback = document.querySelector('.passwordFeed');
    let value = e.target.value
    if(value.length < 7){
       feedback.innerHTML = 'Debe tener al menos 8 caracteres.'
       // Chequear que no se vea dos veces al enviar form !!!
   }
   if(value.length >= 7){
       feedback.innerHTML = ''
   }
})


inputImage.addEventListener('blur', (e) => {
    let feedback = document.querySelector('.imageFeed');
    let value = e.target.value
    let regex = /^.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF|jpeg|JPEG|png|PNG)$/
    if(!regex.test(value)){
        feedback.innerHTML = 'El fromato de la imagen debe ser jpg, jpeg, png o gif '
    }
    if(regex.test(value)){
        feedback.innerHTML = ''
    }

})
