import React from 'react'
import {Route, useNavigate as Redirect, BrowserRouter as Router, Routes} from 'react-router-dom'
import {AttestationPage} from './pages/AttestationPage'
import {CoursePage} from "./pages/CoursePage";
import {CourseDetailPage} from "./pages/CourseDetailPage";
import {AuthPage} from "./pages/AuthPage";
import {InformationPage} from "./pages/InformationPage";
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
                    <Route path="/information" element={<InformationPage/>}></Route>
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