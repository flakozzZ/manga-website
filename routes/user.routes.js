const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post(`/`, userController.createUser)
router.get(`/`, userController.getUsers)
router.get(`/:id`, userController.getUser)
router.put(`/`, userController.updateUser)
router.delete(`/`, userController.deleteUser)


module.exports = router
