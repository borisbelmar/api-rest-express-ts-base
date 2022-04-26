import express from 'express'
import morgan from 'morgan'
import apiRoutes from './routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1', apiRoutes)

app.use((_req, res) => {
  res.status(404).json({
    message: 'Not found'
  })
})

export default app