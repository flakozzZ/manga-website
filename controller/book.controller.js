const db = require('../database/dataBase')

class BookController{
    async createBook(req, res){
        //orig_title, title, banner, cover, description, publication_year
        const {orig_title, title, banner, cover, description, publication_year } = req.body
        console.log(orig_title + ' ' + title + ' ' + banner + ' ' + cover + ' ' + description + ' '+ publication_year)

        const newBook = await db.query(`INSERT INTO books (orig_title, title, banner, cover, description, publication_year) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [orig_title, title, banner, cover, description, publication_year])

        res.json(newBook.rows)
    }   

    async getBooks(req, res){
        const book = await db.query(`SELECT * FROM books`)

        res.json(book.rows)
    }
    
    async getBook(req, res){
        const title = req.params.title
        console.log(title)
        const book = await db.query(`SELECT * FROM books WHERE title = $1`, [title])

        res.json(book.rows)
    }
    
    async updateBook(req, res){
        const id = req.params.id
        console.log(id)
        const user = await db.query(`SELECT * FROM users WHERE user_id = $1`, [id])

        res.json(user.rows)
    }
    
    async deleteBook(req, res){

    }
}

module.exports = new BookController()
