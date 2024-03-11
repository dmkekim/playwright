import { BasePage } from "./base";

export class ProductDetailsPage extends BasePage {
    #addToCartButton;
    #backToProductsLink

    constructor(page) {
        super(page)
        this.page = page
        this.#addToCartButton = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.#backToProductsLink = page.locator('#back-to-products')
    }

    async addToCart() {
        await this.#addToCartButton.click()
    }

    async backToProducts() {
        await this.#backToProductsLink.click()
    }
}