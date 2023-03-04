const { Modelo } = require('../models')

const createModel = async (req, res) => {
    const { name } = req.body
    try {
        const existingModelo = await Modelo.findOne({ where: { name } })
        if (existingModelo) {
            return res.status(400).json({ error: 'That model alredy exist' })
        }

        const location = await Modelo.create(req.body)
        return res.status(201).json({ location })
    } catch (error) {
        console.log(error)
    }
}

const getAllModels = async (req, res) => {
    try {
        const mdls = await Modelo.findAll({})
        return res.status(201).json({ mdls })
    } catch (error) {
        console.log(error)
    }
}

const getModelById = async (req, res) => {
    try {
        const { id } = req.params
        const mdl = await Modelo.findByPk(id)

        if (mdls) {
            return res.status(200).json({ mdl })
        }

        return res.status(404).json({ message: 'Model with that id not exist' })
    } catch (error) {
        console.log(error)
    }
}

const updateModelById = async (req, res) => {
    try {
        const { id } = req.params
        const mdl = await Modelo.findByPk(id)

        if (!mdl) {
            return res.status(404).json({ error: 'Model with that id not exist' })
        }

        const updated = await Modelo.update(req.body, { where: { id: id } })

        if (updated) {
            const updatedModel = await Modelo.findOne({ where: { id: id } })
            return res.status(200).json({ model: updatedModel })
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteModelById = async (req, res) => {
    try {
        const { id } = req.params
        const mdl = await Modelo.findByPk(id)

        if (!mdl) {
            return res.stauts(404).json({ error: 'Model with that id dont exist' })
        }

        const deleted = await Modelo.destroy({ where: { id: id } })
        return res.status(200).json({ message: 'Model deleted' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createModel,
    getAllModels,
    getModelById,
    updateModelById,
    deleteModelById
}
