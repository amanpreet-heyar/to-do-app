const items = [];
const itemsContainer = document.getElementById("tasks");
const form = document.getElementById("my-form");
let editItemId = "";

function getFormValues() {
  const { title, body, submitButton } = form.elements;
  return {
    title,
    body,
    submitButton,
  };
}

function edit(id) {
  const editableItem = items.find((item) => item.id == id);
  const { title, body, submitButton } = getFormValues();
  editItemId = editableItem.id;
  title.value = editableItem.title;
  body.value = editableItem.body;
  submitButton.innerHTML = "Update";
}

function updateItem(title, body, id) {
  const indexNumber = items.findIndex((item) => item.id === id);

  if (indexNumber !== -1) {
    items[indexNumber].title = title;
    items[indexNumber].body = body;

    displayData();

    form.reset();
    const { submitButton } = getFormValues();
    submitButton.innerHTML = "Add";
  }
  editItemId = ""; // Reset editItemId after editing


}

function onSubmitForm(e) {
  e.preventDefault();

  if (editItemId) {
    const { title, body } = getFormValues();
    updateItem(title.value, body.value, editItemId);
    return;
  }

  const obj = {
    id: randomIdGenerate(),
    title: form.elements.title.value,
    body: form.elements.body.value,
  };
  items.push(obj);

  displayData();
  e.target.reset();
}

function displayData() {
  itemsContainer.innerHTML = "";

  items.forEach((item) => {
    const child = createItem(item);
    itemsContainer.appendChild(child);
  });
}

function createItem(item) {
  const myDiv = document.createElement("div");
  myDiv.className = "task-list";

  let headParagraph = document.createElement("p");
  headParagraph.textContent = `${item.title}`;
  headParagraph.className = "list-heading";
  myDiv.appendChild(headParagraph);

  let descParagraph = document.createElement("p");
  descParagraph.textContent = `${item.body}`;
  descParagraph.className = "list-desc";
  myDiv.appendChild(descParagraph);

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "btn";

  deleteButton.addEventListener("click", function () {
    deleteIndex(item.id);
  });
  myDiv.appendChild(deleteButton);

  let editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "btn";

  editButton.addEventListener("click", function () {
    edit(item.id);
  });
  myDiv.appendChild(editButton);

  return myDiv;
}

function randomIdGenerate() {
  let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx".replace(/[x]/g, function () {
      return (Math.random() * 16 | 0).toString(16);
    })
  );
}
