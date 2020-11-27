import { Route, Switch } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" exact />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
