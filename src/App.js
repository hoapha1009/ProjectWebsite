import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import HomePage from './components/pages/HomePage';
import Services from './components/pages/Services';
import Product from './components/pages/Product';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/services" component={Services} />
                <Route path="/products" component={Product} />

                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
