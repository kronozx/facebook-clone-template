import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";

import LoginScreen from "../components/auth/LoginScreen";
import MainScreen from "../components/main/MainScreen";

const AppRouter = () => {
    return (
        <Router>

            <div>

                    <Switch>

                        <Route exact path="/login" component={ LoginScreen } />
                        <Route exact path="/" component={ MainScreen } />

                        <Redirect to="/login" />

                    </Switch>

            </div>
            
        </Router>
    )
}

export default AppRouter
