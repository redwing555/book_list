class BookList {
  constructor() {
    this.list = document.querySelector('.list');

    this.books = JSON.parse(localStorage.getItem('Collection')) || [];

    this.books.forEach((book) => {
      this.hidden();
      this.getBooksFromStorage();
      this.createBook(book.title, book.author, book.id);
    });
  }

  getBooksFromStorage() {
    if (localStorage.getItem('Collection') === null) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem('Collection'));
    }
    return this.books;
  }
/* eslint-disable */


  addBook() {
    i += 1;
    const book = {

      id: i,
      title: document.querySelector('.title').value,
      author: document.querySelector('.author').value,

    };
    /* eslint-enable */
    this.books.push(book);
    this.addBookToStorage();
  }

  hidden() {
    while (this.list.lastElementChild) {
      this.list.removeChild(this.list.lastElementChild);
    }
  }

  display() {
    this.hidden();
    this.getBooksFromStorage();

    this.books.forEach((book) => {
      this.createBook(book.title, book.author, book.id);
    });
  }

  createBook(title, author, id) {
    const remove = document.createElement('a');
    const bookInfo = document.createElement('li');
    const authorName = document.createElement('h4');

    remove.innerHTML = `<button id="${id}" class="remove" > remove </button>`;
    bookInfo.innerHTML = `&nbsp; ${author} &nbsp; by &nbsp; ${title} &nbsp;&nbsp;`;

    bookInfo.classList.add('li');

    bookInfo.appendChild(remove);
    this.list.appendChild(authorName);
    this.list.appendChild(bookInfo);
  }

  removeBook(BtnEvent) {
    const btnId = BtnEvent.target.id;
    /* eslint-disable */
    this.books = this.books.filter((book) => book !== this.books[this.books.findIndex((b) => b.id === parseInt(btnId, 10))]);
    /* eslint-enable */
    localStorage.setItem('Collection', JSON.stringify(this.books));
    window.location.reload();
  }

  addBookToStorage() {
    const booksInformation = JSON.stringify(this.books);
    localStorage.setItem('Collection', booksInformation);
  }
  /* eslint-disable */
  changeColor() {
    const lists = Array.from(document.querySelectorAll('.li'));

    lists.forEach((list) => {
      const i = lists.indexOf(list);
      if (i % 2 == 0) {
        list.style.backgroundColor = '#F5F5F5';
      } else {
        list.style.backgroundColor = '#E0E0E0';
      }
    });
  }
  /* eslint-enable */
}

const bookList = new BookList();

let i = 0;
const store = JSON.parse(localStorage.getItem('Collection'));
/* eslint-disable */
if (store !== null && store.length !== 0) {
  i = Object.values(store[store.length - 1])[0];
} else {
  i = 0;
}
/* eslint-enable */
const form = document.getElementById('formm');

const addButton = document.querySelector('.sub');

addButton.addEventListener('click', () => {
  bookList.addBook();
  bookList.display();
  form.reset();
  bookList.changeColor();
});

bookList.list.addEventListener('click', (ev) => {
  if (ev.target.classList.contains('remove')) {
    bookList.removeBook(ev);
  }
});

bookList.display();
bookList.changeColor();

window.addEventListener('load', function time(){

  let {DateTime} =luxon;
  let now = DateTime.now();
  document.querySelector('.now').textContent = now.toLocaleString(DateTime.DATETIME_MED);
  

} );


document.getElementById('add-new-book').addEventListener('click', () => {
  document.querySelector('.heading').innerHTML = 'Add a new book';
  document.querySelector('.book-inputs').classList.remove('d-none');
  document.querySelector('.contact').classList.add('d-none');
  document.querySelector('.book-list').classList.add('d-none');
  document.getElementById('add-new-book').style.color = 'red';
  document.getElementById('contact').style.color = 'black';
  document.getElementById('list').style.color = 'black';
  
});

document.getElementById('list').addEventListener('click', () => {
  document.querySelector('.heading').innerHTML = 'All Awesome Books';
  document.querySelector('.book-list').classList.remove('d-none');
  document.querySelector('.book-inputs').classList.add('d-none');
  document.querySelector('.contact').classList.add('d-none');
  document.getElementById('list').style.color = 'red';
  document.getElementById('add-new-book').style.color = 'black';
  document.getElementById('contact').style.color = 'black';

});

document.getElementById('contact').addEventListener('click', () => {
  document.querySelector('.heading').innerHTML = 'Contact';
  document.querySelector('.contact').classList.remove('d-none');
  document.querySelector('.book-inputs').classList.add('d-none');
  document.querySelector('.book-list').classList.add('d-none');
  document.getElementById('contact').style.color = 'red';
  document.getElementById('list').style.color = 'black';
  document.getElementById('add-new-book').style.color = 'black';

});