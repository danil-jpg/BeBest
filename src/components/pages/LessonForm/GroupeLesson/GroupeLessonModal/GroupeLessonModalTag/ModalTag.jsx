import React from "react";
import "./ModalTag.scss";
import { useState } from "react";
const ModalTag = ({time}) => {
    const [active, setActive] = useState(false);
    return ( 
        <div className={active ? `modal-tag-time active-tag`: 'modal-tag-time'} onClick={()=>setActive(true)}>
            <p>{time}</p>
        </div>
     );
}
 
export default ModalTag;