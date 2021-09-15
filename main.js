class BookList {
    constructor(){
      this.list = document.querySelector('.list');
      this.books = JSON.parse(localStorage.getItem('Collection')) || [];
      this.books.forEach((book) => {
  
          this.hidden();
          this.getBooksFromStorage();
          this.createBook(book.title, book.author, book.id);
      })
    }
    getBooksFromStorage() {
      if (localStorage.getItem('Collection') === null) {
        this.books = [];
      } else {
        this.books = JSON.parse(localStorage.getItem('Collection'));
      }
      return this.books;
    }
    addBook() {
      
      i += 1;
      const book = {
        id: i,
        title: document.querySelector('.title').value,
        author: document.querySelector('.author').value,
  ​
      };
  ​
      this.books.push(book);
      this.addBookToStorage();
    }
  ​
  ​
    hidden() {
      while (this.list.lastElementChild) {
        this.list.removeChild(this.list.lastElementChild);
      }
    }
  ​
    display() {
      
      this.hidden();
      this.getBooksFromStorage();
  ​
      this.books.forEach((book) => {
  ​
       this.createBook(book.title, book.author, book.id);
  ​
      });
    }
  ​
  ​
  ​
    createBook(title, author, id){
  ​
      const remove = document.createElement('a');
      const bookInfo = document.createElement('li');
      const authorName = document.createElement('h4');
  ​
      remove.innerHTML = `<button id="${id}" class="remove" > delete </button>`;
      bookInfo.innerHTML = `&nbsp; ${author} &nbsp;&nbsp; ${title} &nbsp;&nbsp;`;
  ​
      bookInfo.classList.add('li');
  ​
      bookInfo.appendChild(remove);
      this.list.appendChild(authorName);
      this.list.appendChild(bookInfo);
  ​
  ​
  ​
    }
  ​
    
  ​
    removeBook(BtnEvent) {
      const btnId = BtnEvent.target.id;
      /* eslint-disable */
      this.books = this.books.filter((book) => book !== this.books[this.books.findIndex((b) => b.id === parseInt(btnId, 10))]);
      /* eslint-enable */
      localStorage.setItem('Collection', JSON.stringify(this.books));
      window.location.reload();
    }
  ​
   
    
  ​
    addBookToStorage() {
      const booksInformation = JSON.stringify(this.books);
      localStorage.setItem('Collection', booksInformation);
    }
  ​
  }