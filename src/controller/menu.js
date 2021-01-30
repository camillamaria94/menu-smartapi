const repository = require("../database/repositories/menuRepository")

const create = async (req, res) => {
    const {name, mouth, year, verifyIncidences = 0,publish = 0} = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            error: "Name is required."
        })
    }else{
    const saved = await repository.save({name, mouth, year, verifyIncidences,publish})
    console.log(saved) 
    return res.status(201).json({
        success: true,
        message: "Menu Created"
    })
    }
}

const pop = async (req, res) => {
    const {id} = req.params;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select Menu."
        })
    } else {
    const removed = await repository.remove({id})
    console.log(removed) 
    return res.status(201).json({
        success: true,
        message: "Menu delete"
    })
    }
}

const edit = async (req, res) => {
    const {id} = req.params;
    const {name, mouth, year,verifyIncidences,publish} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Menu Category."

        })
    } else {
    const edited = await repository.modify({id, name,  mouth, year,verifyIncidences,publish})
    console.log(edited) 
    return res.status(201).json({
        success: true,
        message: "Menu modify"
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

const selectPublish = async (req, res) => {
    const { publish } = req.params;
    const selected = await repository.viewPublish({publish})
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


module.exports = {
    create, pop, edit, select, selectID,selectPublish
}
