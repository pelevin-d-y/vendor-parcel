'use strict';

import Choices from 'choices.js'
import rangeSlider from 'rangeslider-pure'

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
  new Choices(select, {
    searchEnabled: false
  });
}

const truckOptions = Array.from(document.querySelectorAll('.truck-options__select'))
if (truckOptions.length) {
  new Choices('.truck-options__select', {
    searchEnabled: false
  })

  let truckValues = {}
    
  truckOptions.forEach(option => {
    const key = option.dataset.name
    truckValues[key] = option.value
    option.addEventListener('choice', checkSelected)
  })

  function checkSelected(event) {
    const key = event.target.dataset.name
    truckValues[key] = event.detail.choice.value

    let isSelected = Object.values(truckValues).indexOf('placeholder') === -1
    const stepButton = document.querySelector('.step1-button')

    if (isSelected) {
      stepButton.classList.remove('disabled')
      stepButton.classList.add('btn__blue')
    } else {
      stepButton.classList.add('disabled')
      stepButton.classList.remove('btn__blue')
    }
  } 
} 

const slider = document.querySelector('.temperature__range')

if (slider) {
  console.log('rangeSlider', rangeSlider)
  // rangeSlider.create(slider)
}