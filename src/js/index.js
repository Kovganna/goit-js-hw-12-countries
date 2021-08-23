import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import fetchCountries from './fetchCountries.js';
import debounce from 'lodash.debounce';
import marcup from './templates/marcup.hbs';
import country from './templates/country.hbs'


 const refs = {
     form: document.querySelector('#form'),
     input: document.querySelector('#search'),
     container: document.querySelector('.container')
 }

 
  refs.input.addEventListener('input', debounce(refs.container, 500))
// refs.form.addEventListener('submit', fetchCountry)

// function fetchCountry(e){
//     e.preventDefault()
//    const name = refs.input.value
//    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//    .then(response => {
//        if(response.status < 400) {
//            return response.json()
//        } else {
//            error({
//                text:"There is no matches!"
//            })
//        }
//    })
//    .then(result =>{
//        if(result.length > 10) {
//            alert({
//                text: "Too many matches found. Please enter a more specific query!"
//            })
//        }if (result.length > 2){
           
//        }
       
       
//        })
   
//    })
// }

// function createItem (obj) {
//     const article = `<article>
//     <h1 class="title">${obj.name}</h1> 
//     <div class="js-container">
//     <ul class="list-items">
//        <li class="capital">Capital: ${obj.capital}</li>
//        <li  li class="population">Population: ${obj.population}</li>
//        <li class="country-languages">
//         Languages:
//             <ul class="languages">
//                <li class="language">${obj.languages[obj.name]}</li>
//             </ul>
//         </li>    
//    </ul>
//    </div>
//    <div class="js-container image"></div>
//             <img class="js-img" src="${obj.flag}" alt="flag">
//    </div>         
//     </article>`

// refs.container.insertAdjacentHTML('beforeend', article);
// }

// function renderCollection (arr) {
//    arr.forEach(el => createItem(el))
// }

// const renderCard = country => {
//    refs.container.insertAdjacentHTML('beforeend', article(country));
//  };






  

