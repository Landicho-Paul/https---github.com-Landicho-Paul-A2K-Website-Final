import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {store, persistor} from './redux/store.jsx'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter >
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
        <App />
        </PersistGate>
    </Provider>
</BrowserRouter>
);

