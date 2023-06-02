import React, { Component } from 'react'
import './Register.css'
import axios from "axios";
import Swal from 'sweetalert2'
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';




export default class Register extends Component {
  state = {
    users: [],
    name: '',
    surname: '',
    email: '',
    password: ''

  }
  async componentDidMount() {
    this.getUsers()
  }

  

  onSubmit = async (e) => {
    const navigate = useNavigate()
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      password: await this.encrypt(this.state.password)
    }
    if (!newUser.name && newUser.surname && newUser.email && newUser.password) {
      Swal.fire({
        icon: 'warning',
        title: 'Completa la información',
        text: 'Todos los datos son obligatorios',
      })
    } else {
      await axios.post('http://localhost:4000/api/users', newUser)
      this.setState({ id: '', name: '', surname: '', email: '', password: '' })
      this.getUsers();
      localStorage.setItem('token',JSON.stringify(newUser))
      navigate('/')
    }

  }

  async encrypt(password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (error) {
      console.error('Error encriptando contraseña', error)
    }
  }

  getUsers = async () => {
    const res = await axios('http://localhost:4000/api/users')
    this.setState({ users: res.data });
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  }
  onChangeSurname = (e) => {
    this.setState({ surname: e.target.value });
  }
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="col-md-4 left">
            <div className="card card-body">
              <form onSubmit={this.onSubmit}>
                <h3>Crear nuevo Usuario</h3>
                <div className="form-group">
                  <label>NOMBRE</label>
                  <input type="text" className='form-control'
                    required="True"
                    onChange={this.onChangeName}
                    value={this.state.name} />
                </div>
                <div className="form-group">
                  <label>APELLIDO</label>
                  <input type="text" className='form-control'
                    required="True"
                    onChange={this.onChangeSurname}
                    value={this.state.surname} />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input type="email" className='form-control'
                    required
                    onChange={this.onChangeEmail}
                    value={this.state.email} />
                </div>
                <div className="form-group">
                  <label>CONTRASEÑA</label>
                  <input type="password" className='form-control'
                    required
                    autoComplete='false'
                    onChange={this.onChangePassword}
                    value={this.state.password} />
                </div>
                <button type="submit" className="btn btn-primary">
                  GUARDAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}