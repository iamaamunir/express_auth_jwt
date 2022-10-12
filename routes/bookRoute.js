const express = require('express')

const bookRouter = express.Router()
const bookController = require('../controllers/bookController')

bookRouter.get('/', bookController.getAllBooks )

bookRouter.get('/:id', bookController.getBookById)

bookRouter.post('/createbook', bookController.createBook)

bookRouter.put('/updatebook/:id', bookController.updateById)


bookRouter.delete('/deletebook/:id', bookController.deleteById)


module.exports = bookRouter


