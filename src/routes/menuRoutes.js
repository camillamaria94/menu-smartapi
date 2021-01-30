const Router = require("express").Router
const typeRecipeController = require('../controller/menu')

const routes = Router()

routes.post('/menu', typeRecipeController.create)
routes.delete('/menu/:id', typeRecipeController.pop)
routes.put('/menu/:id', typeRecipeController.edit)
routes.get('/menu/publish/:publish', typeRecipeController.selectPublish)
routes.get('/menu/', typeRecipeController.select)
routes.get('/menu/:id', typeRecipeController.selectID)


module.exports = routes