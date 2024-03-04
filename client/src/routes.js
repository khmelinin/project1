import React from 'react'
import {Routes as Switch, Route, Navigate as Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";
export  const useRoutes = (isAuthenticated) => {
    if(isAuthenticated){
        return (
            <Switch location={<CreatePage/>}>
                <Route path="/links" exact element={<LinksPage/>}>
                </Route>
                <Route path="/create" exact element={<CreatePage/>}>
                </Route>
                <Route path="/detail/:id" element={<DetailPage/>}>
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