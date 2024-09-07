import View from '../view';
import icons from 'url:../../img/icons.svg';

class Paginationview extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return `Page 1, others`;
    }
    // Page 1, and there are no other pages
    // Last page
    if (this._data.page === numPages && numPages > 1) {
      return 'last page';
    }
    // Other  page
    if (this._data.page < numPages) {
      return 'other page ';
    }

    // Page 1, and there are no other pages
    return 'only 1 page';
  }
}

export default new Paginationview();
