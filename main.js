const container = document.querySelector(".container");

function createGrid() {
  const reset = document.querySelector(".reset");
  const black = document.querySelector('.black');
  const rgb = document.querySelector('.rgb');
  const size = document.querySelector('.size');

  size.addEventListener('click', () => {
    let userInput = parseInt(prompt("Enter a Number: "));
    let number = userInput;
    

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    container.setAttribute('style', `grid-template-columns: repeat(${number}, 2fr); grid-template-rows: repeat(${number}, 2fr);`)
    
    for (let i = 0; i < number * number; i++) {
      const div = document.createElement('div');
      div.classList.add('cell');
      div.addEventListener('mouseover', () => {
        if (isBlackMode) {
          div.style.backgroundColor = "black";
        } else if (isRGBMode) {
          let randomColor = getRandomColor();
          div.style.backgroundColor = randomColor;
        }
      });
      container.appendChild(div);
    }
  });
  
  

  let isBlackMode = false;
  let isRGBMode = false;

  reset.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  });

  black.addEventListener('click', () => {
    isBlackMode = true;
    isRGBMode = false;
  });

  rgb.addEventListener('click', () => {
    isRGBMode = true;
    isBlackMode = false;
  });

  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");

    div.addEventListener("mouseover", () => {
      if (isBlackMode) {
        div.style.backgroundColor = "black";
      } else if (isRGBMode) {
        let randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
      }
    });

    container.appendChild(div);
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

createGrid();
