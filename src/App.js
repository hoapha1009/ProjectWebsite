import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import HomePage from './components/pages/HomePage';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />

                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
