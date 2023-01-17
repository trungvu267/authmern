import { Router } from 'express'
import { register, login } from '../controllers/auth.controller.js'
const route = Router()
route.post('/sign-up', register)
route.post('/sign-in', login)

export default route
