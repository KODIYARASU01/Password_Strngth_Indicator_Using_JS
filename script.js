let inputBox=document.querySelector('.input');
let message=document.querySelector('.message');
let strength=document.querySelector('.strength')

inputBox.addEventListener('input',()=>{
if(inputBox.value.length >0){
  message.style.display='block';

}
else{
  message.style.display='none';
   inputBox.style.borderColor='#fff';
}

if(inputBox.value.length<4){
  strength.innerHTML='weak';
  inputBox.style.borderColor='red';
  message.style.color='red'
}
else if(inputBox.value.length>=4 && inputBox.value.length<8){
strength.innerHTML='medium';
 inputBox.style.borderColor='yellow';
message.style.color='yellow'
}
else if(inputBox.value.length >= 8){
  strength.innerHTML = 'strong';
   inputBox.style.borderColor="rgb(97, 238, 139)";
  message.style.color="rgb(97, 238, 139)";
}
})
