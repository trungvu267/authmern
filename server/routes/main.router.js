import { Router } from 'express'
import { dashboard } from '../controllers/main.controller.js'
const route = Router()
route.get('/dashboard', dashboard)
export default route
