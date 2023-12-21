let obj = document.querySelector(".obj");
let child2 = document.querySelector(".child2");
let child3 = document.querySelector(".child3");

const child2Observe = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      obj.style.bottom = "5vh";
      obj.style.width = "8rem";
      obj.style.height = "90vh";
      obj.style.right = "8vw";

      obj.innerHTML = "";
    } else {
      obj.style.bottom = "5vh";
      obj.style.width = "70vw";
      obj.style.height = "8vw";
      obj.style.right = "15vw";
      setTimeout(() => {
        obj.innerHTML =
          "Hello Dear Customer, Click here to navigate to facebook";
      }, 250);
    }
  },
  {
    threshold: 0.2,
  }
);
const child3Observe = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      obj.innerHTML = "";
      obj.style.bottom = "5vh";
      obj.style.width = "8rem";
      obj.style.height = "90vh";
      obj.style.right = "8vw";
    } else {
      obj.style.bottom = "5vh";
      obj.style.width = "70vw";
      obj.style.height = "8vw";
      obj.style.right = "15vw";
      setTimeout(() => {
        obj.innerHTML =
          "Hello Dear Customer, Click here to navigate to facebook";
      }, 250);
    }
  },
  {
    threshold: 0.2,
  }
);

obj.addEventListener("click", () => {
  window.location.href = "https://www.facebook.com";
});

child2Observe.observe(child2);

child3Observe.observe(child3);
