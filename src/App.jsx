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
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
