const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Form event listener
searchForm.addEventListener('submit', (e) => {
  const searchTerm = searchInput.value;
  const searchLimit = document.getElementById('limit').value;
  const sortBy = document.querySelector('input[name="sort-by"]:checked').value;

  if(searchTerm==='') {
    showMessage('Enter something to search. Duh!', 'alert-danger');
  }

  e.preventDefault();
});

// Show Message
function showMessage(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add message
  div.appendChild(document.createTextNode(message));
  // Get parent container
  const searchContainer = document.getElementById('search-container');
  // Get Next div
  const next = document.getElementById('search');
  // Insert Message
  searchContainer.insertBefore(div, next);
  // Timeout Message
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
}