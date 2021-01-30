const Router = require("express").Router
const categoryController = require('../controller/category')

const routes = Router()

routes.post('/category', categoryController.create)
routes.delete('/category/:id', categoryController.pop)
routes.put('/category/:id', categoryController.edit)
routes.get('/category', categoryController.select)
routes.get('/category/:id', categoryController.selectID)

module.exports = routes