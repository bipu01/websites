// BG animation part
const blob = document.getElementById("blob");
// blob.style.transition = "all 2s";

document.onpointermove = (event) => {
  const { clientX, clientY } = event;
  event.preventDefault();
  blob.animate(
    {
      left: `${clientX - 150}px`,
      top: `${clientY - 150}px`,
    },
    {
      duration: 3000,
      fill: "forwards",
    }
  );

  blob.style.left = `${clientX - 150}px`;
  blob.style.top = `${clientY - 150}px`;
};

/**
 *
 **/

//For storing data in dataInInp
let dataInInp;
const storeData = (event) => {
  console.log(event.target.value);
  dataInInp = event.target.value;
};
const handleSubmit = (event) => {
  event.preventDefault();
  let paragraph = document.createElement("p");
  paragraph.textContent = dataInInp;
  paragraph.classList.add("content");

  makeDraggable(paragraph);

  let firstBox = box1;
  // let firstBox = box1;
  firstBox.appendChild(paragraph);

  console.log(dataInInp);

  document.querySelector(".input").value = "";
};

// document.addEventListener("enter");

//Add event listeners for newly added .contents
const makeDraggable = (paragraph) => {
  paragraph.addEventListener("dragstart", () => {
    paragraph.classList.add("dragging");
  });
  paragraph.addEventListener("dragend", () => {
    paragraph.classList.remove("dragging");
  });
  paragraph.setAttribute("draggable", "true");
};

/**
 *
 **/

// Dragging part
const content = document.querySelectorAll(".content");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

/* *
 *
 * */

//For drag over to box2

box1.addEventListener(`dragover`, (e) => {
  e.preventDefault();

  const afterElement = getDragAfterElement(box1, e.clientY);
  // console.log(afterElement);
  const draggable = document.querySelector(".dragging");

  if (afterElement == null) {
    draggable.classList.remove("doneContent");
    draggable.classList.add("content");

    box1.appendChild(draggable);
  } else {
    draggable.classList.remove("doneContent");
    draggable.classList.add("content");

    box1.insertBefore(draggable, afterElement);
  }
});

box2.addEventListener(`dragover`, (e) => {
  e.preventDefault();

  const afterElement = getDragAfterElement(box2, e.clientY);
  // console.log(afterElement);
  const draggable = document.querySelector(".dragging");

  if (afterElement == null) {
    draggable.classList.remove("content");
    draggable.classList.add("doneContent");

    box2.appendChild(draggable);
  } else {
    draggable.classList.remove("content");
    draggable.classList.add("doneContent");

    box2.insertBefore(draggable, afterElement);
  }
});

const getDragAfterElement = (box, y) => {
  const draggableElements = [
    ...box.querySelectorAll(".content:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      //   console.log(offset);
      if (offset < 0 && offset > closest.offset) {
        return {
          offset: offset,
          element: child,
        };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  ).element;
};
