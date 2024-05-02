import { Link } from 'react-router-dom'
import '../../../styles/style.css'

const Login = () => {
  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>
            SITU <span>.</span>
          </p>
        </div>
        <div className="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link to={`/`} className="link active">
                Inicio de Sesion
              </Link>
            </li>
            <li>
              <Link to={`/register`} className="link">
                Usuario Invitado
              </Link>
            </li>
            <li>
              <Link to={'https://senaempresalagranja.blogspot.com'} className="link">
                Volver al Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <header>Inicio de Sesion</header>
            <span>¡Bienvenida Lider de Talento Humano!</span>
            <span>
              Por favor Ingresa tus credenciales para gestionar los turnos rutinarios de esta semana
            </span>
          </div>
          <div className="input-box">
            <input
              type="email"
              className="input-field"
              name="email"
              autoFocus
              placeholder="Digitar Correo Electronico"
              maxLength={60}
              minLength={2}
            />
            <i className="bx bx-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              className="input-field"
              name="password"
              maxLength={30}
              min={4}
              placeholder="Digitar Contraseña"
            />
            <i className="bx bx-lock-alt"></i>
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Iniciar Sesion" />
          </div>
          <div className="two-col">
            <div className="two">
              <label>
                <Link to={`/verify-password`}>Olvidaste Tu contraseña?</Link>
              </label>
            </div>
            <div className="two links-sm">
              <label>
                <Link to={`/`}>Usuario Invitado</Link>
              </label>
            </div>
            <div className="two links-sm">
              <label>
                <Link to={`/`}>Volver al blog</Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
