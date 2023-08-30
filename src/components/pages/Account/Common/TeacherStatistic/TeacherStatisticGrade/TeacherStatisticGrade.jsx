import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import "./TeacherStatisticGrade.scss"
import TeacherStatisticGradeCard from "./TeacherStatisticGradeCard";
const TeacherStatisticGrade = () => {

    const [iconsData, setIconsData] = useState([]);
    useEffect(() => {
      axios
        .get('http://bebest.pp.ua/api/teachers-grades/?populate=*')
        .then((response) => {
            console.log(response.data.data)
            setIconsData(response.data.data);
        })
        .catch((error) => {
          console.error('Error fetching data', error);
        });
    }, []);
    return ( 
        <div className="teacher-stat-grade">
            <h3 className="teacher-stat-grade__title">Оценки учеников</h3>

            <div className="teacher-stat-grade__icons">
            {
                iconsData.map((icons,color)=>(
                    <TeacherStatisticGradeCard key={icons.id}
                    icon={`http://bebest.pp.ua${icons.attributes.icon.data.attributes.url}`}
                    descr={icons.attributes.description}
                    counter={icons.attributes.counter}
                    
                    />
                ))
            }
            </div>  
        </div>
     );
}
 
export default TeacherStatisticGrade;

