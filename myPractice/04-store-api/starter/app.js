require('dotenv').config()
require('express-async-errors')
const express = require('express')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const app = express()
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</hq><a href="/api/v1/products">products route</a>')
})
app.use('/api/v1/products', productRouter)

// product routes
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listen on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()