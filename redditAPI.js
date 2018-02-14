export default {
  search: (searchTerm, searchLimit, sortBy) => {
    return fetch (`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
};