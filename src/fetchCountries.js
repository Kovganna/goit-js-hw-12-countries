import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';



const form = document.querySelector('#form');
const input = document.querySelector('#search');
const container = document.querySelector('.container');


const searchCountries = e => {
  e.preventDefault();
  const name = input.value;
  // console.log(input.value)
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    // .then(response => {
    //   if (response.status < 400) {
    //     return response.json();
    //   } else {
    //     alert({
    //       text: 'There is no matches!',
    //     });
    //   }
    // })
    .then(data => renderCollection(data[0]))
    // .then(data => {
    //   if (data.length > 10) {
    //     alert({
    //       text: 'Too many matches found. Please enter a more specific query!',
    //     })
    //   } if (data.length < 2) {
    //     createCountryMarcup();
    //   } else {
    //     renderCollection();
    //   }
    // });
  .catch(err => console.log(err))
}

function createCountryMarcup({name, flag, capital, population, languages}) {
  const article = `
    <article>
        <h1>${name}</h1> 
    
        <img src="${flag}" alt="${name}">
        
        <ul>
        <li>Capital: ${capital}</li>
        <li>Population: ${population}</li>
        <li>Languages: ${languages}</li>
        </ul>
    
    </article>
    `;
  container.insertAdjacentHTML('beforeend', article);
}

  function renderCollection(arr) {
    arr.forEach(elem => createItem(elem));
  }



form.addEventListener('submit', searchCountries);

export default searchCountries;
