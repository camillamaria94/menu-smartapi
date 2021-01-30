const repository = require("../database/repositories/userRepository")
const Token = require('./auth_token')



const auth = async (req, res) => {
    const { email, password } = req.body;
    
    if ((!email) && (!password)) {
        return res.status(400).json({
            success: false,
            error: "E-mail is required."
        })
        
    } else {
        const save = await repository.viewEmail({ email, password })
       
        const JWTData = {
            iss: 'menu-api',
            sub: save.id,
            exp: Math.floor(Date.now() / 1000) + 3600,
        }
        if (save) {
            const token = await Token.generate(JWTData)
            return res.status(200).json ({
                token
            })
           
        } else {
            res.status(400).json({
                success: false,
                error: "Email ou Senha invalida."
            })
        }
    }
}

module.exports = {
    auth
}