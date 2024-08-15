

function LoginForm(){
    return(
        <>
        <div className="texto">
                        <h1 className="title">Login</h1>
                        <p className="text">Bienvenido a CastleBlog</p>

                    </div>
                    <form action="">
                        <label htmlFor="name" className="name">Nombre</label>
                        <input type="name" className="name" id="name" />
                        <label htmlFor="phone" className="phone">Phone</label>
                        <input type="phone" className="phone" id="phone" />
                        <label htmlFor="email" className="email">Email</label>
                        <input type="email" className="email" id="email" />
                        <label htmlFor="password" className="contraseña">Contraseña</label>
                        <input type="password" className="password" id="password" />
                        <button className="enviar">Ingresar</button>
                    </form>
        </>
    )
}

export default LoginForm;