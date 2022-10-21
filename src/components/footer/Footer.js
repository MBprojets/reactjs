import React from "react";
import './footer.scss'

function Footer(){
    return(
        <div className="FooterInfo">
            <article className="contentFooterInfo">
                <figure className="containerAlaune">
                    <h1>A la une</h1>
                </figure>
                <figure className="dataFooterInfo">
                    <h4> Le president ne pourra pas venir à temps pour conférence de preqse à 11h</h4>
                </figure>

            </article>

        </div>
    )
}

export default Footer;