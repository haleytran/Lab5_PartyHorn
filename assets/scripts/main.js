// main.js

// Input field that serves as the textual indicator of sound level
let volNum = document.getElementById("volume-number");
volNum.addEventListener("input", function() {
    volSlider.value = volNum.value;
    if (volNum.value == 0) {
        volImg.src = "./assets/media/icons/volume-level-0.svg";
    } else if (volNum.value < 34) {
        volImg.src = "./assets/media/icons/volume-level-1.svg";
    } else if (volNum.value < 67) {
        volImg.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        volImg.src = "./assets/media/icons/volume-level-3.svg";
    }
});

// Slider that serves visual controller for sound level
// Volume icon that change depending on the sound level
let volImg = document.getElementById("volume-image");
let volSlider = document.getElementById("volume-slider");
volSlider.addEventListener("input", function() {
    volNum.value = volSlider.value; // set value of slider to input field
    if (volNum.value == 0) {
        volImg.src = "./assets/media/icons/volume-level-0.svg";
        button.disabled = true;
    } else if (volNum.value < 34) {
        volImg.src = "./assets/media/icons/volume-level-1.svg";
        button.disabled = false;
    } else if (volNum.value < 67) {
        volImg.src = "./assets/media/icons/volume-level-2.svg";
        button.disabled = false;
    } else {
        volImg.src = "./assets/media/icons/volume-level-3.svg";
        button.disabled = false;
    }
});

// Radio that swtiches between different horn sounds and images
let audio = document.getElementById("horn-sound");
let airHorn = document.getElementById("radio-air-horn");
let carHorn = document.getElementById("radio-car-horn");
let partyHorn = document.getElementById("radio-party-horn");
let soundImg = document.getElementById("sound-image");

airHorn.addEventListener("change", function() {
    audio.src = "./assets/media/audio/air-horn.mp3";
    soundImg.src = "./assets/media/images/air-horn.svg";
});

carHorn.addEventListener("change", function() {
    audio.src = "./assets/media/audio/car-horn.mp3";
    soundImg.src = "./assets/media/images/car.svg";
});

partyHorn.addEventListener("change", function() {
    audio.src = "./assets/media/audio/party-horn.mp3";
    soundImg.src = "./assets/media/images/party-horn.svg";
});

// Button that plays the horn sound
let button = document.getElementById("honk-btn");
button.addEventListener("click", function(event) {
    event.preventDefault();
    audio.volume = volNum.value/100;
    audio.play();
});