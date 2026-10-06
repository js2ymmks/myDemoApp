//#region STATE
const stepperState = {
  min: 16.0,
  max: 30.0,
  step: 0.5,
  value: 22.0,
}
//#endregion STATE

//#region DOM
const minusBtn = document.querySelector('#minusBtn');
const plusBtn = document.querySelector('#plusBtn');
const valueDisplay = document.querySelector('#valueDisplay');

function renderStepper() {
  valueDisplay.textContent = stepperState.value.toFixed(1);
}
//#endregion DOM

//#region EVENTS
minusBtn.addEventListener('click', () => {
  if (stepperState.value > stepperState.min) {
    stepperState.value -= stepperState.step;
    renderStepper();
    console.log(stepperState.value);
  }
});

plusBtn.addEventListener('click', () => {
  if (stepperState.value < stepperState.max) {
    stepperState.value += stepperState.step;
    renderStepper();
    console.log(stepperState.value);
  }
});
//#endregion EVENTS