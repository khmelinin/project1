import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route, NavLink, useNavigate } from "react-router-dom"
import 'materialize-css';
import { LessonPage } from './LessonPage'

export const CoursePage = () => {
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const response = await axios.get('http://localhost:3000/api/courses');
                //setCourse(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    let my_href= "/course";

    return (
        <div>
            <p>

            </p>
            <div>
                <button className="field button-field" style={{marginRight: 10}}>
                    <li><NavLink to="/course1">Курс 1</NavLink></li>
                </button>
            </div>
            <p>

            </p>
            <div>
                <button className="field button-field" style={{marginRight: 10}}>
                <li><NavLink to="/course1">Курс 2</NavLink></li>
                </button>
            </div>
            <p>

            </p>
            <div>
                <button className="field button-field" style={{marginRight: 10}}>
                <li><NavLink to="/course1">Курс 3</NavLink></li>
                </button>
            </div>
        </div>
        // <div class="ag-format-container">
        //     <div class="ag-courses_box">
        //
        //         {courses.map((item, index) => (
        //             <div class="ag-courses_item">
        //                 <p style={{display: 'none'}}>{index === 0 ? my_href = "/lesson" : my_href = "/course"}</p>
        //                 <a href={my_href} className="ag-courses-item_link">
        //                     <div class="ag-courses-item_bg"></div>
        //
        //                     <div class="ag-courses-item_title">
        //                         {item.name}
        //                     </div>
        //
        //                     <div class="ag-courses-item_date-box">
        //                         {item.description}
        //                     </div>
        //
        //                     <div class="ag-courses-item_date-box">
        //                         {"\n"}
        //                     </div>
        //
        //                     <div class="ag-courses-item_date-box">
        //                         Pasing Score:
        //                         <span class="ag-courses-item_date">
        //         {item.passing_score}
        //       </span>
        //                     </div>
        //                 </a>
        //             </div>
        //         ))}
        //
        //     </div>
        // </div>
    )
}