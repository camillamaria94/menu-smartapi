const Router = require("express").Router
const typeRecipeController = require('../controller/incidences')

const routes = Router()

routes.post('/incidences', typeRecipeController.create)
routes.delete('/incidences/:id', typeRecipeController.pop)
routes.put('/incidences/:id', typeRecipeController.edit)
routes.get('/incidences/', typeRecipeController.select)
routes.get('/incidences/:id', typeRecipeController.selectID)


module.exports = routes