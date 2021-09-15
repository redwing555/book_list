let books = [];
const list = document.querySelector('.list');
let i = 0;

function addBookToStorage() {
  const booksInformation = JSON.stringify(books);
  localStorage.setItem('Collection', booksInformation);
}

const addBook = () => {
  i += 1;
  const book = {

    id: i,
    title: document.querySelector('.title').value,
    author: document.querySelector('.author').value,

  };

  books.push(book);
  addBookToStorage();
};

// retrive books from local storage

function getBooksFromStorage() {
  if (localStorage.getItem('Collection') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('Collection'));
  }
  return books;
}

function hidden() {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

const display = () => {
  hidden();
  getBooksFromStorage();

  books.forEach((book) => {
    const remove = document.createElement('a');
    remove.innerHTML = `<button id="${book.id}" class="remove" > delete </button>`;
    const bookInfo = document.createElement('li');
    const authorName = document.createElement('h4');
    bookInfo.innerHTML = `&nbsp; ${book.author} &nbsp;&nbsp; ${book.title} &nbsp;&nbsp;`;

    bookInfo.classList.add('li');
    bookInfo.appendChild(remove);
    list.appendChild(authorName);
    list.appendChild(bookInfo);
  });
};

const addButton = document.querySelector('.sub');

addButton.addEventListener('click', () => {
  addBook();
  display();
});

const removeBook = (BtnEvent) => {
  const btnId = BtnEvent.target.id;
  /* eslint-disable */
  books = books.filter((book) => book !== books[books.findIndex((b) => b.id === parseInt(btnId, 10))]);
  /* eslint-enable */
  localStorage.setItem('Collection', JSON.stringify(books));
  window.location.reload();
};

list.addEventListener('click', (ev) => {
  if (ev.target.classList.contains('remove')) {
    removeBook(ev);
  }
});

display();


