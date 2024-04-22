import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Routes, Route, NavLink, useNavigate } from "react-router-dom"
import 'materialize-css';
import { LessonPage } from './LessonPage'

export const Course1Page = () => {
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/course1');
                setCourse(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    let my_href= "/course1";

    return (
        <div>
            <p>

            </p>
            <div>
                <button className="field button-field" style={{marginRight: 10}}>
                    <li><NavLink to="/lesson/65eeac0c67dd60b562595f87">Урок</NavLink></li>
                </button>
            </div>
        </div>

    )
}