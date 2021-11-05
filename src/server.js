const express = require('express')
//const path = require('path')

//const db = require('./databade')
const routes = require('./routes/routes')

const app = express()

//conexao com bancod e dados
//db.connect()

//habilita server para receber dados via post(formulario)
app.use(express.urlencoded({ extended: true}))

//definindo as rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is listenind on port ${port}`))
