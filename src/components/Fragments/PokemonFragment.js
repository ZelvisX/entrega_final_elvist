import React, {useState,useEffect} from "react";

const PokemonFragment = ({imagen,titulo,textoDescripcion,link}) =>{

    return(
        <>

            <div className="card" style={{width: "18rem"}}>
                <img src={imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{textoDescripcion}</p>
                    <a href={link} class="btn btn-primary">Ver mas detalles</a>

                </div>
            </div>    

        </>
    )
}

export default PokemonFragment