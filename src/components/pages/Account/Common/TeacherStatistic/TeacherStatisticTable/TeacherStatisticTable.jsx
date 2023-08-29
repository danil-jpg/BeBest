import React from "react";
import './TeacherStatisticTable.scss'

const TeacherStatisticTable = ({tableTitle}) => {
    return ( 
        <div className="teachers-table">
            <div className="teachers-table__header">
                <p className="teachers-table__header-title">Наименование курса</p>
                <div className="teachers-table__header-info">
                <p className="teachers-table__header-title">Кол-во проведенных курсов</p>
                <p className="teachers-table__header-title">Кол-во учеников на курсе</p>
                <p className="teachers-table__header-title">Заработанные деньги</p>
                </div>
            </div>
            <div className="teachers-table__block">
                <div className="teachers-table__block-name">
                    <p>Английский язык</p>
                </div>
                <div className="teachers-table__block-info">
                    <p>200</p>
                    <p>200</p>
                    <p>20 000$</p>
                </div>
            </div>
            <div className="teachers-table__block">
                <div className="teachers-table__block-name">
                    <p>Английский язык</p>
                </div>
                <div className="teachers-table__block-info">
                    <p>200</p>
                    <p>200</p>
                    <p>20 000$</p>
                </div>
            </div>
            <div className="teachers-table__block">
                <div className="teachers-table__block-name">
                    <p>Английский язык</p>
                </div>
                <div className="teachers-table__block-info">
                    <p>200</p>
                    <p>200</p>
                    <p>20 000$</p>
                </div>
            </div>
        </div>
     );
}
 
export default TeacherStatisticTable;