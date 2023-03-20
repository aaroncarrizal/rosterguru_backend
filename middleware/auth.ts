require('dotenv').config()
const jwt = require('jsonwebtoken')

function authenticateToken(req: any, res: any, next: Function) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null){
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error:Error, user: any) =>{
        if(error){
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}

export default authenticateToken