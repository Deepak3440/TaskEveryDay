<<<<<<< HEAD
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
    if(fullName.length <6&& password.length>8 && mess.length<6){
        alert('Invalid things');
    }
    else{
        alert("form submitted");
    }
   

}

function isSubmittable(e) {
    const name = e.target.value;
    console.log(name);
    const submitButton = document.querySelector('input[type="submit"]');
    if (name.length > 3) 
    {
        submitButton.disabled = false;
    } else
    {
        submitButton.disabled = true;
    }
}

function isSubmittable1(e) {
    const lname = e.target.value;
    console.log(lname);
    const submitButton = document.querySelector('input[type="submit"]');
    if (lname.length > 5) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
function isSubmittable2(e) {
    const em = e.target.value;
    console.log(em);
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let result = regex.test(em);
    const submitButton = document.querySelector('input[type="submit"]');
    if (result) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
function isSubmittable3(e) {
    const pass = e.target.value;
    console.log(pass);
    const submitButton = document.querySelector('input[type="submit"]');
    if (pass.length > 8) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

=======
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
>>>>>>> 40d8ebcafc241dfec8505ac51f0dd19908b08991
