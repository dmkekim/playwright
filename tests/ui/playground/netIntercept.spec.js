import test from "playwright/test";

test('Checking network intercepts', async ({page}) => {
    await page.route('https://cat-fact.herokuapp.com/', (route, request) => {
        const resp = request.response()
        resp.then(responseBody => {
            responseBody.body().then(resp => {
                console.log(resp.toString())
            })
        })
        route.continue()
    })
    await page.goto('https://cat-fact.herokuapp.com/#/cat/facts')
})