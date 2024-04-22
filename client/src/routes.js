import React from 'react'
import {Route, useNavigate as Redirect, BrowserRouter as Router, Routes} from 'react-router-dom'
import {AttestationPage} from './pages/AttestationPage'
import {CoursePage} from "./pages/CoursePage";
import {Course1Page} from "./pages/Course1Page";
import {CourseDetailPage} from "./pages/CourseDetailPage";
import {AuthPage} from "./pages/AuthPage";
import {InformationPage} from "./pages/InformationPage";
import {LessonPage} from "./pages/LessonPage";
import { CreateLessonPage } from './pages/CreateLessonPage';
export  const useRoutes = (isAuthenticated) => {
    if(isAuthenticated){
        return (
            // <Switch location={"/course"}>
            //     <Route path="/attestation" element={<AttestationPage/>}>
            //     </Route>
            //     <Route path="/course" element={<CoursePage/>}>
            //     </Route>
            //     <Route path="/information" element={<InformationPage />}>
            //     </Route>
            //
            // </Switch>
                <Routes>
                    <Route path="/attestation" element={<AttestationPage/>}></Route>
                    <Route path="/course" element={<CoursePage/>}></Route>
                    <Route path="/course1" element={<Course1Page/>}></Route>
                    <Route path="/information" element={<InformationPage/>}></Route>
                    <Route path="/lesson/:id" element={<LessonPage/>}></Route>
                    <Route path="/createlesson" element={<CreateLessonPage/>}></Route>
                </Routes>
        )
    }
    return(
            <Routes location={"/"}>
                <Route path="/" element={<AuthPage/>}>
                </Route>
            </Routes>
    )
}