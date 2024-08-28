import Portada from "../Image/Portada.jpeg"
function Muestra(){
    return(
        <>
            <div className="contenedor-Muestra">
                <img src={Portada} className="img-Muestra" alt="Portada-{props.title}"  />
                <a href="#">Aqui ira el nombre del proyecto</a>
            </div>
        </>
    )
}

export default Muestra;