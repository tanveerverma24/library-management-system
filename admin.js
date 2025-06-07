document.addEventListener('DOMContentLoaded', function () {
  const bookForm = document.getElementById('bookForm');
  const bookList = document.getElementById('bookList');
  const searchInput = document.getElementById('searchInput');

  let books = JSON.parse(localStorage.getItem('books')) || [];

  function saveBooks() {
    localStorage.setItem('books', JSON.stringify(books));
  }

  function renderBooks(filter = '') {
    bookList.innerHTML = '';
    books
      .filter(book =>
        book.title.toLowerCase().includes(filter.toLowerCase()) ||
        book.author.toLowerCase().includes(filter.toLowerCase())
      )
      .forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.genre}</td>
          <td><button onclick="deleteBook(${index})">Delete</button></td>
        `;
        bookList.appendChild(row);
      });
  }

  window.deleteBook = function(index) {
    if (confirm('Are you sure you want to delete this book?')) {
      books.splice(index, 1);
      saveBooks();
      renderBooks(searchInput.value);
    }
  };

  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const genre = document.getElementById('bookGenre').value.trim();

    if (title && author && genre) {
      books.push({ title, author, genre });
      saveBooks();
      renderBooks(searchInput.value);
      bookForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });

  searchInput.addEventListener('input', () => {
    renderBooks(searchInput.value);
  });

  window.logout = function () {
    if (confirm('Do you really want to logout?')) {
      window.location.href = 'login.html';
    }
  };

  renderBooks();
});
