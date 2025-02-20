// Sample recipes with ingredients (this could be dynamic based on a recipe API)
const recipes = {
    "Pasta": ["Pasta", "Tomato Sauce", "Olive Oil", "Garlic"],
    "Salad": ["Lettuce", "Tomato", "Cucumber", "Olive Oil", "Lemon"],
    "Tacos": ["Taco Shells", "Ground Beef", "Cheese", "Lettuce", "Tomato"]
};

// Auto-populate shopping list from frequent items stored in localStorage
function loadFrequentItems() {
    const frequentItems = JSON.parse(localStorage.getItem('frequentItems')) || [];
    const frequentItemList = document.getElementById('frequentItemList');
    
    frequentItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        frequentItemList.appendChild(listItem);
    });
}

// Add item to the shopping list
function addItem() {
    const input = document.getElementById('itemInput');
    const itemText = input.value.trim();

    if (itemText === "") {
        alert("Please enter an item.");
        return;
    }

    // Create the list item with a checkbox and delete button
    const shoppingList = document.getElementById('shoppingList');
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const deleteButton = document.createElement('button');

    // Configure checkbox
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', toggleItemStatus);

    // Configure delete button
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', removeItem);

    // Create the list item
    listItem.textContent = itemText;
    listItem.insertBefore(checkBox, listItem.firstChild);
    listItem.appendChild(deleteButton);

    shoppingList.appendChild(listItem);

    // Add the item to frequent items (for auto-population next time)
    saveFrequentItem(itemText);

    // Clear the input field
    input.value = '';
}

// Toggle item status (checked or unchecked)
function toggleItemStatus(event) {
    const listItem = event.target.parentElement;
    if (event.target.checked) {
        listItem.classList.add('completed');
    } else {
        listItem.classList.remove('completed');
    }
}

// Remove item from the list
function removeItem(event) {
    const listItem = event.target.parentElement;
    listItem.remove();
}

// Save item as a frequent item
function saveFrequentItem(item) {
    let frequentItems = JSON.parse(localStorage.getItem('frequentItems')) || [];
    
    if (!frequentItems.includes(item)) {
        frequentItems.push(item);
        localStorage.setItem('frequentItems', JSON.stringify(frequentItems));
    }
}

// Add ingredients from a predefined recipe
function addRecipeIngredients() {
    const recipe = "Pasta"; // You can dynamically get this based on user selection
    const ingredients = recipes[recipe];
    
    ingredients.forEach(ingredient => {
        addItemToList(ingredient);
        saveFrequentItem(ingredient);
    });
}

// Helper function to add item to the list (used by both recipe and manual input)
function addItemToList(itemText) {
    const shoppingList = document.getElementById('shoppingList');
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const deleteButton = document.createElement('button');

    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', toggleItemStatus);

    deleteButton.textContent = 'Delete';
    delete
    Button.classList.add('delete-btn');
    deleteButton.addEventListener('click', removeItem); 
}