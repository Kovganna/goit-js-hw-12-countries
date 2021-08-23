import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import countries from './templates/countries.hbs';
import country from './templates/country.hbs';

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
    const searchQuery = refs.input.value.trim();
   fetchCountries(searchQuery)
   .then(result => console.log(result))
   .catch(error => console.log(error));

}


// refs.input.insertAdjacentHTML('submit', onSearch)

