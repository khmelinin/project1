import React, {useEffect, useState} from "react";
import {useHttp} from '../hooks/http.hook'
import {useMessage} from "../hooks/message.hook";
import {useNavigate} from 'react-router-dom'

export const CreateLessonPage = () => {
    const history = useNavigate()
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        title: '', lesson: '', description: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const createHandler = async event => {
        console.log(form.title, form.lesson, form.description)
            try {
                
                const data = await request('/api/lesson/createlesson', 'POST', {... form})
                console.log(data)
                history.navigate(`/lesson/${data.lesson._id}`)
            } catch (e) {console.log(e)}
        
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                            <div className="input-field">
                                <input
                                    placeholder="Введите тему"
                                    id="title"
                                    type="text"
                                    name="title"
                                    className="white-input"
                                    value={form.title}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="title">Тема</label>
                            </div>
                        <div className="input-field">
                                <input
                                    placeholder="Введите урок"
                                    id="lesson"
                                    type="text"
                                    name="lesson"
                                    className="white-input"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="lesson">Урок</label>
                            </div>
                        <div className="input-field">
                                <input
                                    placeholder="Введите описание"
                                    id="description"
                                    type="text"
                                    name="description"
                                    className="white-input"
                                    value={form.password}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="description">Описание</label>
                            </div>
                        <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight: 10}}
                            disabled={loading}
                            onClick={createHandler}
                        >
                            Создать
                        </button>
                        </div>
            </div>
        </div>
    )
}