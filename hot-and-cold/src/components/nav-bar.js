import React from 'react';

import './nav-bar.css';

export default function NavBar(props) {
	return (
			<nav>
				<ul className="nav-list">
					<li>
						<a href="#" className="home" role="home button">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="restart-btn" role="restart">
							New Game
						</a>
					</li>

				</ul>
			</nav>
		);
};