const repository = require("../database/repositories/dayMenuRepository")

const create = async (req, res) => {
    const {day, idRecipe, idTypeRecipe,idMenu} = req.body;
    if ((!day) || (!idRecipe) || (!idTypeRecipe)|| (!idMenu)) {
        return res.status(400).json({
            success: false,
            error: "dayMenu is requered."
        })
    }
    const saved = await repository.save({day, idRecipe, idTypeRecipe,idMenu})
    console.log(saved) 
    return res.status(201).json({
        success: true,
        message: "dayMenu created"
    })
}

const pop = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select dayMenu"
        })
    } else {
        const removed = await repository.remove({id})
        console.log(removed)
        return res.status(201).json({
            success: true,
            message: "dayMenu removed"
        })
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {day, idRecipe, idTypeRecipe,idMenu} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            message: "Select dayMenu"
        })
    }else {
        const edited = await repository.modify({day, idRecipe, idTypeRecipe,idMenu})
        console.log(edited)
        return res.status(201).json({
            success: true,
            message: "dayMenu edited"
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

const selectIdMenu = async (req, res) => {
    const {idMenu} = req.params;
       const selected = await repository.viewMenu({idMenu})
    console.log(selected) 
    return res.status(201).json(
        selected
        )
}

const selectID = async (req, res, next) => {
    const {id} = req.params;
    const selected = await repository.viewID({id})
    console.log(selected) 
    return res.status(201).json(
        selected
        )
}

const selectDay = async (req, res) => {
    const {day} = req.query;
    const selected = await repository.viewDay({day})
    console.log(selected) 
    return res.status(201).json(
        selected
        )
}



module.exports = {
    create, pop, edit, select, selectID, selectDay, selectIdMenu
}