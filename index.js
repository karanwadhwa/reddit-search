const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Form event listener
searchForm.addEventListener('submit', (e) => {
  const searchTerm = searchInput.value;
  const searchLimit = document.getElementById('limit').value;
  const sortBy = document.querySelector('input[name="sort-by"]:checked').value;

  e.preventDefault();
});
