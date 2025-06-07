// Example array of issued books (this would ideally come from your backend or localStorage)
const issuedBooks = [
  { title: "The Alchemist", author: "Paulo Coelho", issuedDate: "2025-06-01" },
  { title: "1984", author: "George Orwell", issuedDate: "2025-05-28" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", issuedDate: "2025-06-03" },
];

// Function to display issued books in the ul
function displayIssuedBooks() {
  const ul = document.getElementById("issuedBooksList");
  ul.innerHTML = ""; // Clear current list

  if (issuedBooks.length === 0) {
    ul.innerHTML = "<li>No books issued currently.</li>";
    return;
  }

  issuedBooks.forEach((book, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. "${book.title}" by ${book.author} (Issued on: ${book.issuedDate})`;
    ul.appendChild(li);
  });
}

// Call function on page load
window.onload = function () {
  displayIssuedBooks();
};

// Logout function (you can replace this with actual logic)
function logout() {
  alert("Logging out...");
  // You can add logic to clear session/localStorage or redirect to login page
  window.location.href = "login.html"; // example redirect
}
