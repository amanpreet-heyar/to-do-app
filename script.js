let x = document.getElementById("heading");
    let y= document.getElementById("description");
    let text = document.getElementById("storage");
    let error = document.getElementById('error')
    let error2 = document.getElementById('error2');
    let arr = [];
    console.log(arr,"arr");

function addTodo(){
   if(x.value?.trim() =="" || x.value?.trim() ==null){

    error.textContent = "Please enter input values";
    error.style.color = "red";

   }
   else if(y.value?.trim() =="" || y.value?.trim() ==null){
    error.textContent ="";
    error2.textContent = "Please enter description";
    error2.style.color = "red";
   }
   else{
    error.textContent="";
    error2.textContent="";
    const obj = { heading :x.value, desc : y.value };
    arr.push(obj);
    console.log(arr);

    dispayData()
   }
     
}


function dispayData() {
   text.innerHTML = "";

  arr.forEach((item,idx) => {

   text.innerHTML += `
   
   <div class="my-div">
   <div>
  <strong>${item.heading} : </strong>${item.desc}<span></span>
  
   </div>
   <div>
   <button onclick="delete_book(${idx});" class="button">Delete</button>
   <button onclick="editing();" class="button">update</button>
   </div>
   `  
});
}

function delete_book(idx){
    debugger
   const data = arr.filter((item,index)=>index!==idx);
    arr = data;
  
    dispayData();
}

function editing(){

    
}
/* function delete_book( elem){
 
    arr.splice(elem,1);
    dispayData(); 
} */


/* function delete_book(idx){
    arr.pop(idx);
    dispayData();
} */



   // edit button make up
 /*    
   function editing() {
    let forEdit = this.parentElement;
    let input = document.createElement('input');
    input.type = 'text';
    input.value = 

    forEdit.replaceWith(input);

    editButton.textContent = 'save';
 
}  */

function reset(){
    document.getElementById("heading").value="";
    document.getElementById("description").value="";

}
