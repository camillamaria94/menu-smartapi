const repository = require("../database/repositories/userRepository")

const create = async (req, res) => {
    const {name, email, password, confirmPassword, telephone, type, date = new Date(), firstLogin = true} = req.body;
    if (!name) {
        return res.status(400).json({
            success: false,
            error: "Name is required."
        })
    }
    const saved = await repository.save({name, email, password, confirmPassword, telephone, type, date, firstLogin})
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
            error: "User Category."
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

const editPassword = async (req, res) => {
    const {id, password, confirmPassword, firstLogin} = req.body;
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select User."

        })
    } else {
    const edited = await repository.modifyPassword({id, password, confirmPassword, firstLogin})
    console.log(edited) 
    return res.status(201).json({
        success: true,
        message: "User modify"
    })
    }
}


const edit = async (req, res) => {
    const {id} = req.params;
    const {name, email, password, confirmPassword, telephone, type, firstLogin} = req.body;
    const date = new Date()
    if (!id) {
        return res.status(400).json({
            success: false,
            error: "Select User."

        })
    } else {
    const edited = await repository.modify({name, email, password, confirmPassword, telephone, type, firstLogin})
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

const selectID = async (req, res) => {
    const {id} = req.params;
    const selected = await repository.viewID({id})
    console.log(selected) 
    return res.status(201).json(selected)
}

const selectEmail = async (req, res) => {
    const {email, password} =  req.body;
    const selected = await repository.viewEmail({email,password})
    if (!selected) {
        return res.status(400).json({
            success: false,
        })
    } else {
    return res.status(201).json(
        selected
        )
    }
}

const selectFirst = async (req, res) => {
    const {email} =  req.params;
    const selected = await repository.viewFirst({email})
    if (!selected) {
        return res.status(400).json({
            success: false,
        })
    } else {
    return res.status(201).json(
        selected
        )
    }
}



module.exports = {
    create, pop, edit, select, selectID, selectEmail, selectFirst, editPassword
}
