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

    render() {
        const bookId = this.getAttribute('book-id');
        const title = this.getAttribute('title');
        const author = this.getAttribute('author');
        const image = this.getAttribute('image');
    }
}