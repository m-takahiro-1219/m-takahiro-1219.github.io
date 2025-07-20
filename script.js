'ues strict';

const leftMenuStateToggle = document.getElementById('left-menu__state-toggle');
const leftMenuCloseButton = document.getElementById('left-menu__close-button');
const leftMenuOpenButton = document.getElementById('left-menu__open-button');
const rightMenuStateToggle = document.getElementById('right-menu__state-toggle');
const rightMenuCloseButton = document.getElementById('right-menu__close-button');
const rightMenuOpenButton = document.getElementById('right-menu__open-button');

leftMenuOpenButton.addEventListener('click', onClick, false);
leftMenuCloseButton.addEventListener('click', onClick, false);
rightMenuOpenButton.addEventListener('click', onClick, false);
rightMenuCloseButton.addEventListener('click', onClick, false);


function onClick (_) {
  console.log(this);
  switch (this) {
    case leftMenuOpenButton:
      leftMenuStateToggle.checked = false;
      break;
    case leftMenuCloseButton:
      leftMenuStateToggle.checked = true;
      break;
    case rightMenuOpenButton:
      rightMenuStateToggle.checked = false;
      break;
    case rightMenuCloseButton:
      rightMenuStateToggle.checked = true;
      break;
  }
}
