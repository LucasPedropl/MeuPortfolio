import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from './pages/Base';
import Home from './pages/Home';

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<BasePage />}>
						<Route index element={<Home />} />
						<Route path="/About" element={<Home />} />
						<Route path="/Contact" element={<Home />} />
						<Route path="/Projects" element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
