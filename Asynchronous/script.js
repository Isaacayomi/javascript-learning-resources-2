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

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
/*
const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=55532362827180944412x107392`
  )
    .then(resp => {
      console.log(resp);
      if (!resp.ok)
        throw new Error(
          `Problem with geocoding ${err.message}, ${resp.status}`
        );
      return resp.json();
    })
    .then(data => console.log(`You are in ${data.city}, ${data.country}`));

  return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(`Country not found ${resp.status}`);
      }
      return resp.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err =>
      alert(`Something went wrong: ${err.message}, ${resp.status}`)
    );
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      response => {
        console.log(response);
        // Throwing Errors manually
        if (!response.ok)
          throw new Error(`Country not found (${response.status})`);
        return response.json();
      }

      // handling rejected promises (when there is no longer internet connection)
      // Handling/catching errors
      // err => alert(err)
    )
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json()

      // err => alert(err)
    )
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('france');
});
*/

// Building Promise
// a simple lottery promise
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening ');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You LOST your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTiemout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for two seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

// Promisifying the geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

getPosition().then(pos => console.log(pos));

// Coding challenge 2
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let newImage = document.createElement('img');
    newImage.src = imgPath;

    newImage.addEventListener('load', function () {
      imgContainer.append(newImage);
      resolve(newImage);
    });

    newImage.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(res => {
    currentImg = res;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(res => {
    currentImg = res;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
  */

// Consuming promises with async/await
// Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  try {
    const pos = await getPosition();
    console.log(pos);
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    console.log(resGeo);
    const dataGeo = await resGeo.json();

    // Country Data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`Problem getting country data`);
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(err.message);
    // or throw a custom error
  }
};

btn.addEventListener('click', whereAmI);
// console.log('FIRST');

//Handling errors using the try....catch method
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
