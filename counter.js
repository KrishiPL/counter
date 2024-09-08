let counter = 0;

const countIncrease = () => {
  if (counter < 10) {
    counter += 1;
    updateCounterDisplay();
  }
};

const countDecrease = () => {
  if (counter > 0) {
    counter -= 1;
    updateCounterDisplay();
  }
};

const countReset = () => {
  counter = 0;
  updateCounterDisplay();
};

const updateCounterDisplay = () => {
  document.getElementById('counterValue').textContent = counter;
};
