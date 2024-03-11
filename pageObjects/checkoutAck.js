export class CheckoutAckPage {
    #page
    #backToHome
    
    constructor(page) {
        this.#page = page
        this.#backToHome = page.locator('#back-to-products')
    }

    async backToHome() {
        await this.#backToHome.click()
    }
}