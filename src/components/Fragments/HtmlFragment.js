import React, {useState,useEffect} from "react";


const HtmlFragment = ({htmltextoDescripcion}) =>{

    return(
        <>
            <div className="row" >
                <div class="alert alert-primary" role="alert">
                    <h2>{htmltextoDescripcion}</h2>
                </div>
            </div>
        </>
    )
}

export default HtmlFragment