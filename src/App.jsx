import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import CartContent from './components/CartContent/CartContent';
import CreateProduct from './components/ProductsModel/CreateProduct';
import ListProducts from './components/ProductsModel/ListProducts';
import EditProduct from './components/ProductsModel/EditProduct'
import Register from './components/Register/Register'
import UserList from './components/Register/UserList';
import EditUser from './components/Register/EditUser';
import Navbar from './components/Navbar/Navbar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/bit02spa' element={<Home />} />
          <Route path='/bit02spa/cart' element={<CartContent />} />
          <Route path='/bit02spa/create-user' element={<Register />} />
          <Route path='/bit02spa/list-users' element={<UserList />} />
          <Route path='/bit02spa/edit-user/:id' element={<EditUser />} />
          <Route path='/bit02spa/create-product' element={<CreateProduct />} />
          <Route path='/bit02spa/edit-product/:id' element={<EditProduct />} />
          <Route path='/bit02spa/list-products' element={<ListProducts />} />
        </Routes>
      </BrowserRouter>
    )
  }

}

export default App;
