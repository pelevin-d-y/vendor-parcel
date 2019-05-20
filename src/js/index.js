'use strict';

import Choices from 'choices.js'
import rangeSlider from 'rangeslider-pure'
import validate from 'validate.js'

const searchOpenBtn = document.querySelector('.controls__search')
if (searchOpenBtn) {
  const searchForm = document.querySelector('.search-form')
  searchOpenBtn.addEventListener('click', () => {
    searchForm.classList.toggle('open')
  })
}

const selectedOption = (select, value) => {
  Array.from(select.options).forEach(option => option.removeAttribute('selected'))
  document.querySelector(`[value=${value}]`).setAttribute('selected', '')
}

// toggle New/In Progress
var toggle = document.querySelector('.toggle');
const toggleSelect = document.querySelector('.toggle__select')

if (toggle) {
  toggleSelect.value = 'new'
  let toggleValue
  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    
    if (toggle.classList.contains('active')) {
      toggleValue = 'in-progres'
    } else {
      toggleValue = 'new'
    }
    
    selectedOption(toggleSelect, toggleValue)
    toggleSelect.value = toggleValue
  });
}

// day switcer
var switcher = document.querySelector('.switcher');

if (switcher) {
  var switcherRightArrow = document.querySelector('.switcher__right');
  var switcherLeftArrow = document.querySelector('.switcher__left');
  var switcherType = document.querySelector('.switcher__type');
  const switcherSelect = document.querySelector('.switcher__select')
  switcherSelect.value = 'today'

  var switchDay = function(dir) {
    switch (true) {
      case switcherType.textContent === 'Today':
        switcherType.textContent = dir === 'next' ? 'Tomorrow' : 'Yesterday'
        switcherSelect.value = dir === 'next' ? 'tomorrow' : 'yesterday'
        break;
      case switcherType.textContent === 'Tomorrow':
        switcherType.textContent = dir === 'next' ? 'Yesterday' : 'Today'
        switcherSelect.value = dir === 'next' ? 'yesterday' : 'today'
        break;
      case switcherType.textContent === 'Yesterday':
        switcherType.textContent = dir === 'next' ? 'Today' : 'Tomorrow'
        switcherSelect.value = dir === 'next' ? 'today' : 'tomorrow'
        break;
      default:
        break;
    }

    selectedOption(switcherSelect, switcherSelect.value)
  }
  if (switcherRightArrow || switcherLeftArrow) {
    switcherRightArrow.addEventListener('click', function() {
      switchDay('next');
    })
  
    switcherLeftArrow.addEventListener('click', function() {
      switchDay('prev');
    })
  }
}

// menu
var burger = document.querySelector('.header__burger')
var header = document.querySelector('.header')
if (burger) {
  burger.addEventListener('click', function() {
    header.classList.toggle('menu-open')
  })
}


// login select
const select = document.querySelector('.login-select')
if (select) {
  new Choices(select, {
    searchEnabled: false
  });
}

// step1 truck selects

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

    let isSelected = Object.values(truckValues).indexOf('') === -1
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

// slider range
const slider = document.querySelector('.temperature__range')
if (slider) {
  const celsios = document.querySelector('.temperature__celsius-digits')
  const accept = document.querySelector('.btn__accept')

  let goodFrozen = 35

  rangeSlider.create(slider, {
    onSlide: function(position, value) {
      celsios.value = position
      if (goodFrozen >= position) {
        accept.classList.remove('disabled')
        accept.classList.remove('btn__red')
        accept.classList.add('btn__blue')
      } else if (goodFrozen < position) {
        accept.classList.remove('disabled')
        accept.classList.remove('btn__blue')
        accept.classList.add('btn__red')
      }
    }
  })

  celsios.addEventListener('input', (event) => {
    rangeSlider.value = celsios.value

    if (celsios.value === '') return

    slider.rangeSlider.update({
      value : celsios.value,
    }, true);
  })
}

//conditions

const conditions = document.querySelector('.conditions')
if (conditions) {
  const select = document.querySelector('.conditions__select')
  const customSelectDropdown = document.querySelector('.multiple-select__dropdown')
  const selectPlaceholder =  document.querySelector('.multiple-select__placeholder')
  let checkedItems = []

  const removeOptionFromSelect = (item) => {
    item.classList.remove('checked')
    checkedItems.splice(checkedItems.indexOf(item.textContent), 1)
    document.querySelector(`[value=${item.dataset.value}]`).remove()
  }

  const addOptionToSelect = (item) => {
    item.classList.add('checked')
    const isPresent = checkedItems.indexOf(item.textContent) !== -1
    checkedItems = isPresent ? checkedItems : [...checkedItems, item.textContent] 
    
    let optionEl = document.createElement('option');
    optionEl.value = item.dataset.value
    optionEl.setAttribute('selected', '')
    optionEl.textContent = item.textContent
    select.appendChild(optionEl)
  }

  const createItem = (option) => {
    let item = document.createElement('div');
    item.dataset.value = option.value
    item.textContent = option.textContent
    item.className = `multiple-select__dropdown-item`
    return item
  }

  const changeMutipleSelectText = () => {
    selectPlaceholder.textContent = checkedItems.join(', ')
      
    if (checkedItems.length === 0) {
      selectPlaceholder.textContent = 'Select Conditions'
      selectPlaceholder.classList.remove('active')
    } else {
      selectPlaceholder.classList.add('active')
    }
  }

  const createDropdownItem = (option) => {
    let item = createItem(option)
    customSelectDropdown.appendChild(item)
    
    function itemHandler() {
      if (item.classList.contains('checked')) {
        removeOptionFromSelect(item)
      } else {
        addOptionToSelect(item)
      }

      changeMutipleSelectText()
    }

    item.addEventListener('click', itemHandler)
  }

  Array.from(select.options).forEach((option) => {
    createDropdownItem(option)
    option.remove()
  })

  const closeSelect = document.querySelector('.multiple-select__arrow')
  closeSelect.addEventListener('click', () => {
    customSelectDropdown.classList.toggle('open')
  })

  const multipleSelect = document.querySelector('.multiple-select')
  multipleSelect.addEventListener('click', () => {
    customSelectDropdown.classList.toggle('open')
  }) 
}

// login 

const login = document.querySelector('.login')
if (login) {
  console.log(validate)
}
