import { BasePage } from "./base";

export class LoginPage extends BasePage { 
    constructor(page) {
        super(page)
        this.page = page
        this.username = page.locator('input[placeholder="Username"]')
        this.password = page.locator('input[placeholder="Password"]')
        this.loginButton = page.locator('#login-button')
    }

    async login(user, pass) {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginButton.click()
    }
}