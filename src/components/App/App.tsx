import People from '../People';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { AppState, history } from '../../store'
import PersonDetails from '../PersonDetails';
import Container from '@mui/material/Container';

function App() {
    const location = useSelector((state: AppState) => state.router.location)

    return (
        <ConnectedRouter history={history}>
            <Container>
                <Switch location={location}>

                    <Route path={"/person/:id"}>
                        <PersonDetails />
                    </Route>

                    <Route>
                        <People />
                    </Route>

                </Switch>
            </Container>
        </ConnectedRouter>
    );
}

export default App;
