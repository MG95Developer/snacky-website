import React from 'react';
import Hero from './components/Hero';
import Info from './components/Info';
import Featured from './components/Featured';
import Mealworm from './components/Mealworm';

export const metadata = {
	title: 'Homepage',
};

const page = () => {
	return (
		<>
			<Hero />
			<Info />
			<Featured />
			<Mealworm />
		</>
	);
};

export default page;
