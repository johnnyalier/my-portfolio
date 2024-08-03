import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorksPage from './pages/WorksPage';
import ServicePage from './pages/ServicePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/works' element={<WorksPage />} />
				<Route path='/services' element={<ServicePage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App
