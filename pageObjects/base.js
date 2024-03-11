export class BasePage {
    #shoppingCart

    constructor(page) {
        this.page = page;
        this.#shoppingCart = page.locator('a.shopping_cart_link')
    }

    async openWebsite() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async goToShoppingCart() {
        await this.#shoppingCart.click()
    }
}