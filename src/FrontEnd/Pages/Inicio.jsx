import "../Style/Inicio.css"
import Nav from "../Components/Nav.jsx"
import Muestra from "../Components/Muestra.jsx"
import Portada2 from "../Image/Portada2.webp"

function Inicio(){
    return(
        <>
            <div className="contenedor-inicio">
                <div className="portada">
                    <Nav/>
                    <img src={Portada2} alt="Portada" className="imagen-portada" />
                </div>
                <div className="coleccion-publicado">
                    <h1 className="title">Publicaciones</h1>
                    <div className="contenedor-publicacion">
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                        <Muestra/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio;