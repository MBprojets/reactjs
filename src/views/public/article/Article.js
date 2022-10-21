import React from "react";
import cardArticle from '../../../components/cardArticle/CardArticle'
import './article.scss';

function Article(){
    
    return(
        <div className="Article">

            <figure className="titleArticle">
                <h1>Article</h1>
            </figure>
            <figure className="contentArticle">
                <cardArticle/>
            </figure>

        </div>
    )
}

export default Article;