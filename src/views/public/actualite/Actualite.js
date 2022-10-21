import React from "react";
import './actualite.scss'
import PolitiIcon from './img/politic-icon.svg';


function Actualite(){
    return(
        <div className="Actualite">

            <article className="titleActualite">
                <p>Je vous presente bla bla blabl abl bla</p>
            </article>

            <article className="contentActualite">

                <figure className="contCircle social">
                    SOCIAL
                </figure>

                <figure className="contCircle politique">
                    <img src={PolitiIcon}></img>
                    <h5>POLITIQUE</h5>
                </figure>

                <figure className="contCircle santé">
                    SANTE
                </figure>

            </article>

        </div>
    )
}

export default Actualite;