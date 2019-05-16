'use strict';

import Choices from 'choices.js'

var toggle = document.querySelector('.toggle');
if (toggle) {
  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
  });
}

var switcherRightArrow = document.querySelector('.switcher__right');
var switcherLeftArrow = document.querySelector('.switcher__left');
var switcherType = document.querySelector('.switcher__type');

var switchDay = function(dir) {
  switch (true) {
    case switcherType.textContent === 'Today':
      switcherType.textContent = dir === 'next' ? 'Tomorrow' : 'Yesterday'
      break;
    case switcherType.textContent === 'Tomorrow':
      switcherType.textContent = dir === 'next' ? 'Yesterday' : 'Today'
      break;
    case switcherType.textContent === 'Yesterday':
      switcherType.textContent = dir === 'next' ? 'Today' : 'Tomorrow'
      break;
    default:
      break;
  }
}
if (switcherRightArrow || switcherLeftArrow) {
  switcherRightArrow.addEventListener('click', function() {
    switchDay('next');
  })

  switcherLeftArrow.addEventListener('click', function() {
    switchDay('prev');
  })
}

var burger = document.querySelector('.header__burger')
var header = document.querySelector('.header')

if (burger) {
  burger.addEventListener('click', function() {
    header.classList.toggle('menu-open')
  })
}

const select = document.querySelector('.login-select')

if (select) {
  const example = new Choices(select, {
      searchEnabled: false,
      placeholderValue: 'Location',
    });
  
  // example.setChoices([
  //   {value: 'location1', label: 'location1'},
  //   {value: 'location2', label: 'location2', selected: true},
  //   {value: 'location3', label: 'location3'},
  // ]);

}