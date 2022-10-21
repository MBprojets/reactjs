import React from "react";
import './contact.scss';


function Contact(){
    return(
        <div className="Contact">

           <figure className="titlePamContact">
                <h1>Contact</h1>
           </figure>
           <figure className="contentContact">
            <form className="">
                <div className="containerBtnContact">
                    <input className="fieldContact" type="text" placeholder="Nom et Prénom" />
                    <input className="fieldContact" type="email"  placeholder="Email"/>
                </div>

                <div className="containerTextareaContact">
                    <textarea placeholder="ecrivez votre message"></textarea>
                </div>

                <div className="containerSubmitContact">
                    <input className="submitContact" type="submit" />
                </div>
                
            </form>
           </figure>

        </div>
    )

}


export default Contact;