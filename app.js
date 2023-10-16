const express = require('express')
const fs = require('fs')

const app = express()
const PORT = 1999

const DB_FILE = './data.json'

// req.body parser
app.use(express.json())


app.get('/user', (req, res) => {
    fs.readFile(DB_FILE, (err, data) => {
        if (err) {
            return res.status(500).send('Error membaca data')
        }
        const users = JSON.parse(data)
        res.json(users)
    })
})


app.post('/user', (req, res) => {
    fs.readFile(DB_FILE, (err, data) => {
        
        if (err) {
            return res.status(500).send('Error membaca data')
        }

        const users = JSON.parse(data)
        const newUser = req.body
        
        newUser.id = users.length > 0 ? users.length + 1 : 1
        users.push(newUser)
        
        fs.writeFile(DB_FILE, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error menulis data')
            }
            res.status(201).json(newUser)
        })
    })
})

app.listen(PORT, () => {
    console.log(`Menjalankan server :  ${PORT}`)
})
