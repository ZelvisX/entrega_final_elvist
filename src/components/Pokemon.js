import React, { useState, useEffect } from "react";
import Venusaur from '../assets/images/venusaur.jpg'
import Charmeleon from '../assets/images/charmeleon.jpg'
import PokemonFragment from "./Fragments/PokemonFragment";
import Jigglypuff from '../assets/images/jigglypuff.jpg'
import HtmlFragment from "./Fragments/HtmlFragment";

const Pokemon = () => {

    return (
        <>
            <div className="container"  >
                <div className="row" >
                    <div className="alert alert-secondary" role="alert">
                        <h1>Pokedex</h1>
                        <br/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-4" >
                        <PokemonFragment  
                            textoDescripcion="The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
                            imagen={Venusaur}
                            titulo="Venusaur"
                            link="https://pokemondb.net/pokedex/venusaur"
                        />
                    </div>

                    <div className="col-4" > 
                        <PokemonFragment
                            textoDescripcion="When it swings its burning tail, it elevates the temperature to unbearably high levels."                            
                            imagen={Charmeleon}
                            titulo="Charmaleon"
                            link="https://pokemondb.net/pokedex/charmeleon"
                        />
                    </div>

                    <div className="col-4" > 
                        <PokemonFragment
                            textoDescripcion="When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep."                            
                            imagen={Jigglypuff}
                            titulo="Jigglypuff"
                            link="https://pokemondb.net/pokedex/jigglypuff"
                        />
                    </div>
                    
                </div>
                
                <HtmlFragment
                    
                    htmltextoDescripcion="La serie de videojuegos de Pokémon, son videojuegos de rol desarrollados por Game Freak y publicados para videoconsolas portátiles de Nintendo."
                />

            </div>

        </>
    )

}


export default Pokemon