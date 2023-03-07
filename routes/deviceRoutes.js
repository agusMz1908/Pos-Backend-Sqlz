const { Router } = require('express')
const deviceController = require('../controllers/deviceController')
const router = Router()

router.post('/add', deviceController.createDevice)
// router.get('/all', locationController.getAllDevices)
// router.get('/all/:id', locationController.getDeviceById)
// router.put('/update/:id', locationController.updateDeviceById)
// router.delete('/delete/:id', locationController.deleteDeviceById)

module.exports = router