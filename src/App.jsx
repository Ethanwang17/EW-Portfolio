import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {useState} from "react";
import HomePage from "./pages/Home"; // Create a separate homepage component
import LoadingScreen from "./components/LoadingScreen";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	return (
		<>
			{isLoading ? (
				<LoadingScreen onLoadingComplete={handleLoadingComplete} />
			) : (
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="*" element={<Navigate to="/" />} />{" "}
						{/* Redirect any unknown route to homepage */}
					</Routes>
				</Router>
			)}
		</>
	);
}

export default App;
