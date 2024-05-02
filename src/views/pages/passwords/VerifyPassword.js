import { Link } from 'react-router-dom'
import '../../../styles/style.css'

const VerifyPassword = () => {
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
              <Link to={`/verify-password`} className="link active">
                Olvide mi Contraseña
              </Link>
            </li>
            <li>
              <Link to={`/login`} className="link">
                Iniciar Sesion
              </Link>
            </li>
            <li>
              <Link to={`/`} className="link">
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
            <header>Olvide mi Contraseña</header>
            <span>¡Bienvenida Lider de Talento Humano!</span>
            <span>
              Para realizar recuperacion de tu contraseña por favor ingresa tu correo electronico
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
            <input type="submit" className="submit" value="Verificar" />
          </div>
          <div className="two-col">
            <div className="two">
              <label>
                <Link to={`/login`}>Iniciar Sesion</Link>
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

export default VerifyPassword
