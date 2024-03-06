function validate(e){
    e.preventDefault();
    const name = e.target[0].value;
    const lastName =e.target[1].value;
    const fullName=name+lastName;
    const em=e.target[2].value;
    const password = e.target[3].value;
    const mess=e.target[7].value;
    console.log(e);
    console.log(em)
    if(fullName.length <6){
        alert('Invalid Name');
    }
    if(password.length <8){
        alert('Invalid Password');
    }
    if(mess.length<100){
        alert('write more word');
    }

}

function isSubmittable(e) {
    const name = e.target.value;
    console.log(name);
    const submitButton = document.querySelector('input[type="submit"]');
    if (name.length > 3) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
