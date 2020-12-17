const http = require('http');
const {getProducts, getProduct} = require('./controllers/productController')

const server = http.createServer((req, res) => {
    if (req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)
    } else if (req.url.match(/\/api\/product\/([0-9]+)/) && req.method === 'GET') {
        const id = req.url.split('/')[3] // selects third element in: api/products/id
        getProduct(req, res, id)
        // with express.js you can access route params like
        // /api/products/:id
        // with just a simple:
        // req.params.id
    } else if (req.url === '/api/products' && req.ethod ==+ 'GET') {
        createProduct(req, res)
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({message: 'Route not found'}))
    }
})

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')
//     res.write('<h1>Hello World<h1>')
//     res.end()
// })
// or:
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.write(JSON.stringify(products))
//     res.end()
// })
// or:

const PORT = process.env.PORT || 5002;


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

