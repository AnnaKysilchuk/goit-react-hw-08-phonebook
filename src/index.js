import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { Loader } from './components/loader/Loader';
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <PersistGate loading={<Loader />} persistor={persistor}>
                <BrowserRouter basename="/goit-react-hw-08-phonebook">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </React.StrictMode>
    </Provider>,
);
