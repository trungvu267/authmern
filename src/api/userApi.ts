import * as request from '../service/axios.service'

type SignUp = {
  name: string
  email: string
  password: string
}
interface SignIn {
  email: string
  password: string
}
const getUsers = () => {
  return request.get('')
}

const signUp = (data: SignUp) => {
  return request.post('/auth/sign-up', data)
}
const signIn = (data: SignIn) => {
  return request.post('/auth/sign-in', data)
}
const getData = () => {
  return request.get('/dashboard')
}
export { getUsers, signUp, getData, signIn }
