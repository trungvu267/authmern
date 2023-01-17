import { Router as ExpressRouter } from 'express'
import dashboard from './main.router.js'
import auth from './auth.router.js'
import authentication from '../middlewares/auth.js'
const Router = ExpressRouter()
Router.get('/', (req, res) => {
  res.json({ msg: '🚀 Hello Server' })
})
Router.use('/auth', auth)
Router.use('/', authentication, dashboard)
export default Router
