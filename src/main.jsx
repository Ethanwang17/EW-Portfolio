import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Check if we need to redirect after a page refresh
const redirectPath = sessionStorage.getItem("redirectPath");
if (redirectPath && redirectPath !== "/") {
	// Remove the saved path to prevent infinite redirect
	sessionStorage.removeItem("redirectPath");
	// Update the URL using the History API without causing a page refresh
	window.history.replaceState(null, null, redirectPath);
}

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
