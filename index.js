import {
  addButton,
  titleInput,
  authorInput,
  sections,
  navBar,
  bookContainer,
  DateAndTime,
} from './modules/dom.js';

import {
  addBook,
  removeBook,
  displayBooks,
  bookArray,
} from './modules/bookCollection.js';

const { DateTime } = require('luxon');

displayBooks();

addButton.addEventListener(
  'click',
  addBook.bind(null, titleInput, authorInput),
);

navBar.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    const anchorHref = e.target.href.split('#')[1];
    document.querySelectorAll('.section').forEach((section) => {
      if (section.id === anchorHref) section.style.display = 'flex';
      else section.style.display = 'none';
    });
  }
});

sections.forEach((section) => {
  if (section === sections[1]) section.style.display = 'flex';
  else section.style.display = 'none';
});

bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const removeBtn = e.target;

    const book = bookArray.find(
      (book) => book.id === +removeBtn.id.split('-')[1],
    );
    removeBook(book);
  }
});

const getCurrentTime = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  DateAndTime.textContent = now;
};

setInterval(getCurrentTime, 1000);
