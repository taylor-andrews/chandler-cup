import React from 'react';
import { Switch, Route } from 'react-router';

import Header from './common/Header';
import Home from './Home/Home';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default App;