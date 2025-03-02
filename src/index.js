import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import { configureStore } from '@reduxjs/toolkit';
import { accountSlice } from './slices/accountSlice';
import { bonusSlice } from './slices/bonusSlice';
import { Provider } from 'react-redux';
import rewardReducer from './reducers/reward';

const accountReducer = accountSlice.reducer;
const bonusReducer = bonusSlice.reducer;

const store = configureStore({
  reducer: {
    account : accountReducer,
    bonus : bonusReducer,
    reward : rewardReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
