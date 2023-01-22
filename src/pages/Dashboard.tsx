import { useEffect } from 'react'
import '../App.css'
import { getData } from '../api/userApi'
const Dashboard = () => {
  useEffect(() => {
    getData()
  }, [])
  return <div className="flex">🚀 Dashboard</div>
}

export default Dashboard
