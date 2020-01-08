import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';

import Home from './views/Home';

export default function Router() {
    return (
        <ThemeContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        </ThemeContextProvider>
    )
}