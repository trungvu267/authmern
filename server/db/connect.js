import mongoose from 'mongoose'
mongoose.set('strictQuery', true)
const connectDb = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log('Connected to the db...'))
    .catch((err) => console.log(err))
}
export default connectDb
