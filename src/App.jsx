import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create'
import UpdateData  from './components/UpdateData'
import CreateStudent from './components/practice/CreateStudent'
import Read from './components/Read'

import FetchDataForm from './newapproach/GetData'
import EditData from './newapproach/EditData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route path='/' element={<CreateStudent/>}/> */}
        {/* <Route path='/create' element={<Create/>}/>
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<UpdateData/>}/> */}
          

          <Route path='/' element={<FetchDataForm/>}/>
          <Route path='/update/:id' element={<EditData/>}/>
          <Route path='/create' element={<Create/>}/>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App