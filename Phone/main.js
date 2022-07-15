const slides = document.querySelector(".slideImg");
const Next = document.getElementById("Next");
const Prev = document.getElementById("Prev");

Prev.addEventListener('click', () => {
    slides.style.left = "17px";
})
Next.addEventListener('click', () => {
    slides.style.left = "-232px";
})
More.addEventListener('click', () => {
    slides.style.left = "-488px";
})