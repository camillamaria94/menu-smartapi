const repository = require("../database/repositories/recipeIngredientsRepository")


const create = async (req, res) => {
    const {idRecipe, idIngredient, primary} = req.body;
    if ((!idRecipe) || (!idIngredient)) {
        return res.status(400).json({
            success: false,
            error: "Code is requered."
        })
    }
    const saved = await repository.save({idRecipe,  idIngredient, primary})
    console.log(saved) 
    return res.status(201).json({
        success: true,
        message: "Relationship created"
    })
}
const pop = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select Relationship"
        })
    } else {
        const removed = await repository.remove({id})
        console.log(removed)
        return res.status(201).json({
            success: true,
            message: "Relationship removed"
        })
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {idRecipe, idIngredient, primary} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select Relationship"
        })
    }else {
        const edited = await repository.modify({idRecipe, idIngredient, primary})
        console.log(edited)
        return res.status(201).json({
            success: true,
            message: "Relationship edited"
        })
    }
}

const select = async (req, res) => {
    const {name_like} = req.query;
    const selected = await repository.view(      
        {name_like})
    console.log(
        selected
        ) 
    return res.status(201).json(selected)
}

const selectID = async (req, res) => {
    const {id} = req.params;
    const selected = await repository.viewID({id})
    console.log(selected) 
    return res.status(201).json(
        selected
        )
}

const selectIDRecipe = async (req, res) => {
    const {idRecipe} = req.params;
    const selected = await repository.viewIDRecipe({idRecipe})
    console.log(selected) 
    return res.status(201).json(
        selected
        )
}



module.exports = {
    create, pop, edit, select, selectID, selectIDRecipe
}