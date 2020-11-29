import store from 'app/store';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <SnackbarProvider
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <App />
            </SnackbarProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
