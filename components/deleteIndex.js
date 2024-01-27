function  deleteIndex(index) {
    /*  const  items = arr.filter((item,idx) => idx !== index);
     arr = items; */
    items.splice(index, 1);
    displayData();
}