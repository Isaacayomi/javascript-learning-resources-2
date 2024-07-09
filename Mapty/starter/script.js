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
      console.log(`https://www.google.pt/maps/@${latitude}, ${longitude}`);
    },

    // Error callback
    function () {
      alert('Could not get current position');
    }
  );

console.log(navigator.geolocation);
