for (let i = 0; i < 16; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("square");

  const container = document.querySelector(".container");
  container.appendChild(gridItem);
}
