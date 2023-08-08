import React from "react";
import "./HeroBlock.scss"
import HeroBlockInfo from "./HeroBlockInfo/HeroBlockInfo";
const HeroBlock = () => {
    return ( 
        <div className="main-hero">

        <div className="main-hero__information">
            <HeroBlockInfo/>            
        </div>
        </div>
     );
}
 
export default HeroBlock;