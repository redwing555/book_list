let books = [];
const list = document.querySelector('.list');

function addBookToStorage() {
  const booksInformation = JSON.stringify(books);
  localStorage.setItem('Collection', booksInformation);
}

const addBook = () => {
  let i = 0;
  i++;
  const book = {
    title: document.querySelector('.title').value,
    author: document.querySelector('.author').value,
    id: i
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
    remove.innerHTML = '<button  onclick = "removeBook()" id="${book.id}"> delete </button>';
    const bookInfo = document.createElement('li');
    const authorName = document.createElement('h4');
    bookInfo.innerHTML = `&nbsp; ${book.author} &nbsp;&nbsp; ${book.title} &nbsp;&nbsp;`;

    bookInfo.classList.add('li');
    // remove.classList.add('remove');
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

const removeBook = (eventBtn) => {
  let buttonId = eventBtn.target.id;
  
  // books = books.filter((book) => book !== books[index]);
  // const bookRemoved = books.indexOf(index);
  // books.splice(bookRemoved, 1);


  books = books.filter((book) => book !== books[books.findIndex((x) => x.id === parseInt(buttonId, 10))]); 
  // books.forEach((book,index) => {
  //   if(books.indexOf(book) == index){
  //     books.splice(index,1);
  //   }
  // });

  localStorage.setItem('Collection', JSON.stringify(books));
  window.location.reload();
};

display();
