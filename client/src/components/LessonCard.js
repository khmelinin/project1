import React from "react";

export const LessonCard = ({lesson}) => {
    return (
        <>
            <h2>Урок</h2>
            <p>{lesson.title}</p>
            <p>{lesson.lesson}</p>
            <p>{lesson.description}</p>
        </>
    )
}