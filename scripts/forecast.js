const loc = 'wNH5FmnQh8keaSvZGTPCEBbS1K4p943J';

// weather info
const getWeather = async(key) =>{
  
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${key}?apikey=${loc}`; 

  const response = await fetch(base+query);
  const data = await response.json();

  return data[0];
}


// city info
const getCity = async(city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${loc}&q=${city}`;

  const response = await fetch(base+query);
  const data = await response.json();
  return data[0];

};  

// getCity('chelsea').then(data => {
//   return getWeather(data.Key);
// }).then(data => console.log(data))
//   .catch(err => console.log(err));
