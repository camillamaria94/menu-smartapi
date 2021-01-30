require ('dotenv/config') 
const port = process.env.APPLICATION_PORT || 3001
const typeRecipe = require ('./routes/typeRecipeRoutes')
const user = require ('./routes/userRoutes')
const recipe = require ('./routes/recipeRoutes')
const menu = require ('./routes/menuRoutes')
const flavor = require ('./routes/flavorRoutes')
const category = require ('./routes/categoryRoutes')
const color = require ('./routes/colorRoutes')
const dayMenu = require ('./routes/dayMenuRoutes')
const equipment = require ('./routes/equipmentRoutes')
const ingredients = require ('./routes/ingredientsRoutes')
const texture = require ('./routes/textureRoutes')
const recipeIngredients = require ('./routes/recipeIngredientsRoutes')
const typeValue = require ('./routes/typeValueRoutes')
const recipeEquipment = require ('./routes/recipeEquipmentRoutes')
const incidences = require ('./routes/incidences')
const incidencesType = require ('./routes/incidencesType')

const cors = require ('cors')

//importando o express
const express = require('express');

//variavel para executar a função express
const app = express();
app.use(express.json())

app.use(cors())
app.use(typeRecipe)
app.use(user)
app.use(recipe)
app.use(menu)
app.use(flavor)
app.use(color)
app.use(category)
app.use(dayMenu)
app.use(equipment)
app.use(ingredients)
app.use(texture)
app.use(recipeIngredients)
app.use(typeValue)
app.use(recipeEquipment)
app.use(incidences)
app.use(incidencesType)




//Criando a primeira rota da aplicação
app.get('/', (req,res) => {
    res.send("Hello Word");
});


app.listen(port);
