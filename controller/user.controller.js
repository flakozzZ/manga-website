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
        const {id, username, email, password, avatar} = req.body
        console.log(id+' '+username+' '+email+' '+password+' '+ avatar)
        const user = await db.query(`UPDATE users SET username=$2, email=$3, password=$4, avatar=$5 WHERE user_id = $1;`, [id, username, email, password, avatar])

        res.json(user.rows)
    }
    
    async deleteUser(req, res){
        const {id} = req.body
        console.log(id)
        const user = await db.query(`DELETE users WHERE user_id = $1;`, [id])
        
        res.json(user.rows)
    }
}

module.exports = new UserController()
