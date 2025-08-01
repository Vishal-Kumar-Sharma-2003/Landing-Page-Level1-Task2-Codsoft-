// Typing Animation
const typingText = document.querySelector('.typing-text');
const textArray = ["Vishal", "a Web Developer", "a Designer"];
let index= 0;
let charIndex = 0;
function type(){
    if(charIndex < textArray[index].length){
        typingText.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else{
        setTimeout(erase, 2000);
    }
}
function erase(){
    if(charIndex >0){
        typingText.textContent = textArray[index].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,50);
    }else{
        index =(index+1)% textArray.length;
        setTimeout(type, 500);
    }
}
document.addEventListener("DOMContentLoaded", function(){
    type();
});
// Dark Mode Toggle
const toggle = document.getElementById('toggle-mode');
toggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
});