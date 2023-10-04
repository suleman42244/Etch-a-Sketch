const sketcher = document.createElement('div');
const body = document.body;

sketcher.style.backgroundColor = 'white';
sketcher.style.width = '960px';
sketcher.style.height = '700px';
body.appendChild(sketcher);

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    sketcher.style.backgroundColor = 'white';
});

sketcher.addEventListener('mouseover', () => {
    sketcher.style.backgroundColor = 'black';
});