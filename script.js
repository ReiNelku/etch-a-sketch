const container = document.querySelector(".container");

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