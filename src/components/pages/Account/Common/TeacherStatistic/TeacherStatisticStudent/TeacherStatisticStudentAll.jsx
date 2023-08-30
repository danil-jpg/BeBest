import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import TeacherStatisticStudent from './TeacherStatisticStudent';
import './TeacherStatisticStudent.scss';
const TeacherStatisticStudentAll = () => {
  const [studentData, setstudentData] = useState([]);
  useEffect(() => {
    axios
      .get('http://bebest.pp.ua/api/teachers-stat-students/?populate=*')
      .then((response) => {
        setstudentData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);

  return (
    <div className="statistiscs-wrapper__student-flex">
      {studentData.map((student) => (
        <TeacherStatisticStudent
          key={student.id}
          avatar={`http://bebest.pp.ua${student.attributes.avatar.data.attributes.url}`}
          name={student.attributes.name}
        />
      ))}
    </div>
  );
};

export default TeacherStatisticStudentAll;
