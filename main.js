const books = [];
const list = document.querySelector('.list');

const addBook = () => {
  const book = {
    title: document.querySelector('.title').value,
    author: document.querySelector('.author').value,
    id: books.length,
  };
  books.push(book);
};

const display = () => {
  // const title = document.createElement('h4');
  // const author = document.createElement('li');

  let listElement = document.createElement('li');

  const remove = document.createElement('button');

  books.forEach((book) => {

    listElement.innerHTML = `&nbsp; ${book.author}&nbsp;&nbsp; ${book.title} &nbsp;&nbsp;`
    list.appendChild(listElement);

    remove.classList.add('remove');
    remove.textContent = 'Remove';
    listElement.appendChild(remove);

    // title.textContent = book.title;
    // author.textContent = book.author;
  });
};

const addButton = document.querySelector('.sub');
addButton.addEventListener('click', () => {
  addBook();
  display();
});
