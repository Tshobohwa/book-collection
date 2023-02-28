import {
  addButton,
  titleInput,
  authorInput,
  sections,
  navBar,
  bookContainer,
  DateAndTime,
} from "./dist/dom.js";

import { BookCollection } from "./dist/bookCollection.js";

const { DateTime } = require("luxon");

const bookCollection = new BookCollection([]);
addButton.addEventListener(
  "click",
  bookCollection.addBook.bind(bookCollection, titleInput, authorInput)
);

navBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav-link")) {
    const anchorHref = e.target.href.split("#")[1];
    document.querySelectorAll(".section").forEach((section) => {
      if (section.id === anchorHref) section.style.display = "flex";
      else section.style.display = "none";
    });
  }
});

sections.forEach((section) => {
  if (section === sections[1]) section.style.display = "flex";
  else section.style.display = "none";
});

bookContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    const removeBtn = e.target;
    const book = bookCollection.bookArray.find(
      (book) => book.id === removeBtn.id.split("-")[1]
    );
    bookCollection.removeBook(book);
  }
});

const getCurrentTime = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  DateAndTime.textContent = now;
};

setInterval(getCurrentTime, 1000);
