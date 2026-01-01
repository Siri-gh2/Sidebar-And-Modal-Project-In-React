const modeSwitch = document.querySelector('.mode-switch');
const modeIcon = document.querySelector('#mode-icon');
const body = document.body;

modeIcon.textContent = '🌙';

modeSwitch.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    modeIcon.textContent = '🌞';
  } else {
    modeIcon.textContent = '🌙';
  }
});
