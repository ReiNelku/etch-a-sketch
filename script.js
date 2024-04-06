let rowSize = 16;

const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  rowSize = +prompt("Row Size: ");

  if (rowSize > 100) {
    rowSize = 100;
  } else if (rowSize < 1) {
    rowSize = 16;
  }

  const gridItems = document.querySelectorAll(".container div");

  gridItems.forEach((item) => container.removeChild(item));
  generateGrid(rowSize);
});

function generateGrid(rowSize) {
  const gridSize = rowSize ** 2;

  const gridItemSize = calculateGridItemSize(rowSize);

  for (let i = 0; i < gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.setAttribute(
      "style",
      `border: 1px solid black; height: ${gridItemSize}px; width: ${gridItemSize}px;`
    );
    gridItem.addEventListener("mouseenter", () => {
      gridItem.style.backgroundColor = "blue";
    });

    container.appendChild(gridItem);
  }
}

function calculateGridItemSize(size) {
  return 960 / size;
}

generateGrid(rowSize);