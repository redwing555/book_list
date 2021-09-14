

let books = [];
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

  const bookInfo = document.createElement('li');
  const remove = document.createElement('button');

  books.forEach((book) => {
    
    
    remove.innerHTML = `delete`;

    bookInfo.innerHTML = `&nbsp; ${book.author} &nbsp;&nbsp; ${book.title} &nbsp;&nbsp; `;

    bookInfo.classList.add('li');
    remove.classList.add('remove');
    // remove.textContent = 'Remove';
    bookInfo.appendChild(remove);
    list.appendChild(bookInfo);

    // title.textContent = book.title;
    // author.textContent = book.author;
  });
};



const addButton = document.querySelector('.sub');
addButton.addEventListener('click', () => {
  addBook();
  display();
});

const deleteBook =  (index) => {

  books = books.filter(book => book !== books[index]);

  return books;

}

// const removes = document.querySelectorAll('remove');


[...list.children].forEach(child, index => {

  child.addEventListener('click',   (e) => {

    if(e.target.classList.contains('remove')){

      deleteBook(index);
      e.target.parentElement.remove();
    }


      // deleteBook(index);
      // remove.parentElement.parentElement.remove();
      console.log(books);


  });

});





