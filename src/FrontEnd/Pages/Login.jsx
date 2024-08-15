import "../Style/Login.css"
import React, { useState } from "react";
import LoginForm from "../Components/Login-form.jsx"
import RegisterForm from "../Components/Register-form.jsx"
import blog from "../Image/blog-representacion.png"

function Login(){
    // Estado para manejar el formulario visible
    const [isLogin, setIsLogin] = useState(true);

    // Funciones para cambiar el estado
    const showLoginForm = () => setIsLogin(true);
    const showRegisterForm = () => setIsLogin(false);

    return(
        <div className="contenedor-principal">
            <div className="contenedor-Login-Formulario">
                <div className="Imagen">
                    <img src={blog} alt="imagen-blog" />
                </div>
                <div className="Formulario">
                    <div className="nav">
                        <ul className="nav-inicio">
                            <li><a href="#" onClick={showLoginForm} className={isLogin ? "active" : ""}>Login</a></li>
                            <li><a href="#" onClick={showRegisterForm} className={!isLogin ? "active" : ""}>Registro</a></li>
                        </ul>
                    </div>

                    {isLogin ? <LoginForm/>:<RegisterForm/>}
                </div>
            </div>
        </div>
    )

}

export default Login;
