import React from "react";
import "./404.scss"
import ContainerMain from "../../../common/ContainerMain/ContainerMain";
import bgImg from "../../../../assets/images/404/bg.png"
import errorImg from "../../../../assets/images/404/img1.png"
import catImage from "../../../../assets/images/404/cat-2.svg"
import rightPaw from "../../../../assets/images/404/right-paw.svg"
import leftPaw from "../../../../assets/images/404/left-paw.svg"
import clewImg from "../../../../assets/images/404/clew.svg"
import heartIcon from "../../../../assets/images/404/heartIcon.svg"
import smallHeart from "../../../../assets/images/404/smallHeart.svg"
import MainButton from "../../../UI/Buttons/MainButton/MainButton";
const Error = () => {
    return ( 
        <ContainerMain>
            <div className="main-error">
                <div className="main-error__info">
                    <h1 className="main-error__info-title">Увы, страница не найдена</h1>
                    <p className="main-error__info-description">Погладьте пока котика или перейдите на главную.</p>
                </div>
                <div className="main-error__image">
                <img src={bgImg} className="main-error__image-bg"></img>
                    <img className="main-error__image-img" src={errorImg} alt="" />
                    <img src={catImage} alt="" className="main-error__image-cat" />
                    <img src={rightPaw} alt="" className="main-error__image-paw paw-right" />
                    <img src={leftPaw} alt="" className="main-error__image-paw paw-left" />
                    <img className="main-error__image-clew" src={clewImg} alt="" />
                    <img className="main-error__image-heart" src={heartIcon} alt="" />
                    <img className="main-error__image-heart-small" src={smallHeart} alt="" />
                </div>
                <div className="main-error__btn">
                    <MainButton children={'Перейти на главную'}/>
                </div>
            </div>
            
        </ContainerMain>
     );
}
 
export default Error;