import logoSenaEmpresa from "../../assets/images/logoSenaEmpresa.png";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="container d-flex flex-column">
      <div
        className="row align-items-center justify-content-center g-0
        min-vh-100"
      >
        <nav className="nav">
          <div className="nav-logo">
            <p>INSITU</p>
          </div>
          <div className="nav-menu" id="navMenu">
            <ul>
              <li>
                <Link href="#" className="link">
                  Usuario Invitado
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-menu-btn">
            <i className="bx bx-menu" onclick="myMenuFunction()"></i>
          </div>
        </nav>
        <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
          <div className="card smooth-shadow-md">
            <div className="card-body p-6">
              <div className="mb-4 text-center">
                <img
                  src={logoSenaEmpresa}
                  className="mb-2"
                  alt=""
                  width={100}
                />

                <h1 className="h1 text-center">Inicio de Sesion</h1>
                <p className="text-center">¡Hola Lider de Talento Humano!</p>
                <p className="text-center">
                  Por favor ingresa tus credenciales para programar los turnos
                  de esta semana.
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="Ingresa tu correo electronico"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    required=""
                  />
                </div>

                <div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Iniciar Sesion
                    </button>
                  </div>
                  <div className="d-md-flex text-center mt-4">
                    <div>
                      <Link
                        to={"change-password"}
                        className="text-inherit
                        fs-5"
                      >
                        ¿Olvidaste Tu Contraseña?
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
