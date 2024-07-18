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

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed;
  }

  calcSpeed() {
    // km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Running([39, -12], 27, 95, 523); 

console.log(run1);
console.log(cycling1);

//////////////////////////////////////////////////
// APPLICATION ARCHITECTURE
class App {
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));

    // Toggles the form 'select' type
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation)
      // Takes two callback functions (success and the error callback)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        // Error callback
        function () {
          alert('Could not get current position');
        }
      );
  }

  _loadMap(position) {
    // Success callback

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
    this.#map = L.map('map').setView(coords, 12);
    // console.log(map)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Adding an event listener on the map, the mapEvent displays a marker on wherever we click
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  _newWorkout(e) {
    e.preventDefault();

    // Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    // Display the marker
    // console.log(mapEvent);
    const latitude = this.#mapEvent.latlng.lat;
    const longitude = this.#mapEvent.latlng.lng;
    // OR
    // const { lat, lng } = mapEvent.latlng;

    L.marker([latitude, longitude])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250, // Sets maxwidth of the marker
          minWidth: 150, // sets minwidth of the marker
          autoClose: false, // prevents the marker from closing itself
          closeOnClick: false, // prevents the marker from closing when another position is being clicked
          className: 'running-popup', // adds a custom class styling to the marker
        })
      )
      .setPopupContent('Workout') // sets the content of the marker
      .openPopup();
  }
}

const app = new App();
// Using the geolocation API (sucess fn, error fn)
