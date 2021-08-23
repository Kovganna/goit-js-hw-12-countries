function fetchCountries(name) {
    
    const COUNTRY_PARAMS = 'fields=name;capital;population;flag;languages';
    return fetch(`https://restcountries.eu/rest/v2/name/${name}?${COUNTRY_PARAMS}`)
    .then(response =>  response.json()); 
} 
 
export default fetchCountries   