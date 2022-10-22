import React from "react";
import './cardArticle.scss';

function CardArticle(){
    
    return(
        <div className="CardArticle">
            <figure className="imgCard"></figure>
            <figure className="imgData">
                <article className="containerLabel">
                    <div className="labelCard">
                        <p># INSOLITE</p>
                    </div>
                </article>
                <article className="infoCard">
                    <p>
                        Le ministre malgache des Affaires étrangères, Richard Randriamandranto a été démis de ses fonctions, le mardi 18  
                    </p>
                </article>
                <article className="containerBtnCard">
                    <button className="btnCard">Lire la suite</button>
                </article>
            </figure>

        </div>
    )
}


export default CardArticle;