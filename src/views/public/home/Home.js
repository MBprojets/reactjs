import React from 'react';
import CardArticle from '../../../components/cardArticle/CardArticle';
import './home.scss';


function Home(){

    return(
        <div className='Home'>
            <article className='HomeUp'>

            </article>
            <article className='containerLastArticle'>
                <figure className='titleLastArticle'>
                    <h1>DERNIERS ARTICLES</h1>
                </figure>
                <figure className='contentLastArticle'>
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                </figure>
            </article>

                <div className='space'></div>

            <article className='containerSocialHome'>
                <figure className='titleSocialtArticle'>
                    <h1>SOCIAL</h1>
                </figure>
                <figure className='contentLastArticle'>
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                </figure>
            </article>

                <div className='space'></div>
                
            <article className='containerPolitiqueHome'>
                <figure className='titlePolitiquetArticle'>
                    <h1>POLITIQUE</h1>
                </figure>
                <figure className='contentLastArticle'>
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                </figure>
            </article>
        </div>
    )

}

export default Home;