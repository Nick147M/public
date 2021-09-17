import People from '../People';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { AppState, history } from '../../store'
import PersonDetails from '../PersonDetails';

function App() {
    const location = useSelector((state: AppState) => state.router.location)

    return (
        <ConnectedRouter history={history}>
            <Switch location={location}>

                <Route path={"/person/:id"}>
                    <PersonDetails />
                </Route>

                <Route>
                    <People />
                </Route>

            </Switch>
        </ConnectedRouter>
    );
}

export default App;
