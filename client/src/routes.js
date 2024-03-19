import React from 'react'
import {Routes as Switch, Route, useNavigate as Redirect} from 'react-router-dom'
import {AttestationPage} from './pages/AttestationPage'
import {CoursePage} from "./pages/CoursePage";
import {CourseDetailPage} from "./pages/CourseDetailPage";
import {AuthPage} from "./pages/AuthPage";
export  const useRoutes = (isAuthenticated) => {
    if(isAuthenticated){
        return (
            <Switch location={"/course"}>
                <Route path="/attestation" exact element={<AttestationPage/>}>
                </Route>
                <Route path="/course" exact element={<CoursePage/>}>
                </Route>
                <Route path="/detail/:id" element={<CourseDetailPage/>}>
                </Route>
            </Switch>
        )
    }
    return(
        <Switch location={"/"}>
            <Route path="/" exact element={<AuthPage/>}>
            </Route>
        </Switch>
    )
}