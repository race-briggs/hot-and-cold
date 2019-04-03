import React from 'react';

import Header from './header.js';
import GuessSection from './guess-section.js';
import StatusSection from './status-section.js';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Guess away!',
			correctAnswer: Math.floor(Math.random() * (100 - 1)) + 1
		};
	}

	restartGame() {
		this.setState({
			guesses: [],
			feedback: 'Guess away!',
			correctAnswer: Math.floor(Math.random() * (100 - 1)) + 1
		});
	}


	makeGuess(guess) {
		guess = parseInt(guess, 10);
		if(isNaN(guess)){
			this.setState({feedback: 'Please enter a valid number'});
			return;
		};

		const difference = Math.abs(guess - this.state.correctAnswer);

		let feedback;
		if(difference >= 50) {
			feedback = 'Very cold...';
		} else if(difference >= 25){
			feedback = 'You are cold';
		} else if(difference >= 10){
			feedback = 'You are warm';
		} else if(difference >= 5){
			feedback = 'Getting hot!';
		} else if(difference >= 1){
			feedback = 'You\'re burning up!';
		} else {
			feedback = 'You got it!';
		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, guess]
		});


	}

	render() {
		const {feedback, guesses} = this.state;
		const guessCount = guesses.length;

		return(
			<div>
				<Header onRestartGame={() => this.restartGame()}/>
				<main role="main">
					<GuessSection 
						feedback={feedback} 
						guessCount={guessCount} 
						onMakeGuess={guess => this.makeGuess(guess)}
					/>
					<StatusSection guesses={guesses}/>
				</main>
			</div>
		);
	}
}