const Router = require("express").Router
const typeRecipeController = require('../controller/incidencesType')

const routes = Router()

routes.post('/incidencesType', typeRecipeController.create)
routes.delete('/incidencesType/:id', typeRecipeController.pop)
routes.put('/incidencesType/:id', typeRecipeController.edit)
routes.get('/incidencesType/', typeRecipeController.select)
routes.get('/incidencesType/:id', typeRecipeController.selectID)


module.exports = routes