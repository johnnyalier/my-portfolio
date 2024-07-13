import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import WorksPage from './pages/WorksPage';
import ServicePage from './pages/ServicePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
	const [count, setCount] = useState(0)

	return (
		<BrowserRouter>
			<div className='flex flex-col justify-between items-center'>
				<Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/works' element={<WorksPage />} />
					<Route path='/services' element={<ServicePage />} />
                </Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
