import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
// import article from './marcup.hbs';
import debounce from 'lodash.debounce';
import { name } from 'commander';


alert({
    text: 'Notice me, senpai!'
  })

 const refs = {
     form: document.querySelector('#form'),
     input: document.querySelector('#search'),
     container: document.querySelector('.container')
 }

//   refs.input.addEventListener('input', debounce)
  refs.form.addEventListener('submit', fetchCountry)
 
 function fetchCountry(e){
     e.preventDefault()
    const name = refs.input.value
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(result =>{
        if(result.length > 10) {
            alert({
                text: "'Too many matches found. Please enter a more specific query!"
            })
        }if (result.length > 2)
         renderCollection(result)
        })
    .catch(error => console.log(error))
 }

 function createItem (obj) {
     const article = `<article>
     <h1 class="title">${obj.name}</h1> 
     <div class="js-container">
     <ul class="list-items">
        <li class="capital">Capital: ${obj.capital}</li>
        <li  li class="population">Population: ${obj.population}</li>
        <li class="country-languages">
         Languages:
             <ul class="languages">
                <li class="language">${obj.languages[obj.name]}</li>
             </ul>
         </li>    
    </ul>
    </div>
    <div class="js-container image"></div>
             <img class="js-img" src="${obj.flag}" alt="flag">
    </div>         
     </article>`

 refs.container.insertAdjacentHTML('beforeend', article);
 }

 function renderCollection (arr) {
    arr.forEach(el => createItem(el))
 }


 





