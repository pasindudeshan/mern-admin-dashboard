import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import globalReducer from "state";
import {Provider} from "react-redux";

const state = configureStore({
  reducer: {
    global: globalReducer,
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={state}>
      <App />
   </Provider>
  </React.StrictMode>,
)
