class searchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    return this.#parentElement.querySelector('.search__field').value;
  }

  addHandlerSearch(handler) {
    // Adding the event listener on the entire form
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
