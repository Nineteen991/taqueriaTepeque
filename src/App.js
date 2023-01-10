import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './routes/HomePage'
import ErrorPage from './routes/ErrorPage'
import Menu from './routes/Menu'
import { useOpenFood } from './Hooks/useOpenFood'
import './App.css'

export default function App() {
  const openFood = useOpenFood()
  
  return (
    <div className='container'>
      <Navbar />
      
      <Routes>
        <Route exact path='/' element={ <HomePage /> } />
        <Route 
          exact path='/menu' 
          element={ <Menu { ...openFood } /> }
        />
        <Route path='/*' element={ <ErrorPage /> } />
      </Routes>
      
    </div>
  )
}