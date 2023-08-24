import React from "react";
import "./HomeTeachers.scss"
import Title from "../../../UI/Title/Title";
import { IconRenderer } from "../../../UI/IconRenderer/IconRenderer";
import HomeTeachersSlider from "./HomeTeachersSlider/HomeTeachersSlider";
import ContainerMain from "../../../common/ContainerMain/ContainerMain";
import Picture from "../../../UI/Picture/Picture";
import img from "../../../../assets/images/main/teacher-1.png"
const HomeTeachers = () => {
    return ( 
        <div className="home-teachers">
            <ContainerMain>
            <div className="home-teachers__title">
            <Title className="home-teachers__title" children={"Преподаватели"}/>
            </div>
            </ContainerMain>
           <HomeTeachersSlider/>
            <Picture className="home-teachers__image" img={img}/>
            </div>
     );
}
 
export default HomeTeachers;