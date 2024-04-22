import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link, Routes, Route, useParams } from "react-router-dom"
import 'materialize-css';
import { InformationPage } from './InformationPage'
import { useHttp } from '../hooks/http.hook';
import { LessonCard } from '../components/LessonCard';
import { Loader } from '../components/Loader';

export const LessonPage = () => {
    const {request, loading} = useHttp();
    const [lesson, setLesson] = useState(null);
    const lessonId = useParams().id;

    const getLesson = useCallback(async()=>{
        try{
            const fetched = await request(`/api/lesson/${lessonId}`, 'GET', null)
            setLesson(fetched)
        } catch(e){}
    }, [lessonId, request])

    useEffect(()=>{
        getLesson()
    }, [getLesson])

    if(loading){
        return <Loader/>
    }
    console.log(lesson)

    return(
        <>
            {!loading && lesson && <LessonCard lesson={lesson}/>}
        </>
    )
}