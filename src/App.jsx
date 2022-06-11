import { Route, Routes } from 'react-router-dom';
import CV from './pages/CV';
import Home from './pages/Home';
import Error404 from './pages/Error404';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cv' element={<CV />} />
				<Route path='*' element={<Error404 />} />
			</Routes>
		</>
	);
};

export default App;
