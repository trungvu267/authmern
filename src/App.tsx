import { useEffect } from 'react'
import { getUsers } from './api/userApi'
import './index.css'
const App = () => {
  useEffect(() => {
    console.log('run')
    getUsers()
  }, [])
  return <div>App</div>
}

export default App
