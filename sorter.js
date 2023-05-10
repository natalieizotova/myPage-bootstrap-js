const inputItem = document.getElementById('inputItem');
const submitBtn = document.getElementById('submitBtn');
const sortBtn = document.getElementById('sortBtn');
const clearBtn = document.getElementById('clearBtn');
const itemList = document.getElementById('itemList');

// Add event listeners to the submit, sort, and clear buttons
submitBtn.addEventListener('click', addItem);
sortBtn.addEventListener('click', sortList);
clearBtn.addEventListener('click', clearList);
inputItem.addEventListener('keydown', handleKeyDown);

// This function is called when the submit button is clicked
function addItem() {
    // Get the value of the input field and trim any whitespace
    const itemValue = inputItem.value.trim();

    // Check if the input field is not empty
    if (itemValue.length > 0) {
        // Create a new list item element and set its text content to the input value
        const li = document.createElement('li');
        li.textContent = itemValue;
        // Add the new list item to the item list
        itemList.appendChild(li);
        // Clear the input field
        inputItem.value = '';
    }
}

// This function is called when the sort button is clicked
function sortList() {
    // Convert the item list to an array of list item elements
    const itemsArray = Array.from(itemList.children);
    // Sort the array of list item elements by their text content using the `localeCompare` method
    itemsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));

    // Remove all the list item elements from the item list
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    // Add the sorted list item elements back to the item list
    itemsArray.forEach(item => {
        itemList.appendChild(item);
    });
}

// This function is called when the clear button is clicked
function clearList() {
    // Remove all the list item elements from the item list
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}
