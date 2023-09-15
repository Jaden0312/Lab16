const firstMenu = document.getElementById('first-menu');
const secondMenu = document.getElementById('second-menu');
const thirdMenu = document.getElementById('third-menu');
const firstText = document.getElementById('first-text');
const secondText = document.getElementById('second-text');
const thirdText = document.getElementById('third-text');
const firstPlusBtn = document.getElementById('first-plus');
const secondPlusBtn = document.getElementById('second-plus');
const thirdPlusBtn = document.getElementById('third-plus');
const firstLine = document.getElementById('first-line');
const secondLine = document.getElementById('second-line');
const thirdLine = document.getElementById('third-line');
const firstMenuBox = document.getElementById('first-menubar');
const secondMenuBox = document.getElementById('second-menubar');
const thirdMenuBox = document.getElementById('third-menubar');




firstMenu.addEventListener('click', () => {
    firstText.classList.toggle('active');
    firstPlusBtn.classList.toggle('active');
    firstLine.classList.toggle('active');
    firstMenuBox.classList.toggle('active');
});

secondMenu.addEventListener('click', () => {
    secondText.classList.toggle('active');
    secondPlusBtn.classList.toggle('active');
    secondLine.classList.toggle('active');
    secondMenuBox.classList.toggle('active');
});

thirdMenu.addEventListener('click', () => {
    thirdText.classList.toggle('active');
    thirdPlusBtn.classList.toggle('active');
    thirdLine.classList.toggle('active');
    thirdMenuBox.classList.toggle('active');
});

