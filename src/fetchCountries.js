import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import marcup from './marcup.hbs'
import debounce from 'lodash.debounce';



const form = document.querySelector('#form');
const input = document.querySelector('#search');
const container = document.querySelector('.container');

container.insertAdjacentHTML('beforeend', marcup(country));
const searchCountries = e => {
  e.preventDefault();
  const name = input.value;
  // console.log(input.value)
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    // .then(response => response.json())
    // .then(response => {
    //   if (response.status < 400) {
    //     return response.json();
    //   } else {
    //     alert({
    //       text: 'There is no matches!',
    //     });
    //   }
    // })
    .then(result => renderCollection(result))
    // .then(result => {
    //   if (result.length > 10) {
    //     alert({
    //       text: 'Too many matches found. Please enter a more specific query!',
    //     })
    //   } if (result.length < 2) {
    //     renderCollection(result);
    //   } else {
    //     createCountryMarcup(obj);
    //   }
    // })
  .catch(err => console.log(err))
}



  function renderCollection(arr) {
    arr.forEach(elem => createCountryMarcup(elem));
  }
form.addEventListener('submit', searchCountries);

export default searchCountries;
