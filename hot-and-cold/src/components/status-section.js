import React from 'react';

import GuessList from './guess-list.js';
import GuessCount from './guess-count.js';

export default function SectionStatus(props){
	const {guesses} = props;
	const guessCount = guesses.length;

	return (
		<section>
			<GuessCount guessCount={guessCount}/>
			<GuessList guesses={guesses}/>
		</section>
	)
}