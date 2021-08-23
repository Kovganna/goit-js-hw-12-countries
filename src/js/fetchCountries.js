function fetchCountries(name) {
    
    const DESCR_PARAMS = 'fields=name; capital; population; flag; languages';
    return fetch(`https://restcountries.eu/rest/v2/name/${name}?${DESCR_PARAMS}`)
    .then(response =>  response.json()); 
}  
export default fetchCountries   