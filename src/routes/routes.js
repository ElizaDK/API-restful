const router = require('express').Router()


//VERBOS HTTP(4 tipos)
//get - obter dados
//post - cliente envia / servidor recebe dados
//put - atualizar dados
//delete - deletar dados





const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
//router.post('/products', ProductController.post)
//router.put('/products/:id', ProductController.put)
//router.delete('/products/:id', ProductController.delete)

module.exports = router