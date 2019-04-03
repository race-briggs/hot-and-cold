import React from 'react';
import './feedback.css';

export default function Feedback(props){
	let count = props.guessCount;

	let guessAgain;

	if(count !== 0){
		guessAgain = <span className="hidden">Guess Again!</span>;
	};
	return(
		<h2
			count={count}
			id="feedback"
			role="status"
		>
			{props.feedback} {guessAgain}
		</h2>
	);
}