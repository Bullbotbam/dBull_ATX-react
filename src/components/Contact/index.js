import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const { name, email, message } = formState;

	const [errorMessage, setErrorMessage] = useState('');

	function handleChange(e) {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.taget.value);
			console.log(isValid);
			if (!isValid) {
				setErrorMessage('Your email does not match any in our records.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required for this site.`);
			} else {
				setErrorMessage('');
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formState);
	}

	return (
		<section>
			<h1>Hit Me Up!</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name"> Name:</label>
					<input
						type="text"
						defaultValue={name}
						onBlur={handleChange}
						name="name"
					/>
				</div>
				<div>
					<label htmlFor="email">Email address:</label>
					<input
						type="email"
						defaultValue={email}
						onBlur={handleChange}
						name="email"
					/>
				</div>
				<div>
					<label htmlFor="message">Please share:</label>
					<textarea
						name="message"
						defaultValue={message}
						onBlur={handleChange}
						rows="6"
					/>
				</div>
				{errorMessage && (
					<div>
						<p className="error-text">{errorMessage}</p>
					</div>
				)}
				<button type="submit">Send It To Me</button>
			</form>
		</section>
	);
}

export default ContactForm;
