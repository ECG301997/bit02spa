import './Navbar.css';
import { Link } from 'react-router-dom';
import TotalItems from '../CartContent/TotalItems';
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className="nav-container">
        <nav className="navbar">
        <Link  className="navbar-text" to='/bit02spa/'>Inicio</Link>
        <Link className="navbar-text" to='/bit02spa/create-user'>Registrar Usuario</Link>
        <Link className="navbar-text" to='/bit02spa/list-users'>Lista de Usuarios</Link>
        <Link className="navbar-text" to='/bit02spa/create-product'>Crear Producto</Link>
        <Link className="navbar-text" to='/bit02spa/list-products'>Lista de Productos</Link>
        <Link className="seeCarrito" to='/bit02spa/cart'>🛒
        {cart.length >0 ? <TotalItems/> : null}
        </Link> 
        </nav>
    </div>
  )
}

export default Navbar
