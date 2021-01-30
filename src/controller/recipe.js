const repository = require("../database/repositories/recipeRepository")


const create = async (req, res) => {
    const {name, methodPreparation, composed, lactose, gluten, calories, codTypeRecipe, codCategory, codTexture, codColor, codFlavor} = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            error: "Name is required."
        })
    }
    const saved = await repository.save({name, methodPreparation, composed, lactose, gluten, calories, codTypeRecipe, codCategory, codTexture, codColor, codFlavor})
    console.log(saved) 
    return res.status(201).json({
        success: true,
        message: "User Created"
    })
}
const pop = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select User."
        })
    } else {
    const removed = await repository.remove({id})
    console.log(removed) 
    return res.status(201).json({
        success: true,
        message: "User delete"
    })
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {name, methodPreparation, composed, lactose, gluten, calories, codTypeRecipe, codCategory, codTexture, codColor, codFlavor} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select User."

        })
    } else {
    const edited = await repository.modify({name, methodPreparation, composed, lactose, gluten, calories, codTypeRecipe, codCategory, codTexture, codColor, codFlavor})
    console.log(edited) 
    return res.status(201).json({
        success: true,
        message: "User modify"
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

const selectID = async (req, res, next) => {
    const {id} = req.params;
    const selected = await repository.viewID({id})
    console.log(selected) 
    return res.status(201).json(
        selected
        )
}


module.exports = {
    create, pop, edit, select, selectID
}
