import "../styles/auth.css";
import logoSenaEmpresa from "../../assets/images/logoSenaEmpresa.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

export const LoginPage = () => {
  return (
    <>
      <header>
        <div className="container">
          <ul>
            <li className="logo">
              <div className="images">
                <img src={logoSenaEmpresa} alt="" />
              </div>
              <h2>
                INSITU<span>.</span>
              </h2>
            </li>
            <li>
              <Link className="nav-link">Home</Link>
            </li>
            <li>
              <Link className="nav-link">Join</Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section className="contact">
          <div className="container">
            <div className="left">
              <div className="form-wrapper">
                <div className="contact-heading">
                  <h1>
                    Inicio de Sesion <span>.</span>
                  </h1>
                  <p className="text">
                    ¡Bienvenida Lider de Talento Humano! Ingresa tus
                    credenciales para gestionar los turnos rutinarios de esta
                    semana
                  </p>
                </div>
                <form action="" className="contact-form">
                  <div className="input-wrap w-100">
                    <input
                      placeholder="Ingresa tu correo electronico"
                      type="text"
                      className="contact-input"
                      autoComplete="off"
                      name="email"
                      required={true}
                    />
                    <label htmlFor="email">Correo Electronico</label>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="input-wrap w-100">
                    <input
                      placeholder="Ingresa tu contraseña"
                      type="password"
                      className="contact-input"
                      autoComplete="off"
                      name="password"
                      required={true}
                    />
                    <label htmlFor="email">Contraseña</label>
                    <FontAwesomeIcon icon={faKey} />
                  </div>
                </form>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </section>
      </main>
    </>
  );
};
