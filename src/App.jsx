
import './App.css'
import Header from './Components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import View from './Pages/View'
import Home from './Pages/Home'
import Add from './Pages/Add'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/view/:id' element={<View/>}></Route>
        <Route path='/add' element={<Add/>}></Route>

        <Route path='/*' element={<Navigate to ={'/'}/>}/>

      </Routes>
    </>
  )
}

export default App
