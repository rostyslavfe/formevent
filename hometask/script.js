let f1= document.forms.f1;
let firstF = f1.elements[0];
let button = f1.elements[1];
let secondF = f1.elements[2];
let f2 = document.forms.f2;
let area = f2.elements[0];
// завдання №1
button.addEventListener('click', function(){
    event.preventDefault();
    if(firstF.value !==''){
        secondF.value = firstF.value;
        firstF.value = ''
    };
});
area.addEventListener('change', function(){
    area.placeholder = area.value;
    area.value = ''
})

