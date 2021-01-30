const Router = require("express").Router
const userController = require('../controller/user')
const userControllerAuth = require('../auth/auth')

const routes = Router()


routes.post('/user', userController.create)
routes.delete('/user/:id', userController.pop)
routes.put('/user/:id', userController.edit)
routes.post('/auth',userControllerAuth.auth)
routes.put('/user/', userController.editPassword)
routes.get('/user', userController.select)
routes.get('/user/:id', userController.selectID)
routes.get('/userEmail/:email',userController.selectFirst)




module.exports = routes