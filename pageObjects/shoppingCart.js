export class ShoppingCartPage {
    #checkOutButton

    constructor(page) {
        this.page = page
        this.#checkOutButton = page.locator('#checkout')
    }

    async clickCheckout() {
        await this.#checkOutButton.click()
    }
}