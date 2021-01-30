const repository = require("../database/repositories/incidencesTypeRepository")

const create = async (req, res) => {
    const {idType, composed, min, max = 1} = req.body;
    if ((!idType) || (!min) || (!composed)) {
        return res.status(400).json({
            success: false,
            error: "Incidences is requered."
        })
    }
    const saved = await repository.save({idType, composed, min, max})
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
    const {idType, composed,min,max} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select Incidences"
        })
    }else {
        const edited = await repository.modify({idType,composed,min,max})
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