import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
	return (
		<div className='main'>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile/:id' element={<Profile />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
