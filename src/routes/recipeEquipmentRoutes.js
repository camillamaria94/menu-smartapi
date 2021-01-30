const Router = require("express").Router
const recipeEquipmentController = require('../controller/recipeEquipment')

const routes = Router()

routes.post('/recipeEquipment', recipeEquipmentController.create)
routes.delete('/recipeEquipment/:id', recipeEquipmentController.pop)
routes.put('/recipeEquipment/:id', recipeEquipmentController.edit)
routes.get('/recipeEquipment', recipeEquipmentController.select)
routes.get('/recipeEquipment/:id', recipeEquipmentController.selectID)
routes.get('/recipeEquipment/recipe/:idRecipe', recipeEquipmentController.selectIDRecipe)

module.exports = routes