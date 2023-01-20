import axios from 'axios'
const request = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
  },
})
type DataResponse = {
  msg: string
}
async function get(url: string, params?: any) {
  try {
    const { data, status } = await request.get<DataResponse>(url, params)

    console.log(JSON.stringify(data, null, 4))

    // 👇️ "response status is: 200"
    console.log('response status is: ', status)

    return data
  } catch (error) {
    console.log(error)
  }
}
async function post(url: string, params?: any) {
  try {
    const { data, status } = await request.post<DataResponse>(url, params)

    console.log(JSON.stringify(data, null, 4))

    // 👇️ "response status is: 200"
    console.log('response status is: ', status)

    return data
  } catch (error) {
    console.log(error)
  }
}
export { get, post }
export default request
