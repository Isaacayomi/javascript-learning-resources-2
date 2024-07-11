'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Using the geolocation API (sucess fn, error fn)
if (navigator.geolocation)
  // Takes two callback functions (success and the error callback)
  navigator.geolocation.getCurrentPosition(
    // Success callback
    function (position) {
      console.log(position);
      // Getting the longitude and latitude
      // const latitude = position.coords.latitude
      // const longitude = position.coords.longitude
      const { longitude } = position.coords;
      const { latitude } = position.coords;
      console.log(latitude, longitude);
      // Getting your current location on google map
      // console.log(`https://www.google.pt/maps/@${latitude}, ${longitude}`);

      const coords = [latitude, longitude];
      // we must have a div element in our HTML with the id name of ('map') so that our map can display in that element
      const map = L.map('map').setView(coords, 13);
      // console.log(map)

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //Adding an event listener on the map, the mapEvent displays a marker on wherever we click
      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        const latitude = mapEvent.latlng.lat;
        const longitude = mapEvent.latlng.lng;
        // OR
        // const { lat, lng } = mapEvent.latlng;

        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 150,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });
    },

    // Error callback
    function () {
      alert('Could not get current position');
    }
  );

console.log(navigator.geolocation);
