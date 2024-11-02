class BookPreview extends HTMLElement {
    constructor() {
        super(); //to ensure that bookPreview inherits from HTML element
        this.attachShadow({ mode: 'open' }); //creating my shadow DOM
    }

    // Called when element is added to the page
    connectedCallback() {
        this.render();
        this.addClickListener();
    }

    render() { //retrieves the book's attributes (ID, title, author, and image)
        const bookId = this.getAttribute('book-id');
        const title = this.getAttribute('title');
        const author = this.getAttribute('author');
        const image = this.getAttribute('image');
    }

    addClickListener() {
        const button = this.shadowRoot.querySelector('.preview');
        button.addEventListener('click', () => {
            // Create a custom event when book is clicked
            const event = new CustomEvent('book-selected', {
                bubbles: true,
                composed: true,
                detail: { bookId: this.getAttribute('bookid') }
            });
            this.dispatchEvent(event);
        });
    }
}

// Register the web component
customElements.define('book-preview', BookPreview);

class BookApp {
    renderBookPreview(book) { //create an instance of <book-preview> and set its attributes
        const element = document.createElement('book-preview');
        element.setAttribute('book-id', book.id);
        element.setAttribute('title', book.title);
        element.setAttribute('author', this.authors[book.author]);
        element.setAttribute('image', book.image);
        return element;
    }

    setupEventListeners() {

        // Listening for book selection
        document.querySelector('[data-list-items]').addEventListener('book-selected', (event) => {
            const bookId = event.detail.bookId;
            const active = this.books.find(book => book.id === bookId);
            
            if (active) {
                document.querySelector('[data-list-active]').open = true;
                document.querySelector('[data-list-blur]').src = active.image;
                document.querySelector('[data-list-image]').src = active.image;
                document.querySelector('[data-list-title]').innerText = active.title;
                document.querySelector('[data-list-subtitle]').innerText = 
                    `${this.authors[active.author]} (${new Date(active.published).getFullYear()})`;
                document.querySelector('[data-list-description]').innerText = active.description;
            }
        });
    }

}
