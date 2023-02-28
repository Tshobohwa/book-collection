let bookArray = [];

const displayBooks = (book) => {
  const bookContainer = document.querySelector(".books-container");
  bookContainer.innerHTML = "";
  bookArray.forEach((book) => {
    bookContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="book-details" id="book-${book.id}">
          <p>"${book.title}" by ${book.author}</p> 
          <button class="remove" type="button" id="remove-${book.id}">Remove</button>
        </div>`
    );
  });

  if (bookArray.length !== 0) {
    bookContainer.style.border = "solid 3px #000000";
  } else bookContainer.style.border = "none";
};

const storeInLocalBrowser = () => {
  localStorage.setItem("bookCollectionArray", JSON.stringify(bookArray));
};

const removeBook = (book) => {
  bookArray.splice(book, 1);
  storeInLocalBrowser();
  displayBooks();
};
const addBook = (titleInput, authorInput) => {
  if (titleInput.value && authorInput.value) {
    const title = titleInput.value;
    const author = authorInput.value;
    bookArray.push({
      title,
      author,
      id: new Date.now(),
    });
    titleInput.value = "";
    authorInput.value = "";
    storeInLocalBrowser();
    displayBooks();
  }
};
export { addBook, removeBook };
