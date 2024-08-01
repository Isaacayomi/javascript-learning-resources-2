'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Performing AJAX Calls using XMLHttpRequest method
const renderCountry = function (data, className = '') {
  const countryFlag = data.flags.png;
  const countryName = data.name.common;
  const countryRegion = data.region;
  const countryPopulation = (+data.population / 1000000).toFixed(1);
  const countryLanguage = Object.values(data.languages);
  // Object.keys() is a method that returns an array of the keys of the object passed to it. In this case, it returns an array of the keys of the data.currencies object
  const countryCurrency = data.currencies[Object.keys(data.currencies)].name;

  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${countryFlag}" />
            <div class="country__data">
                <h3 class="country__name">${countryName}</h3>
                <h4 class="country__region">${countryRegion}</h4>
                <p class="country__row"><span>👫</span>${countryPopulation} people</p>
                <p class="country__row"><span>🗣️</span>${countryLanguage}</p>
                <p class="country__row"><span>💰</span>${countryCurrency}</p>
            </div>
        </article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText); // converts the stringed object back to string
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`); // Search country based on the country code
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('usa');
*/

// Promises and The Fetch API
const request = fetch('https://restcountries.com/v3.1/name/portugal');
console.log(request);

const getCountryData = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};
getCountryData('portugal');
