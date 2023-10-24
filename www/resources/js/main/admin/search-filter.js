document.addEventListener('DOMContentLoaded', function() {
  const moreFilterBtn = document.querySelector('.search-filter__more-filter-btn');
  const moreFilterField = document.querySelectorAll('.search-filter__more');
  const datePickerOptions = document.querySelectorAll('.search-filter__selection li');
  const searchBox = document.querySelector('.search-filter__search-box');
  const resetBtn = document.querySelector('.feed-button--reset');
  const resetListBtn = document.querySelector('.feed-button--reset-list');
  const thumbnailRadioAll = document.querySelector('#filter-thumb-all');
  const modeRadioAll = document.getElementById('filter-mode-latest');
  const visibilityRadioAll = document.querySelector('#filter-visi-all');
  const searchFilter = document.querySelector('.search-filter');
  // Date picker
  const startDate = document.querySelector('duet-date-picker.duet-date__start-date');
  const endDate = document.querySelector('duet-date-picker.duet-date__end-date');

  // Clicking more filter drops the hidden filters
  moreFilterBtn.addEventListener('click', function() {
    moreFilterField.forEach((option) => {
      option.classList.toggle('search-filter__row--hide');
    });
    // rotate icon
    moreFilterBtn.classList.toggle('search-filter__more-filter-btn--rotate');
  });

  // Date Picker
  datePickerOptions.forEach((option) => {
    option.addEventListener('click', function(e) {
      datePickerOptions.forEach((el) => {
        el.classList.remove('active');
      });
      e.target.classList.add('active');
    });
  });

  // This will get the value of start date and end date filter
  startDate.addEventListener('duetChange', function(event) {
    console.log('Start date', event.detail.value);
  });

  endDate.addEventListener('duetChange', function(event) {
    console.log('End date', event.detail.value);
  });

  // Reset button
  if (searchFilter.classList.contains('search-filter--list')) {
    resetListBtn.addEventListener('click', function() {
      searchBox.value = '';
      datePickerOptions.forEach((option) => {
        option.classList.remove('active');
      });
      modeRadioAll.checked = true;
      visibilityRadioAll.checked = true;
      startDate.value = '';
      endDate.value = '';
    });
  } else {
    resetBtn.addEventListener('click', function() {
      searchBox.value = '';
      datePickerOptions.forEach((option) => {
        option.classList.remove('active');
      });
      // reset dropdown
      document.querySelectorAll(`.search-filter__dropdown .dropdown .option > li`).forEach(function(item){
        item.removeAttribute('class');
        document.querySelector(`.search-filter__dropdown .value span`).textContent = 'The Wall Street Journal';
        if (item.querySelector('a').textContent === 'The Wall Street Journal') {
          item.classList.add('selected');
        }
      });
      visibilityRadioAll.checked = true;
      startDate.value = '';
      endDate.value = '';
    });
  }
  

  
});
