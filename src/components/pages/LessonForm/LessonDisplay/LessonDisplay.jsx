import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";

const LessonsDisplay = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://bebest.pp.ua/api/users/?populate=*')
          .then((response) => {
            console.log(response.data)
            setUsers(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data', error);
          });
      }, []);
    return ( 
        <div>

        </div>
     );
}
 
export default LessonsDisplay;