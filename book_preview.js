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
                detail: { bookId: this.getAttribute('book-id') }
            });
            this.dispatchEvent(event);
        });
    }
}

// Register the web component
customElements.define('book-preview', BookPreview);