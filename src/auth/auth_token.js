const JWT = require('jsonwebtoken')

const generate = payload => (
    new Promise(resolve => {
        JWT.sign(payload, "@token-menuValues", { algorithm: 'HS256' }, function (err, token) {
            if (err) {
                throw new Error("Token inválido")
            }
            resolve(token);
        })

    })
);

module.exports = {
    generate
}