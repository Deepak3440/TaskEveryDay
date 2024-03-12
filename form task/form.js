

function validform(){
const currentName=document.getElementById('text-value').value;
console.log(currentName);
if(currentName.length<3 && currentName.length>10){
    alert("please enter name between 3 and 10 length");
    return false;
}
if (!/^\d+$/.test(currentName)) {
    alert('Input must contain only numeric values.');
    return false;
}
alert("Form successfully submitted");


}