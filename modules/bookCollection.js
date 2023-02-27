class BookCollection {
  constructor(bookArray) {
    this.bookArray = bookArray;
  }

  displayBooks() {
    const bookContainer = document.querySelector('.books-container');
    bookContainer.innerHTML = '';
    this.bookArray.forEach((book) => {
      bookContainer.insertAdjacentHTML(
        'beforeend',
        `
        <div class="book-details" id="book-${book.id}">
          <p>"${book.title}" by ${book.author}</p> 
          <button class="remove" type="button" id="remove-${book.id}">Remove</button>
        </div>`,
      );
    });

    if (this.bookArray.length !== 0) {
      bookContainer.style.border = 'solid 3px #000000';
    } else bookContainer.style.border = 'none';
  }

  storeInLocalBrowser() {
    localStorage.setItem('bookCollectionArray', JSON.stringify(this.bookArray));
  }

  removeBook(book) {
    this.bookArray.splice(book, 1);
    this.storeInLocalBrowser();
    this.bookArray.forEach((book, i) => {
      book.id = i;
    });
    this.displayBooks();
  }

  addBook(titleInput, authorInput) {
    if (titleInput.value && authorInput.value) {
      const title = titleInput.value;
      const author = authorInput.value;
      this.bookArray.push({
        title,
        author,
        id: this.bookArray.length,
      });
      titleInput.value = authorInput.value = '';
      this.storeInLocalBrowser();
      this.displayBooks();
    }
  }
}

export { BookCollection };
