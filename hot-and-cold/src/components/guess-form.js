import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
	onSubmit(event){
		event.preventDefault();

		if(this.props.makeGuess) {
			const value = this.input.value;
			this.props.onMakeGuess(value);
		}
		this.input.value('');
	}	

	render() {
		return (
			<form onSubmit={(e => this.onSubmit(e))}>
				<input 
					type="number" 
					name="userGuess" 
					id="userGuess" 
					className="guess-input"
					min="1"
					max="100"
					ref={input => (this.input = input)}
					required="true"
				>
				</input>
				<button 
					type="submit"
					name="submit-btn"
					id="guess-submit-btn"
					className="button">
					Guess!
				</button>
			</form>
		);
	}

}