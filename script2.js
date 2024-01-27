/* const  {del}  = require('./components/deleteIndex'); */


const text = document.getElementById("tasks");
const form = document.getElementById("my-form");
const { title, body, submitButton } = form.elements;

const arr = [];

let editItemValues = null;

function edit(id) {

  const editableItem = arr.find((item) => item.id == id)
  editItemValues = editableItem
  title.value = editableItem.heading;
  body.value = editableItem.description;
  submitButton.innerHTML = "Update";

}

function editItem(title, body, id) {
  const indexNumber = arr.findIndex((item) =>
    item.id === id
  )
  arr[indexNumber].heading = title.value;
  arr[indexNumber].description = body.value;
  editItemValues = null
  displayData()

  form.reset();
  submitButton.innerHTML = "Add";

}

function onSubmitForm(e) {
  e.preventDefault();

  const { elements } = e.target;
  const { title, body } = elements;
  if (editItemValues?.id) {
    editItem(title, body, editItemValues.id)
    return
  }

  const obj = { id: randomIdGenerate(), heading: title.value, description: body.value };
  arr.push(obj);

  displayData()
  e.target.reset();
}

function displayData() {
  text.innerHTML = "";
  arr.forEach((item) => {
    const child = createItem(item);
    text.appendChild(child);
  });

}

function createItem(item) {

  const myDiv = document.createElement('div');
  myDiv.className = "task-list";

  let headParagraph = document.createElement('p');
  headParagraph.textContent = `${item.heading}`
  headParagraph.className = "list-heading"
  myDiv.appendChild(headParagraph)


  let descParagraph = document.createElement('p');
  descParagraph.textContent = `${item.description}`
  descParagraph.className = "list-desc"
  myDiv.appendChild(descParagraph)

  let deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete"
  deleteButton.className = "btn"

  deleteButton.addEventListener("click", function () {
    del(`${item.id}`);
  })
  myDiv.appendChild(deleteButton)


  let editButton = document.createElement('button');
  editButton.textContent = "Edit"
  editButton.className = "btn"


  editButton.addEventListener("click", function () {
    edit(`${item.id}`);
  })
  myDiv.appendChild(editButton)

  return myDiv

}




function randomIdGenerate() {
  let timestamp = (new Date().getTime() / 1000 | 0).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function () {
    return (Math.random() * 16 | 0).toString(16);
  }).toLowerCase();
}


