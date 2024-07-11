import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from './components/common/themeProvider';
import reportWebVitals from "./reportWebVitals";
import ReactGA from 'react-ga'; 

ReactGA.initialize('G-45Z6STWVYB');


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);

ReactGA.pageview(window.location.pathname + window.location.search);

reportWebVitals();
