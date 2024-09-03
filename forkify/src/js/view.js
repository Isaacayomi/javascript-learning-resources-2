import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    // Emptying the recipe container
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = ' ';
  }

  renderSpinner() {
    const markup =
      // the svg used here has been animated in the css file, causing the svg file to rotate. components.SCSS: Line 170 - 190
      `
        <div class="spinner">
                <svg>
                  <use href="${icons}#icon-loader"></use> 
                </svg>
        </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // error handling
  renderError(message) {
    const markup = `
      <div class="error">
          <div>
          <svg>
              <use href="${icons}#icon-alert-triangle"></use>
          </svg>
          </div>
          <p>${message}</p>
      </div>
  `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
