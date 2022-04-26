import { Router } from 'express'
import healthRoutes from './healthRoutes'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)

export default apiRoutes
