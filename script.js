let crash = document.querySelector('.crash');
let kick = document.querySelector('.kick');
let snare = document.querySelector('.snare');
let tom1 = document.querySelector('.tom1');
let tom2 = document.querySelector('.tom2');
let tom3 = document.querySelector('.tom3');
let tom4 = document.querySelector('.tom4');
let font = document.querySelectorAll('.icon');

function addSound() {
    crash.addEventListener('click', () => {
        // console.log('clicked')
        var audio = new Audio('crash.mp3');
        audio.play();
        console.log(crash.innerHTML);
    })
    kick.addEventListener('click', () => {
        var audio = new Audio('kick-bass.mp3');
        audio.play();
    })
    snare.addEventListener('click', () => {
        var audio = new Audio('snare.mp3');
        audio.play();
    })
    tom1.addEventListener('click', () => {
        var audio = new Audio('tom-1.mp3');
        audio.play();
    })
    tom2.addEventListener('click', () => {
        var audio = new Audio('tom-2.mp3');
        audio.play();
    })
    tom3.addEventListener('click', () => {
        var audio = new Audio('tom-3.mp3');
        audio.play();
    })
    tom4.addEventListener('click', () => {
        var audio = new Audio('tom-4.mp3');
        audio.play();
    })
} addSound()

document.addEventListener('keypress', function (e) {

    if (e.key == crash.innerHTML) {
        var audio = new Audio('crash.mp3');
        audio.play();
        
    } else if (e.key == snare.innerHTML) {
        var audio = new Audio('snare.mp3');
        audio.play();
        console.log(e.key);
        console.log(snare.innerHTML);
    }
    else if (e.key == tom4.innerHTML) {
        var audio = new Audio('tom-4.mp3');
        audio.play();
        console.log(e.key);
        console.log(tom4.innerHTML);
    }
    else if (e.key == tom3.innerHTML) {
        var audio = new Audio('tom-3.mp3');
        audio.play();
        console.log(e.key);
        console.log(tom3.innerHTML);
    }
    else if (e.key == tom2.innerHTML) {
        var audio = new Audio('tom-2.mp3');
        audio.play();
        console.log(e.key);
        console.log(tom2.innerHTML);
    }
    else if (e.key == tom1.innerHTML) {
        var audio = new Audio('tom-1.mp3');
        audio.play();
        console.log(e.key);
        console.log(tom1.innerHTML);
    }
    else if (e.key == kick.innerHTML) {
        var audio = new Audio('kick-bass.mp3');
        audio.play();
        console.log(e.key);
        console.log(kick.innerHTML);

    }        console.log(e.key);
});