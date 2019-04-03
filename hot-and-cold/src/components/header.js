import React from 'react';

import './header.css';

import NavBar from './nav-bar.js';

export default function Header(props) {
	return (
			<header>
				<NavBar />
				<h1>Hot or Cold</h1>
			</header>
		);
}