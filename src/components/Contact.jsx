import './style/Contact.css'

function Contact() {
	return (
		<section className="contactPage">
			<div className="contactGrid">
				<div className="contactCard">
					<div>
						<p className="contactEyebrow">Get in touch</p>
						<h1 className="contactTitle">We'd love to hear from you</h1>
						<p style={{ color: '#58493f', lineHeight: 1.6 }}>
							Whether you have a question about our products, shipping, returns, 
							or anything else, our team is ready to answer all your questions.
						</p>
					</div>

					<div className="contactInfoCard">
						<p className="contactLabel">Email</p>
						<p className="contactValue">support@example.com</p>
					</div>

					<div className="contactInfoCard">
						<p className="contactLabel">Phone</p>
						<p className="contactValue">+1 (555) 123-4567</p>
					</div>

					<div className="contactInfoCard">
						<p className="contactLabel">Office Hours</p>
						<p className="contactValue">Mon-Fri: 9am - 6pm EST</p>
					</div>
				</div>

				<div className="contactCard">
					<form className="contactForm" onSubmit={(e) => e.preventDefault()}>
						<div className="formGroup">
							<label htmlFor="name">Name</label>
							<input type="text" id="name" className="formInput" placeholder="John Doe" />
						</div>

						<div className="formGroup">
							<label htmlFor="email">Email address</label>
							<input type="email" id="email" className="formInput" placeholder="john@example.com" />
						</div>

						<div className="formGroup">
							<label htmlFor="message">Message</label>
							<textarea 
								id="message" 
								className="formTextarea" 
								rows="5" 
								placeholder="How can we help you?"
							></textarea>
						</div>

						<button type="submit" className="contactBtn">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
