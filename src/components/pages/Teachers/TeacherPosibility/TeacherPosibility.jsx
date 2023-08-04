import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { async } from 'q';
import './TeacherPosibility.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const TeacherPosibility = () => {
    return (
        <div className='teacher__pos'>
            <p className='teacher__pos_title'>Возможности преподавателя</p>
            <div className='teacher__pos_block'>
                <p className='teacher__pos_block_title'>Акценты</p>
                <div className='teacher__pos_block__text-wr'>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                </div>
            </div>
            <div className='teacher__pos_block'>
                <p className='teacher__pos_block_title'>Возраст</p>
                <div className='teacher__pos_block__text-wr'>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                </div>
            </div>
            <div className='teacher__pos_block'>
                <p className='teacher__pos_block_title'>Аспекты обучения</p>
                <div className='teacher__pos_block__text-wr'>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                    <p className='teacher__pos_block__text-wr_text'>111</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherPosibility;
