import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from "axios"
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setTokenToAxios } from './helper/index.js'


axios.defaults.baseURL = import.meta.env.VITE_API_URL;
setTokenToAxios();
axios.defaults.headers.common["Content-Type"] = "application/json";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
