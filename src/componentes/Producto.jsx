import React from "react";
import '../hojas-de-estilo/Producto.css'

function Producto(props) {
    return (
        <div className='contenedor-producto'>

            <img className="imagen-producto"
                src={require(`../images/images productos/bebidas/bebida-${props.img}.png`)}
                alt='Fotografia referencia Cocacola Motion' />

            <div className='contenedor-informacion'>
                <p className='nombre-producto'>
                    <strong> {props.nombre}</strong></p>
                <p className='valor-producto'>$ {props.valor}</p>
                <p className='comercio-disponible-producto'>{props.comercio}</p>
            </div>
        </div>
    );

}
export default Producto;