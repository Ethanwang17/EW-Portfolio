import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import {useState} from "react";
import HomePage from "./pages/Home"; // Create a separate homepage component
import LoadingScreen from "./components/LoadingScreen";
import CaseStudy1 from "./pages/CaseStudy1"; // Import CaseStudy1
import CaseStudy2 from "./pages/CaseStudy2"; // Import CaseStudy2
import CaseStudy3 from "./pages/CaseStudy3"; // Import CaseStudy3
import CaseStudy4 from "./pages/CaseStudy4"; // Import CaseStudy4
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
						<Route
							path="/casestudy1"
							element={<CaseStudy1 />}
						/>{" "}
						{/* Add route for CaseStudy1 */}
						<Route
							path="/casestudy2"
							element={<CaseStudy2 />}
						/>{" "}
						{/* Add route for CaseStudy2 */}
						<Route
							path="/casestudy3"
							element={<CaseStudy3 />}
						/>{" "}
						{/* Add route for CaseStudy3 */}
						<Route
							path="/casestudy4"
							element={<CaseStudy4 />}
						/>{" "}
						{/* Add route for CaseStudy4 */}
						<Route path="*" element={<Navigate to="/" />} />{" "}
						{/* Redirect any unknown route to homepage */}
					</Routes>
				</Router>
			)}
		</>
	);
}

export default App;
