const { Router } = require('express')
const connectionController = require('../controllers/connectionController')
const router = Router()

router.post('/add', connectionController.createConnection)
router.get('/all', connectionController.getAllConnections)
router.get('/all/:id', connectionController.getConnectionById)
router.put('/update/:id', connectionController.updateConnectionById)
router.delete('/delete/:id', connectionController.deleteConnectionById)

module.exports = router