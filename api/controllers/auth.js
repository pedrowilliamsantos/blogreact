import { db } from "../db.js"
import bcryptjs from "bcryptjs"

export const register = (req, res) => {
    //VERIFICAR SE EXISTE USUARIO
    const q =  "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.name], (err, data)=> {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("O usuario existe!")

        //hash password and create a user

        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(req.body.password, salt)

        const q = "INSERT INTO users(`username`, `email`, `passoword`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q[values], (err, data ) => {
            if (err) return res.json(err);
            return res.status(200).json("Usuário foi criado!")
        })
    })
}
export const login = (req, res) => {
    
}
export const logout = (req, res) => {
    
}