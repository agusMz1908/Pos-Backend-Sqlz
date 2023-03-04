const { Status } = require('../models')

const createStatus = async (req, res) => {
    const { name } = req.body
    try {
        const existingStatus = await Status.findOne({ where: { name } })
        if (existingLocation) {
            return res.status(400).json({ error: 'That location alredy exist' })
        }

        const sts = await Status.create(req.body)
        return res.status(201).json({ sts })
    } catch (error) {
        console.log(error)
    }
}

const getAllStatus = async (req, res) => {
    try {
        const stes = await Status.findAll({})
        return res.status(201).json({ stes })
    } catch (error) {
        console.log(error)
    }
}

const getStatusById = async (req, res) => {
    try {
        const { id } = req.params
        const sts = await Status.findByPk(id)

        if (sts) {
            return res.status(200).json({ sts })
        }

        return res.status(404).json({ message: 'Status with that id not exist' })
    } catch (error) {
        console.log(error)
    }
}

const updateStatusById = async (req, res) => {
    try {
        const { id } = req.params
        const sts = await Status.findByPk(id)

        if (!sts) {
            return res.status(404).json({ error: 'Status with that id not exist' })
        }

        const updated = await Status.update(req.body, { where: { id: id } })

        if (updated) {
            const updatedStatus = await Status.findOne({ where: { id: id } })
            return res.status(200).json({ status: updatedStatus })
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteStatusById = async (req, res) => {
    try {
        const { id } = req.params
        const sts = await Status.findByPk(id)

        if (!sts) {
            return res.stauts(404).json({ error: 'Status with that id dont exist' })
        }

        const deleted = await Status.destroy({ where: { id: id } })
        return res.status(200).json({ message: 'Status deleted' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createStatus,
    getAllStatus,
    getStatusById,
    updateStatusById,
    deleteStatusById
}