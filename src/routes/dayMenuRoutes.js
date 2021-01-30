const Router = require("express").Router
const typeRecipeController = require('../controller/dayMenu')

const routes = Router()

routes.post('/dayMenu', typeRecipeController.create)
routes.delete('/dayMenu/:id', typeRecipeController.pop)
routes.put('/dayMenu/:id', typeRecipeController.edit)
routes.get('/dayMenu/menu/:idMenu', typeRecipeController.selectIdMenu)
routes.get('/dayMenu/', typeRecipeController.select)
routes.get('/dayMenu/:id', typeRecipeController.selectID)
routes.get('/dayMenu/day/:id', typeRecipeController.selectDay)




module.exports = routes