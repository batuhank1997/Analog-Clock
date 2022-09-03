const checkbox = document.getElementById('checkbox');
const clock = document.getElementById('clock');

checkbox.addEventListener('change', () => {
    //change the theme
    document.body.classList.toggle('dark');
    clock.classList.toggle('dark');
})