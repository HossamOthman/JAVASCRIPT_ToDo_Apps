// book class: represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// ui class: handles ui tasks
class UI {
    static displayBooks() {
       
        const books = Store.getBooks();

        books.forEach(book => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class="tableDelete">&#10005;</a></td>
                        `;
        list.appendChild(row);
    }
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    static deleteBook(el) {
        if(el.classList.contains('tableDelete')) {
            el.parentElement.parentElement.remove();
        }
    }
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const table = document.querySelector('.table');
        container.insertBefore(div, table);

        // vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 2000);

    }
}


// store class: handles storage
class Store{
    static getBooks()  {
        let books;
        if (localStorage.getItem('bookList.books') == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('bookList.books'));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('bookList.books', JSON.stringify(books))
    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn == isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('bookList.books', JSON.stringify(books));
    }
}



// event: display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault()
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validate
    if(title == '' || author == '' || isbn == '') {
        UI.showAlert('Please fill in Book Title, Author Name & ISBN', 'error')
    } else {
    // instatiate book
    const book = new Book(title, author, isbn);
    // console.log(book);

    // add book to UI
    UI.addBookToList(book);

    // add book to store
    Store.addBook(book);

    // show ui success message
    UI.showAlert(`${book.title} Book was added to List`, 'success')

    // clear fields
    UI.clearFields();
    }
})


// event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {

    // delete from UI
    UI.deleteBook(e.target);

    // remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // show ui success message
    UI.showAlert(`Book Removed`, 'success');

    // clear fields
});

