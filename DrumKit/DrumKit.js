const playMusic = (event) =>{
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if(!audio) return null; //stop the function if no key is there
    audio.currentTime = 0; //rewind the audio
    audio.play();   //play the audio but we need to rewind it before if we press button repeatedly without fully playing the audio
    key.classList.add("playing");
}

const removeTransition = (event) =>{
    if(event.propertyName !== "transform")  return;
    event.target.classList.remove("playing");
}



const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend",removeTransition);   //call for each key and check for which all transition is made from black border to yellow
});

window.addEventListener("keydown",playMusic);