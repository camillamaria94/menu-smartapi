const repository = require("../database/repositories/categoryRepository")

const create = async (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            error: "Name is required."
        })
    }else{
    const saved = await repository.save({name})
    console.log(saved) 
    return res.status(201).json({
        success: true,
        message: "Category Created"
    })
    }
}

const pop = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select Category."
        })
    } else {
    const removed = await repository.remove({id})
    console.log(removed) 
    return res.status(201).json({
        success: true,
        message: "Category delete"
    })
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {name, showMenu} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select Category."

        })
    } else {
    const edited = await repository.modify({id, name, showMenu})
    console.log(edited) 
    return res.status(201).json({
        success: true,
        message: "Category modify"
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
