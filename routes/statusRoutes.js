const { Router } = require('express')
const statusController = require('../controllers/statusController')
const router = Router()

router.post('/add', statusController.createStatus)
router.get('/all', statusController.getAllStatus)
router.get('/all/:id', statusController.getStatusById)
router.put('/update/:id', statusController.updateStatusById)
router.delete('/delete/:id', statusController.deleteStatusById)

module.exports = router