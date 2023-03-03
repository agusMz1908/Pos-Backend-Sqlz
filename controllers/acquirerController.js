const { Acquirer } = require('../models')

const createAcquirer = async (req, res) => {
    const { name } = req.body
    try {
        const existingAcquirer = await Acquirer.findOne({ where: { name } })
        if (existingAcquirer) {
            return res.status(400).json({ error: 'Acquirer with that name is alredy exist' })
        }

        const acquirer = await Acquirer.create(req.body)
        return res.status(201).json({ acquirer })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error.message })
    }
}

const getAllAcquirers = async (req, res) => {
    try {
        const acqrs = await Acquirer.findAll({})
        return res.status(200).json({ acqrs })

    } catch (error) {
        console.log(error)
    }
}

const getAcquirerById = async (req, res) => {
    try {
        const { id } = req.params
        const acqr = await Acquirer.findOne({ where: { id: id } })

        if (acqr) {
            return res.status(200).json({ acqr })
        }

        return res.status(404).send('Acquirer with that id not exist')
    } catch (error) {
        console.log(error)
    }
}

const updateAcquirerById = async (req, res) => {
    try {
        const { id } = req.params
        const acqr = await Acquirer.findByPk(id)

        if (!acqr) {
            return res.status(404).json({ error: 'Acquirer with that id not exist' })
        }

        const updated = await Acquirer.update(req.body, { where: { id: id } })

        if (updated) {
            const updatedAcqr = await Acquirer.findOne({ where: { id: id } })
            return res.status(200).json({ acquirer: updatedAcqr })
        }

    } catch (error) {
        console.log(error)
    }
}

const deleteAcquirerById = async (req, res) => {
    try {
        const { id } = req.params
        const acqr = await Acquirer.findByPk(id)

        if (!acqr) {
            return res.status(404).json({ error: 'Acquirer with that id not exist' })
        }

        const deleted = await Acquirer.destroy({ where: { id: id } })

        if (deleted) {
            const deletedAcqr = await Acquirer.findOne({ where: { id: id } })
            return res.status(200).json({ message: 'Acquirer deleted' })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createAcquirer,
    getAllAcquirers,
    getAcquirerById,
    updateAcquirerById,
    deleteAcquirerById
}
