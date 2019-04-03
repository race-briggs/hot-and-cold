import React from 'react';
import Feedback from './feedback,js';
import GuessForm from './guess-form.js';
import './guess-section.css';

export default function GuessSection(props){
	const {feedback, guessCount} = props;
	return(
			<section
				role="region"
				className="guess-section"
			>
				<Feedback feedback={feedback} guessCount={guessCount} />
				<GuessForm makeGuess={guess => props.makeGuess(guess)}/>
			</section>
		)
}