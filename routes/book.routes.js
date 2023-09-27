const Router = require('express')
const router = new Router()
const bookController = require('../controller/book.controller')

router.post(`/`, bookController.createBook)
router.get(`/`, bookController.getBooks)
router.get(`/:title`, bookController.getBook)
router.put(`/`, bookController.updateBook)
router.delete(`/`, bookController.deleteBook)


module.exports = router
