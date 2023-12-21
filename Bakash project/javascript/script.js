const vertical = document.querySelector(".vertical-boxes");

let isdragStart = false, prevPageX, prevScrollLeft;
let firstImg = vertical.querySelectorAll("div");
let arrowIcons = document.querySelectorAll(".arrows");

let firstImgWidth = firstImg.clientWidth;



const dragStart = (e) => {
    isdragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = vertical.scrollLeft;
}

const dragging = (e) => {
    if (!isdragStart) return;
    e.preventDefault();

    positionDiff = e.pageX - prevPageX;
    vertical.scrollLeft = prevScrollLeft - positionDiff;
}

const dragEnd = () => {
    isdragStart = false;
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // vertical.scrollLeft += icon.id== "left" ? -firstImgWidth :firstImgWidth;
        if(icon.id =="left"){
            vertical.scrollLeft -= firstImgWidth;
        }
        else{
            vertical.scrollLeft += firstImgWidth;
        }
})
})



vertical.addEventListener("mousedown", dragStart);
vertical.addEventListener("mousemove", dragging);
vertical.addEventListener("mouseup", dragEnd);

