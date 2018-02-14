import reddit from './redditAPI.js';

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

  // Clear Input
  searchInput.value = '';

  // Search Function
  reddit.search(searchTerm, searchLimit, sortBy)
    .then(posts => {
      let output = '<div class="card-column">';
      console.log(posts);
      // loop through all posts
      posts.forEach(post => {
        output += `
          <div class="card mb-2">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${truncateString(post.selftext, 10)}</p>
              <a href="${post.url}" target="_blank
              " class="btn btn-primary">Read More</a>
              <hr>
              <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
              <span class="badge badge-dark">Score: ${post.score}</span>
            </div>
          </div>
        `
      });
      output += '</div>';
      document.getElementById('results').innerHTML = output;
    });

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

// Truncate String function
function truncateString(str, limit) {
  // looks for the first space after <limit> number of characters in the str
  const shortened = str.indexOf(' ', limit);
  // if no space is found i.e either continous text or empty string, str is returned as is
  if (shortened == -1) return str;
  return str.substring(0, shortened);
}