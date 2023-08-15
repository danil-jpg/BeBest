import React from "react";
import "./Partners.scss"
import Title from "../../../UI/Title/Title";
import img from "../../../../assets/images/main/partners.png"
import Picture from "../../../UI/Picture/Picture";
const Partners = () => {
    return ( 
        <div className="home-partners">
            <div className="home-partners__title">
                <Title children={'Нам доверяют'}/>
            </div>
        <div className="home-partners__image">
            <Picture img={img}/>
            <Picture img={img}/>
            <Picture img={img}/>
            <Picture img={img}/>
        </div>
        </div>
     );
}
 
export default Partners;