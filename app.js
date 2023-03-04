const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()
const acquirerRoutes = require('./routes/acquirerRoutes')
const connectionRoutes = require('./routes/connectionRoutes')
const locationRoutes = require('./routes/locationRoutes')
const modelsRoutes = require('./routes/modeloRoutes')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const port = process.env.APP_PORT

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})

app.use('/api/acquirer', acquirerRoutes)
app.use('/api/connection', connectionRoutes)
app.use('/api/location', locationRoutes)
app.use('/api/models', modelsRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'Servidor Corriendo' })
})
