const progreso = document.getElementById('progreso');
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const steps = Array.from(document.getElementsByClassName('step'));

let paso = 1;

function update() {
    steps.forEach((element, idx) => {
        if (idx < paso) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });

    const activos = document.querySelectorAll('.active');
    const widthPercentage = ((activos.length - 1) / (steps.length - 1)) * 100;
    progreso.style.width = widthPercentage + '%';
    progreso.style.backgroundColor = `rgba(0, 123, 255, 0.2)`;

    updateButtons();
}

function updateButtons() {
    const isFirstStep = paso === 1;
    const isLastStep = paso === steps.length;

    anterior.disabled = isFirstStep;
    siguiente.disabled = isLastStep;

    anterior.style.backgroundColor = isFirstStep ? 'gray' : '#007BFF';
    siguiente.style.backgroundColor = isLastStep ? 'gray' : '#007BFF';
}

window.addEventListener('load', () => {
    update();
});

siguiente.addEventListener('click', () => {
    paso++;
    if (paso > steps.length) {
        paso = steps.length;
    }
    update();
});

anterior.addEventListener('click', () => {
    paso--;
    if (paso < 1) {
        paso = 1;
    }
    update();
});
