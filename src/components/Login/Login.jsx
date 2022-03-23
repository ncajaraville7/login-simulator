import React, { useState } from 'react';

import './Login.css';

import logo from '../../assets/logo.png';
import pizza from '../../assets/pizza.png';

import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import Error from '../Alerts/Error';
import Success from '../Alerts/Success';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [alertError, setAlertError] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !password) {
      setAlertError(true);
      setTimeout(() => {
        setAlertError(false);
      }, 3000);
    } else {
      setAlertSuccess(true);
      setTimeout(() => {
        setAlertSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className="login">
      <div className="login__background">
        <img src={pizza} alt="pizza" />
      </div>
      <div className="login__contain">
        <img src={logo} alt="logo" />
        <div className="login__contain__text">
          <h2>Bienvenido</h2>
          <p>A las mejores pizzas del país</p>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form__input-group">
            <input
              type="email"
              placeholder="Ingrese su correo"
              name="email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <FaUserAlt />
          </div>
          {alertError && <Error>Debes completar todos los campos</Error>}
          {alertSuccess && <Success>Usuario logueado correctamente</Success>}
          <div className="login__form__input-group">
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock />
          </div>
          <h3>¿Olvidaste tu contraseña?</h3>
          <button className="login__form__btn">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
