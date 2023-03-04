const { Connection } = require('../models')

const createConnection = async (req, res) => {
    const { type } = req.body
    try {
        const existingConnection = await Connection.findOne({ where: { type } })
        if (existingConnection) {
            return res.status(400).json({ error: 'That type of connection alredy exists' })
        }

        const conn = await Connection.create(req.body)
        return res.status(201).json({ conn })
    } catch (error) {
        console.log(error)
    }
}

const getAllConnections = async (req, res) => {
    try {
        const conns = await Connection.findAll({})
        return res.status(201).json({ conns })
    } catch (error) {
        console.log(error)
    }
}

const getConnectionById = async (req, res) => {
    try {
        const { id } = req.params
        const conn = await Connection.findByPk(id)

        if (conn) {
            return res.status(200).json({ conn })
        }

        return res.status(404).json({ message: 'Connection with that id not exist' })
    } catch (error) {
        console.log(error)
    }
}

const updateConnectionById = async (req, res) => {
    try {
        const { id } = req.params
        const conn = await Connection.findByPk(id)

        if (!conn) {
            return res.status(404).json({ error: 'Connection with that id not exist' })
        }

        const updated = await Connection.update(req.body, { where: { id: id } })

        if (updated) {
            const updatedConn = await Connection.findOne({ where: { id: id } })
            return res.status(200).json({ connection: updatedConn })
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteConnectionById = async (req, res) => {
    try {
        const { id } = req.params
        const conn = await Connection.findByPk(id)

        if (!conn) {
            return res.status(404).json({ error: 'Connection with that id not exist' })
        }

        const deleted = await Connection.destroy({ where: { id: id } })

        if (deleted) {
            const deletedConn = await Connection.findOne({ where: { id: id } })
            return res.status(200).json({ message: 'Connection deleted' })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createConnection,
    getAllConnections,
    getConnectionById,
    updateConnectionById,
    deleteConnectionById
}