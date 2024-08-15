function RegisterForm(){
    return(
        <>
        <div className="texto">
                        <h1 className="title">Register</h1>
                        <p className="text">Bienvenido de vuelta a CastleBlog</p>

                    </div>
                    <form action="">
                        <label htmlFor="email" className="email">Email</label>
                        <input type="email" className="email" id="email" />
                        <label htmlFor="password" className="contraseña">Contraseña</label>
                        <input type="password" className="password" id="password" />
                        <button className="enviar">Ingresar</button>
                    </form>
        </>
    )
}

export default RegisterForm;