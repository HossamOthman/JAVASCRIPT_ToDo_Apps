// book class: represents a book
class book {
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
        const book = StoredBooks

        StoredBooks.forEach(book => UI.addBookToList(book));
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
}


// store class: handles storage



// event: display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// event: add a book



// event: remove a book


