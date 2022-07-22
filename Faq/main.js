
const Accordium = document.querySelectorAll('.contextBx');

Accordium.forEach(box => {

    box.addEventListener('click', () => {
        box.classList.toggle('active')
    })
});