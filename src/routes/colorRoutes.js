const Router = require("express").Router
const colorController = require('../controller/color')

const routes = Router()

routes.post('/color', colorController.create)
routes.delete('/color/:id', colorController.pop)
routes.put('/color/:id', colorController.edit)
routes.get('/color', colorController.select)


module.exports = routes