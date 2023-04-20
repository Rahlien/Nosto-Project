const display = document.querySelector('#products-data')

document.addEventListener('DOMContentLoaded', function () {
    async function fetchProducts(url = "https://api.nosto.com/v1/graphql") {
        let headers = new Headers()

        headers.set("Authorization", 'Basic ' + btoa(":" + "F7k5O1PHyzjwbjQF8Z6UvvZGuu90l3M5WR8Lp8gNoP8nwEQ6zpavKNVUajlZrX6x"))
        headers.set("Content-Type", 'application/json')
        headers.set("Accept", 'application/json')

        const query = `
        query {
            products (limit: 50) {
            products {
            name
            price
            listPrice
            brand
            imageUrl
            alternateImageUrls
            url
            scores {
            week {
            views
            buys
            }
            }
            }
            }
            }
        `
        try{

            let response = await fetch(url, {
                method: "post",
                headers: headers,
                body: JSON.stringify({
                    query
                })
            })
            
            let data = await response.json()
            let products = data.data.products.products

            console.log(products)
        
    }
        catch(error) {
            console.log(error)
        }
    }
    fetchProducts()
})
