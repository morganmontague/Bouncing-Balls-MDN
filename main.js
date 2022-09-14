// setuo the canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// Function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max- min + 1)) + min;
    return num
}

// checking if works console.log('worked')

// funtion to generate random color

function randomRGB() {
    return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
}