import React from "react";
import "./PortfolioCard.scss"

const PortfolioCard = (data) => {
  const {title, img, description, link, position} = data.data;

console.log(position);

return(
    data &&(
        <article className={`box-portfolio ${position === 'left' ? 'box-portfolio-left' : 'box-portfolio-right'}`}>
            <div className="box-portfolio-description">
                <h3>{ title }</h3>
                <p>{ description }</p>
                <a href={link} target="blank"><button>Discover</button> </a>
            </div>
            <img src={`/assets/${img}`} alt={title} />
        </article> 
        
    )
    )
                
            
} 

export default PortfolioCard;