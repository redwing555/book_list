

let books = [];
const list = document.querySelector('.list');

const addBook = () => {
  const book = {
    title: document.querySelector('.title').value,
    author: document.querySelector('.author').value,
    
  };

  books.push(book);
  addBookToStorage();
  
};

function addBookToStorage(){

  const booksInformation = JSON.stringify(books);
  localStorage.setItem('Collection', booksInformation);


}



const display = () => {


  
  const remove = document.createElement('button');
  const bookInfo = document.createElement('li');
  

  books.forEach(book => {
    
    
    remove.innerHTML = `delete`;
    bookInfo.innerHTML = `&nbsp; ${book.author} &nbsp;&nbsp; ${book.title} &nbsp;&nbsp;`;

    bookInfo.classList.add('li');
    remove.classList.add('remove');
    bookInfo.appendChild(remove);
    list.appendChild(bookInfo);
    
    
    
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



// const removeBtn = document.querySelectorAll('remove');

// removeBtn.forEach( (btn,ind) => {

//   btn.addEventListener('click', () =>{


//     const filteredArr = books.filter((book,index) => index !== ind )
//     localStorage.setItem('Collection', JSON.stringify(filteredArr));
//     console.log(localStorage);
//     window.location.reload();

  
  
//   })



// });


//loading page event listener

function getBooksFromStorage(){

  

  if (localStorage.getItem('Collection') === null) {
    books = [];
  }

  else{
    books = JSON.parse(localStorage.getItem('Collection'));
    console.log(books);
  }

  return books;


}

document.addEventListener("DOMContentLoaded", function BooksLoadPage(){

  getBooksFromStorage();
  display();
  
  

});

