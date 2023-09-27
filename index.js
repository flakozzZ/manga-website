const express = require("express")
const userRouter = require('./routes/user.routes')
const bookRouter = require('./routes/book.routes')
const corsMiddleware = require('./middleware/cors.middleware')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
app.use('/api/users', userRouter)
app.use('/api/books', bookRouter)

app.listen(PORT, () => console.log(`server started on Port ${PORT}`))
