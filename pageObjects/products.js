export class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productName = page.locator('div.inventory_item_name')
    }

    async clickProductName(product) {
        this.productName.filter({ hasText: `${product}`}).click()
    }
}