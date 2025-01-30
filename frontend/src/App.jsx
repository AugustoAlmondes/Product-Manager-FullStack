import './App.css'
import AddProducts from './pages/AddProduct/AddProducts'
import Products from './pages/Products/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateProducts from './pages/UpdateProducts/UpdateProducts'

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/add' element={<AddProducts />} />
            <Route path='/update/:id' element={<UpdateProducts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App