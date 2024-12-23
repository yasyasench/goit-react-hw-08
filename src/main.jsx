import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "modern-normalize";
import "./css/index.css";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			
			<BrowserRouter>
				 <HelmetProvider>
					<App />
				</HelmetProvider>
			</BrowserRouter>
			
		</Provider>
	</React.StrictMode>
);