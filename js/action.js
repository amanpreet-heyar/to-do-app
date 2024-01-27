// action.js


  
  function deleteIndex(id) {
    var index = items.findIndex(function(item) {
      return item.id === id;
    });
    if (index !== -1) {
      items.splice(index, 1);
      displayData();
    }
  }


 /* 
  
  function createItem(item) {
    var myDiv = document.createElement("div");
    myDiv.className = "task-list";
  
    var headParagraph = document.createElement("p");
    headParagraph.textContent = item.title;
    headParagraph.className = "list-heading";
    myDiv.appendChild(headParagraph);
  
    var descParagraph = document.createElement("p");
    descParagraph.textContent = item.body;
    descParagraph.className = "list-desc";
    myDiv.appendChild(descParagraph);
  
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn";
  
    deleteButton.addEventListener("click", function() {
      deleteItem(item.id);
    });
    myDiv.appendChild(deleteButton);
  
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "btn";
  
    editButton.addEventListener("click", function() {
      edit(item.id);
    });
    myDiv.appendChild(editButton);
  
    return myDiv;
  }
  
  function randomIdGenerate() {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return (
      timestamp +
      "xxxxxxxxxxxxxxxx".replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
      })
    );
  } */

 
