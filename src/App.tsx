import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditorPage from "./pages/EditorPage";
import GlobalStyle from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<MainPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
