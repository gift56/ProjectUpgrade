const slides = document.querySelector(".slideImg");
const Next = document.getElementById("Next");
const Prev = document.getElementById("Prev");

Next.addEventListener('click', () => {
    slides.style.left = "-232px";
})