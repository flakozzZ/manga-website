const Router = require('express')
const router = new Router()
const BookChapterController = require('../controller/book_chapters.controller')

router.post(`/`, BookChapterController.createBookChapter)
router.get(`/`, BookChapterController.getBookChapters)
router.get(`/book/:id`, BookChapterController.getBookChaptersByBook)
router.get(`/:id`, BookChapterController.getBookChapter)
router.put(`/`, BookChapterController.updateBookChapter)
router.delete(`/`, BookChapterController.deleteBookChapter)


module.exports = router
