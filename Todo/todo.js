const inputEl = document.querySelector(".input");
const addBtn = document.querySelector(".add");
const todo = [];
const task = document.querySelector(".tasks");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const mov = inputEl.value;
  todo.push(mov);

  const html = `
            <p class="tasks">
                <input type="checkbox"> ${mov.toUpperCase()}
            </p>
    `;
  console.log(html.toUpperCase());
  //Add the task in the UI (Update the UI)
  task.insertAdjacentHTML("afterbegin", html);

  //Clear the input field
  inputEl.value = "";
});
