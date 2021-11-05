const express = require('express')
const cors = require('cors')
//const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//conexao com bancod e dados
db.connect()

//habilita o CORS - api fica publica
app.use(cors())

//habilita serve para receber dados json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listenind on port ${port}`))
