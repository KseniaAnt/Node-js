const express = require('express')

const app = express()

app.set('view engine', 'html')
app.use(express.static('views/public'))

app.get('/', (req, res) => {
    res.render('index')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)
})