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

}
