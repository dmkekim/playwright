export class CheckoutPage {
    #firstName
    #lastName
    #postalCode
    #continue

    constructor(page) {
        this.page = page
        this.#firstName = page.getByPlaceholder('First Name')
        this.#lastName = page.getByPlaceholder('Last Name')
        this.#postalCode = page.locator('#postal-code')
        this.#continue = page.locator('#continue')
    }

    async proceedCheckout(formInfo) {
        await this.#firstName.fill(formInfo.firstName)
        await this.#lastName.fill(formInfo.lastName)
        await this.#postalCode.fill(formInfo.postalCode)
        await this.#continue.click()
    }
}