const Router = require("express").Router
const equipmentController = require('../controller/equipment')

const routes = Router()

routes.post('/equipment', equipmentController.create)
routes.delete('/equipment/:id', equipmentController.pop)
routes.put('/equipment/:id', equipmentController.edit)
routes.get('/equipment', equipmentController.select)
routes.get('/equipment/:id', equipmentController.selectID)

module.exports = routes