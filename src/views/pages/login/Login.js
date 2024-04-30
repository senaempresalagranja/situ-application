import './style.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div class="wrapper">
      <nav class="nav">
        <div class="nav-logo">
          <p>
            INSITU <span>.</span>
          </p>
        </div>
        <div class="nav-menu" id="navMenu">
          <ul>
            <li>
              <Link to={`/`} class="link active">
                Inicio de Sesion
              </Link>
            </li>
            <li>
              <Link to={`/register`} class="link">
                Usuario Invitado
              </Link>
            </li>
            <li>
              <Link to={`/`} class="link">
                Volver al Blog
              </Link>
            </li>
          </ul>
        </div>
        <div class="nav-menu-btn">
          <i class="bx bx-menu" onclick="myMenuFunction()"></i>
        </div>
      </nav>
      <div class="form-box">
        <div class="login-container" id="login">
          <div class="top">
            <span>
              Don't have an account?{' '}
              <a href="#" onclick="register()">
                Sign Up
              </a>
            </span>
            <header>Login</header>
          </div>
          <div class="input-box">
            <input type="text" class="input-field" placeholder="Username or Email" />
            <i class="bx bx-user"></i>
          </div>
          <div class="input-box">
            <input type="password" class="input-field" placeholder="Password" />
            <i class="bx bx-lock-alt"></i>
          </div>
          <div class="input-box">
            <input type="submit" class="submit" value="Sign In" />
          </div>
          <div class="two-col">
            <div class="one">
              <input type="checkbox" id="login-check" />
              <label for="login-check"> Remember Me</label>
            </div>
            <div class="two">
              <label>
                <a href="#">Forgot password?</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
