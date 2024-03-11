import { test } from 'playwright/test'
import { LoginPage } from '../../../pageObjects/login'
import { BasePage } from '../../../pageObjects/base'
import { ProductsPage } from '../../../pageObjects/products'
import { ProductDetailsPage } from '../../../pageObjects/productDetails'
import { ShoppingCartPage } from '../../../pageObjects/shoppingCart'
import { CheckoutPage } from '../../../pageObjects/checkout'
import { CheckoutOverviewPage } from '../../../pageObjects/checkoutOverview'
import { CheckoutAckPage } from '../../../pageObjects/checkoutAck'

test.describe('Simple E2E - Saucelab', () => {
    test.beforeEach('Setting up test', async ({page}) => {     
        const base = new BasePage(page)  
        base.openWebsite()
    })
    test('Smoke Test - E2E shopping flow', async ({ page }) => {
        const login = new LoginPage(page) 
        const product = new ProductsPage(page)
        const productDetails = new ProductDetailsPage(page)
        const cart = new ShoppingCartPage(page)
        const checkout = new CheckoutPage(page)
        const checkoutOverview = new CheckoutOverviewPage(page)
        const checkoutAck = new CheckoutAckPage(page)

        await login.login('standard_user', 'secret_sauce')

        await product.clickProductName('Sauce Labs Bolt T-Shirt')

        await productDetails.addToCart()
        await productDetails.backToProducts()

        await productDetails.goToShoppingCart()

        await cart.clickCheckout()

        await checkout.proceedCheckout(
            {
                firstName: 'Dhon',
                lastName: 'Kekim',
                postalCode: '1208'
            }
        )

        await checkoutOverview.clickFinish()
        await checkoutAck.backToHome()
    })
})