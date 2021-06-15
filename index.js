

const resultShow = document.querySelector('#result');
let r = document.querySelector('.squere');

document.querySelector('.input-a').addEventListener('keypress', (e) => {

    if (e.key === 'Enter') {
        let areaValue = document.querySelector('#area').value;  

        let squareSize = document.querySelector('.squere');
        squareSize.style.width = `${areaValue}%`;
        squareSize.style.height = `${areaValue}%`;
        squareSize.style.borderBottom = `${areaValue}%`;
        squareSize.style.transition = `transition: all ease-out 1s`;

        areaValue *= areaValue;
        resultShow.textContent = `Area of square is  : ${areaValue}`;
        r.textContent = `${areaValue}`;
    }

});

