const Router = require("express").Router
const flavorController = require('../controller/flavor')

const routes = Router()


routes.post('/flavor', flavorController.create)
routes.delete('/flavor/:id', flavorController.pop)
routes.put('/flavor/:id', flavorController.edit)
routes.get('/flavor', flavorController.select)
routes.get('/flavor/:id', flavorController.selectID)

module.exports = routes