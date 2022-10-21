import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './navigation.scss';
import Logo from '../../assets/logoPam.svg';


function Navigation(){
    return(
        <div className="Navigation">
            <article className='containerLogo'>
                <motion.img className='logo' src={Logo} alt="" animate={{}} transition={{}}/>
            </article>
            <nav className="navbar">

                <div className="bar">
                    <Link className="navBtn" to={'/'}>Accueil</Link>
                    <Link className="navBtn" to={'actualite'}>Actualité</Link>
                    <Link className="navBtn" to={'./production'}>PamProd</Link>
                    <Link className="navBtn" to={'./contact'}>Contact</Link>
                </div>
            </nav>

        </div>
    )
}

export default Navigation;