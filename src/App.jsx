
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import StudentDetails from './Pages/StudentDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/details' element={<StudentDetails/>}/>



    </Routes>
    
    </>
  )
}

export default App
