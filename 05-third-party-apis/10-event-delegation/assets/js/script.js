const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
  event.preventDefault();

  const shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log('No shopping item filled out in form!');
    return;
  }

  const shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);

  // add delete button to remove shopping list item
  shoppingListItemEl.append(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val('');
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked
function handleRemoveButtonClick(event){
  shoppingListEl.on('click' , '.delete-item-btn' , function(event){
    // use event delegation to find the parent element of the clicked button and remove it
    $(event.target).parent().remove()
    console.log("item removed from list")
  })
}

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above
shoppingListEl.on('click', handleRemoveButtonClick)

shoppingFormEl.on('submit', handleFormSubmit);
