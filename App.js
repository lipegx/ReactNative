import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './src/pages/register';
import SignIn from './src/pages/SingIn';
import Home from './src/pages/home';
import EditUser from './src/pages/editUsers';
import Welcome from './src/pages/welcome';
import Users from './src/pages/Users';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Welcome} />
                <Route path="/register" component={Register} />
                <Route path="/signin" component={SignIn} />
                <Route path="/users" component={Users} />
                <Route path="/home" component={Home} />
                <Route path="/editUser/:userId" component={EditUser} />
            </Switch>
        </Router>
    );
};

export default App;