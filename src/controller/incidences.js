const repository = require("../database/repositories/incidencesRepository")


const create = async (req, res) => {
    const {idIngredients, min, max = 0} = req.body;
    if ((!idIngredients) || (!min) ) {
        return res.status(400).json({
            success: false,
            error: "Incidences is requered."
        })
    }
    const saved = await repository.save({idIngredients,min,max})
    console.log(saved) 
    return res.status(201).json({
        success: true,
        message: "Incidences created"
    })
}

const pop = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select Incidences"
        })
    } else {
        const removed = await repository.remove({id})
        console.log(removed)
        return res.status(201).json({
            success: true,
            message: "Incidences removed"
        })
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {idIngredients,min,max} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select Incidences"
        })
    }else {
        const edited = await repository.modify({idIngredients,min,max})
        console.log(edited)
        return res.status(201).json({
            success: true,
            message: "Incidences edited"
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