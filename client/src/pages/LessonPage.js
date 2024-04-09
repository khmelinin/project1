import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route } from "react-router-dom"
import 'materialize-css';
import { InformationPage } from './InformationPage'

export const LessonPage = () => {
    const [lesson, setLesson] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/lesson');
                setLesson(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    let my_href="/lesson"

    return (
        <div class="ag-format-container">
            <div class="ag-courses_box">

                {lesson.map((item, index) => (

                    <div class="ag-courses_item">
                        <p style={{display: 'none'}}>{index === 0 ? my_href = "/information" : my_href = "/lesson"}</p>
                        <a href={my_href} class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                {item.theme}
                            </div>

                        </a>
                    </div>
                ))}

            </div>
        </div>
    )
}