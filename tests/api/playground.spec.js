import test from "playwright/test"

test.describe('API POST/GET requests and response handling', () => {
    test('GET request and response handling', async ({ request }) => {
        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const resp = await request.get('https://api.restful-api.dev/objects', headers)

        resp.body().then(body => {
            const responseBodyString = body.toString()
            const responseBodyJson = JSON.parse(body.toString())
            console.log(`Logging the entire response body: ${responseBodyString}`)
            console.log(`Getting a value from one of the elements: ${responseBodyJson[0].name}`)
        })
    })

    test('POST request and response handling', async ({ request }) => {
        const options = {
            data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
            }
        }

        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const resp = await request.post('https://api.restful-api.dev/objects', options, headers)
        resp.body().then(body => {
            console.log(body.toString())
        })
    })
})