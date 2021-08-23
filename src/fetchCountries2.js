import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import article from './marcup.hbs';
import debounce from 'lodash.debounce';

alert({
    text: 'Notice me, senpai!'
  })

 const refs = {
     form: document.querySelector('#form'),
     input: document.querySelector('#search'),
     container: document.querySelector('.container')
 }

 const renderCard = country => {
    refs.container.insertAdjacentHTML('beforeend', article(country));
  }

  refs.form.addEventListener('submit', createElem)
  

 function createElem(e){
     e.preventDefault()
    const name = refs.input.value
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log(error))
 }

 
 




//  refs.input.addEventListener('submit', searchCountry)
