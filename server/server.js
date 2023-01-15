import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import connectDb from './db/connect.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('🚀 Hello World!')
})

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
