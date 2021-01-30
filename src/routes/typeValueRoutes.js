const Router = require("express").Router
const categoryController = require('../controller/typeValue')

const routes = Router()

routes.post('/typeValue', categoryController.create)
routes.delete('/typeValue/:id', categoryController.pop)
routes.put('/typeValue/:id', categoryController.edit)
routes.get('/typeValue/:id', categoryController.selectID)
routes.get('/typeValue', categoryController.select)

module.exports = routes