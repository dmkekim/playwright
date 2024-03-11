export class CheckoutOverviewPage {
    #page
    #finish

    constructor(page) {
        this.#page = page
        this.#finish = page.locator('#finish')
    }

    async clickFinish() {
        await this.#finish.click()
    }
}