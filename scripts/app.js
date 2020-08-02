const search = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

//display info on screen
const updateUI = data => {
  
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;
  const {cityDetails, weather} = data;
  console.log(cityDetails, weather);

  //update ui with all info
  details.innerHTML = `
    <div class="text-center text-muted text-uppercase details">
    <h5 class="my-4">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    </div>
  `;


  //update night/day img
  let timeSrc = weather.IsDayTime ? 'img/day.svg':'img/night.svg';
    // if(weather.isDayTime){
    //   timeSrc='img/day.svg';
    // }else{
    //   timeSrc='img/night.svg';
    // }
  time.setAttribute('src',timeSrc);

  
  //update weather icon
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src',iconSrc);


  //remove d-none
  if(card.classList.contains('d-none'))
    card.classList.remove('d-none');

};


//getting city & weather info 
const updateCity = async(city) =>{

  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  // return {
  //   cityDetails: cityDetails,
  //   weather: weather
  // };

  return{ cityDetails, weather};

};

search.addEventListener('submit', e=>{

  //prevent Refresh
  e.preventDefault();

  //get city input
  const city=search.city.value.trim();
  search.reset();

  //update ui with city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));


});
