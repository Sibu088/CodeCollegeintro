document.getElementById("addIt").addEventListener("click", addToWishList);
document.getElementById("printable").addEventListener("click", printList);

function addToWishList() {
    // Get all inputs with the class name 'iWant'
    var inputs = document.getElementsByClassName("iWant");
    var wishList = document.getElementById("wishList");

    // Loop through each input field
    for (var i = 0; i < inputs.length; i++) {
        var inputValue = inputs[i].value.trim(); // Get the value of the input and trim whitespace

        if (inputValue) { // Check if the input is not empty
            var listItem = document.createElement("li");
            listItem.textContent = inputValue; // Set the text of the list item
            wishList.appendChild(listItem); // Add the list item to the wishlist
            inputs[i].value = ""; // Clear the input field
        }
    }
}

function printList() {
    window.print(); // Trigger the print dialog
}