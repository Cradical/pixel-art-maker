document.addEventListener('DOMContentLoaded', function(){

const grid = document.querySelector('#grid');
console.log(grid);
let currentColor; 

for(let i = 0; i < 100; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', (event) => {
        event.target.style.backgroundColor = currentColor;
        console.log('clicked ' + event.target)
    })
    grid.appendChild(cell);
    };

const colorPalette = document.querySelector('.color-palette');
// console.log(colorPalette);

const colors = ['firebrick', 'dodgerblue ', 'goldenrod', 'wheat', 'chartreuse', 'salmon', 'white'];
// console.log(colors);

colors.forEach(color => {
    const brush = document.createElement('span');
    brush.classList.add('brush');
    brush.style.backgroundColor = color;
    brush.dataset.color = color;

    brush.addEventListener('click', (event) => {
        currentColor = event.target.dataset.color;
        console.log(currentColor);
    })

    colorPalette.appendChild(brush);
    
})


});