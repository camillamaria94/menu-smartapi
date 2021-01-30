const Router = require("express").Router
const typeRecipeController = require('../controller/typeRecipe')

const routes = Router()

routes.post('/type-recipes', typeRecipeController.create)
routes.delete('/type-recipes/:id', typeRecipeController.pop)
routes.put('/type-recipes/:id', typeRecipeController.edit)
routes.get('/type-recipes/:id', typeRecipeController.selectID)
routes.get('/type-recipes/', typeRecipeController.select)



module.exports = routes