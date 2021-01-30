const repository = require("../database/repositories/typeRecipeRepository")

const create = async (req, res) => {
    const {name, idTypeValue} = req.body;
    if (!name && !type) {
        return res.status(400).json({          
            success: false,
            error: "Name is required."
        })
    } else {
    const saved = await repository.save({name, idTypeValue})
    console.log(saved) 
    return res.status(201).json({
        success: true,
        message: "TypeRecipe Created"
    })
    }
}

const pop = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select Type Recipe."
        })
    } else {
    const removed = await repository.remove({id})
    console.log(removed) 
    return res.status(201).json({
        success: true,
        message: "TypeRecipe delete"
    })
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {name,idTypeValue} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select Type Recipe."

        })
    } else {
    const edited = await repository.modify({id, name, idTypeValue})
    console.log(edited) 
    return res.status(201).json({
        success: true,
        message: "TypeRecipe modify"
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


module.exports = {
    create, pop, edit, select, selectID
}
