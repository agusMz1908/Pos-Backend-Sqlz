const { Router } = require('express')
const { ModuleNode } = require('vite')
const modeloController = require('../controllers/modeloController')
const router = Router()

router.post('/add', modeloController.createModel)
router.get('/all', modeloController.getAllModels)
router.get('/all/:id', modeloController.getModelById)
router.put('/update/:id', modeloController.updateModelById)
router.delete('/delete/:id', modeloController.deleteModelById)

module.exports = router