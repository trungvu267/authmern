import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDb from './db/connect.js'
import dotenv from 'dotenv'
import route from './routes/index.js'
dotenv.config()
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use('/', route)
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}...`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()
