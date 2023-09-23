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
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3323231'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '1'
            }
        ];
        const books = StoredBooks

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
}


// store class: handles storage



// event: display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault()
    // get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // instatiate book
    const book = new Book(title, author, isbn);
    // console.log(book);

    // add book to UI
    UI.addBookToList(book);

    // clear fields
    UI.clearFields();
})


// event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
});

