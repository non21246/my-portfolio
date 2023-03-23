const express = require('express')
const app = express()
const port = 3000
const db = require('./app/models')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

var corsOptions = {
    origin: 'http://localhost'
}

app.use(cors(corsOptions))

db.mongoose.connect(db.url, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
.then(() => {
    console.log('Connected to the database!')
})
.catch(err => {
    console.log('Cannot connect to the database!', err)
})

require('./app/routes/port.routes')(app)

app.listen(port, () => {
    console.log (`Server started on port ${port}`)
})