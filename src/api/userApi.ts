import * as request from '../service/axios.service'

type SignUp = {
  name: string
  email: string
  password: string
}
const getUsers = () => {
  return request.get('')
}
const signUp = (data: SignUp) => {
  return request.post('/auth/sign-up', data)
}
export { getUsers, signUp }
