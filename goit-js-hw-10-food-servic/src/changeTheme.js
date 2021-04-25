const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchEl = document.querySelector('#theme-switch-toggle');
switchEl.addEventListener('change', onSwitchChange);

document.body.classList.add(localStorage.getItem('Theme'));
if (localStorage.getItem('Theme') === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  switchEl.checked = true;
}

function onSwitchChange() {
  if (switchEl.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
