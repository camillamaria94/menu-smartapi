const Router = require("express").Router
const ingredientsController = require('../controller/ingredients')

const routes = Router()

routes.post('/ingredients', ingredientsController.create)
routes.delete('/ingredients/:id', ingredientsController.pop)
routes.put('/ingredients/:id', ingredientsController.edit)
routes.get('/ingredients', ingredientsController.select)
routes.get('/ingredients/:id', ingredientsController.selectID)

module.exports = routes