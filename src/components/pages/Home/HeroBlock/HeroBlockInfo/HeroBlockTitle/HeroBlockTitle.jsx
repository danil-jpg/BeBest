import React from "react";
import "./HeroBlockTitle.scss"

const HeroBlockTitle = ({preTitle, accent, postTitle}) => {
    return ( 
        <h1 className="hero-title">{preTitle} <br /> <span className="hero-title__accent">{accent}</span> <br /> {postTitle}</h1>
     );
}
 
export default HeroBlockTitle;