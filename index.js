function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Response not OK");
      }
      return resp.json();
    })
    .then((data) => {
      renderBooks(data);
      console.log(data);
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const bookList = document.querySelector('main');
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    bookList.appendChild(h2);
  });
}
document.addEventListener("DOMContentLoaded", function (){
  fetchBooks(json());
})



