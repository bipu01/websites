const emptyBox = document.querySelector(".emptyBox");
const container = document.querySelector(".container");
const altImg = document.querySelector(".altImg");

container.addEventListener("mouseover", () => {
  emptyBox.classList.add("move-left");
  altImg.classList.add("img-move-left");
});

container.addEventListener("mouseout", () => {
  emptyBox.classList.remove("move-left");
  altImg.classList.remove("img-move-left");
});
