const db = require('../database/dataBase')

class BookChapterController{
    async createBookChapter(req, res){
        const {book_id, chapter} = req.body
        console.log(book_id+' '+ chapter)

        const newBookChapter = await db.query(`INSERT INTO book_chapters (book_id, chapter) values ($1, $2) RETURNING *`, [book_id, chapter])

        res.json(newBookChapter.rows)
    }   

    async getBookChapters(req, res){
        const bookChapter = await db.query(`SELECT * FROM book_chapters`)

        res.json(bookChapter.rows)
    }   

    async getBookChaptersByBook(req, res){
        const id = req.params.id
        console.log(id)
        const bookChapter = await db.query(`SELECT * FROM book_chapters WHERE book_id = $1`, [id])

        res.json(bookChapter.rows)
    }
    
    async getBookChapter(req, res){
        const id = req.params.id
        console.log(id)
        const bookChapter = await db.query(`SELECT * FROM book_chapters WHERE book_chapter_id = $1`, [id])

        res.json(bookChapter.rows)
    }
    
    async updateBookChapter(req, res){
        const {id, username, email, password, avatar} = req.body
        console.log(id+' '+username+' '+email+' '+password+' '+ avatar)
        const bookChapter = await db.query(`UPDATE users SET username=$2, email=$3, password=$4, avatar=$5 WHERE user_id = $1;`, [id, username, email, password, avatar])

        res.json(bookChapter.rows)
    }
    
    async deleteBookChapter(req, res){
        const {id} = req.body
        console.log(id)
        const bookChapter = await db.query(`DELETE users WHERE user_id = $1;`, [id])
        
        res.json(bookChapter.rows)
    }
}

module.exports = new BookChapterController()
