const Router = require("express").Router
const textureController = require('../controller/texture')

const routes = Router()

routes.post('/texture', textureController.create)
routes.delete('/texture/:id', textureController.pop)
routes.put('/texture/:id', textureController.edit)
routes.get('/texture', textureController.select)
routes.get('/texture/:id', textureController.selectID)


module.exports = routes