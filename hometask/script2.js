let f1 = document.forms.f1;
let f2 = document.forms.f2;

f1.arg.addEventListener('click', function(){
    if(f1.arg.checked === true){
        f1.sign.disabled = false
        f1.sign.style.backgroundColor = 'Green'
    }
    else if(f1.arg.checked === false){
        f1.sign.disabled = true
        f1.sign.style.backgroundColor = 'Gray'
    }
});

f1.sign.addEventListener('click', function(){
    if(f1.userName.value === '' || f1.userSecName.value === '' || f1.cources.value === 'Choose'){
        alert('fill all the input fields')
    }
    else{
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.profile').style.display = 'flex';
        if(f1.sex.value === "woman"){
            document.querySelector('.profile-image').style.backgroundImage = "url(./images/woman.jpg)"
        };
        document.querySelector('.name').textContent = `${f1.userName.value} ${f1.userSecName.value}`;
        document.querySelector('.mail').textContent = f1.email.value;
        document.querySelector('.obl').textContent = f1.cources.value.toUpperCase();
        console.log(f1.userName.value, f1.sex.value, f1.email.value)
    }
    event.preventDefault()
})