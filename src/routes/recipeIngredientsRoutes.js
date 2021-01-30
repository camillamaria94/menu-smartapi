const Router = require("express").Router
const recipeIngredientsController = require('../controller/recipeIngredients')

const routes = Router()

routes.post('/recipeIngredients', recipeIngredientsController.create)
routes.delete('/recipeIngredients/:id', recipeIngredientsController.pop)
routes.put('/recipeIngredients/:id', recipeIngredientsController.edit)
routes.get('/recipeIngredients', recipeIngredientsController.select)
routes.get('/recipeIngredients/:id', recipeIngredientsController.selectID)
routes.get('/recipeIngredients/recipe/:idRecipe', recipeIngredientsController.selectIDRecipe)


module.exports = routes