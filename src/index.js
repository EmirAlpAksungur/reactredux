import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import store from './store/configureStore';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
         <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
   
   
);

reportWebVitals();
