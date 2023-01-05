import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import main from './pages/main'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route
                path='/'
                render={({ history, location }) => (
                    <AsyncComponent path={location.pathname} onNotFound={() => history.push('/404')} />
                )}
            />
        </BrowserRouter>
        // <BrowserRouter>
        //     <Switch>
        //         <Route exact path='/main' component={main}/>
        //     </Switch>
        // </BrowserRouter>
    )
}