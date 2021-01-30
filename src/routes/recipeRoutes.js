const Router = require("express").Router
const recipeController = require('../controller/recipe')

const routes = Router()

routes.post('/recipe', recipeController.create)
routes.delete('/recipe/:id', recipeController.pop)
routes.put('/recipe/:id', recipeController.edit)
routes.get('/recipe', recipeController.select)
routes.get('/recipe/:id', recipeController.selectID)


module.exports = routes