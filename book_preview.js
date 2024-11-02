class BookPreview extends HTMLElement {
    constructor() {
        super(); //to ensure that bookPreview inherits from HTML element
        this.attachShadow({ mode: 'open' }); //creating my shadow DOM
    }
}