const repository = require("../database/repositories/ingredientsRepository")

const create = async (req, res) => {
    const {name, calories = 0.0} = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            error: "Name is required."
        })
    }
    const saved = await repository.save({name, calories})
    console.log(saved) 
    return res.status(201).json({
        success: true,
        message: "Ingredients Created"
    })
}

const pop = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select Ingredients"
        })
    } else {
        const removed = await repository.remove({id})
        console.log(removed)
        return res.status(201).json({
            success: true,
            message: "Ingredients removed"
        })
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {name, calories} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select Ingredients"
        })
    }else {
        const edited = await repository.modify({id, name, calories})
        console.log(edited)
        return res.status(201).json({
            success: true,
            message: "Ingredients edited"
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