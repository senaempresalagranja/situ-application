import "../styles/auth.css";
import logoSenaEmpresa from "../../assets/images/logoSenaEmpresa.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

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
              <Link className="nav-link">Invitado</Link>
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
                    <label htmlFor="email">
                      <FontAwesomeIcon icon={faIdCard} className="icon" />{" "}
                      Correo Electronico
                    </label>
                    <input
                      type="text"
                      className="contact-input"
                      autoComplete="off"
                      name="email"
                      required={true}
                    />
                  </div>
                  <div className="input-wrap w-100">
                    <label htmlFor="password">
                      {" "}
                      <FontAwesomeIcon icon={faLock} className="icon" />{" "}
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="contact-input"
                      autoComplete="off"
                      name="password"
                      required={true}
                    />
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
