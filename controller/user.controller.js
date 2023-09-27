const db = require('../database/dataBase')

class UserController{
    async createUser(req, res){
        const {username, email, password, avatar} = req.body
        console.log(username+' '+email+' '+password+' '+ avatar)

        const newUser = await db.query(`INSERT INTO users (username, email, password, avatar) values ($1, $2, $3, $4) RETURNING *`, [username, email, password, avatar])

        res.json(newUser.rows)
    }   

    async getUsers(req, res){
        const user = await db.query(`SELECT * FROM users`)

        res.json(user.rows)
    }
    
    async getUser(req, res){
        const id = req.params.id
        console.log(id)
        const user = await db.query(`SELECT * FROM users WHERE user_id = $1`, [id])

        res.json(user.rows)
    }
    
    async updateUser(req, res){
        const id = req.params.id
        console.log(id)
        const user = await db.query(`SELECT * FROM users WHERE user_id = $1`, [id])

        res.json(user.rows)
    }
    
    async deleteUser(req, res){

    }
}

module.exports = new UserController()
