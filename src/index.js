import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import countriesItems from './templates/countries.hbs';
import countryItem from './templates/country.hbs';

// import { error } from '@pnotify/core';
import { alert, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/desktop/dist/PNotifyDesktop';
import '@pnotify/core/dist/BrightTheme.css';

var debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onSearch, 500));

function onSearch(e){
    e.preventDefault()
    inputClear()
    const searchQuery = refs.input.value.trim();
   fetchCountries(searchQuery)
//    .then(result => console.log(result))
    .then(country => {
    if (country.length > 10) {
      error({
        text: 'Too many matches found. Please enter a more specific query!',
      });
    } else if (country.status === 404) {
      console.log(country.status);
      error({
        text: 'No matches was found. Please enter a more specific query!',
      });
    } else if (country.length === 1) {
      renderCountry(country);
    } else if (country.length <= 10) {
      renderCountries(country);
    }
  })
//   .catch(error => console.log(error));
  .catch(onFetchError);
}

function renderCountry(country) {
    const countryDescr = countryItem(country);
  
    refs.descrCountry.insertAdjacentHTML('beforeend', countryDescr);
  }

  function renderCountries(country) {
    const countriesList = countriesItems(country);
  
    refs.countryList.insertAdjacentHTML('beforeend', countriesList);
  }

  function inputClear() {
    refs.descrCountry.innerHTML = '';
    refs.countryList.innerHTML = '';
  }

function onFetchError(Error) {
    Error;
  }
