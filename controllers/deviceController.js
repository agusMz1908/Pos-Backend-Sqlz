const { Device } = require('../models')
const { Acquirer } = require('../models')
const { Connection } = require('../models')
const { Location } = require('../models')
const { Modelo } = require('../models')
const { Status } = require('../models')

const createDevice = async (req, res, next) => {
    try {
        const { serialNumber, partNumber, acquirerName, connectionType, locationName, modelName, statusName, remarks } = req.body

        const acqr = await Acquirer.findOne({
            where: { name: acquirerName }
        })

        const conn = await Connection.findOne({
            where: { type: connectionType }
        })

        const lcn = await Location.findOne({
            where: { name: locationName }
        })

        const model = await Modelo.findOne({
            where: { name: modelName }
        })

        const sts = await Status.findOne({
            where: { name: statusName }
        })

        const dev = await Device.create({
            serialNumber,
            partNumber,
            acquirerID: acqr.id,
            connectionID: conn.id,
            locationID: lcn.id,
            modelID: model.id,
            statusID: sts.id,
            remarks
        })

        res.status(201).json({
            success: true,
            message: 'Device created successfully',
            data: dev
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createDevice
}
