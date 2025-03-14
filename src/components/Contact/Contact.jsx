import React from "react";
import {motion} from "framer-motion";
import {IconMail, IconCopy} from "@tabler/icons-react";
import "./Contact.css";

const Contact = () => {
	const handleCopyEmail = () => {
		navigator.clipboard.writeText("2EthanWang@gmail.com");
	};

	return (
		<div className="contact-container">
			<div className="contact-content">
				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.8}}
					className="contact-header"
				>
					<h2>Let's Connect</h2>
				</motion.div>

				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.8, delay: 0.2}}
					className="contact-text"
				>
					<p>
						Curious about what we can create together?
						<br />
						Let's bring something extraordinary to life!
					</p>
				</motion.div>

				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.8, delay: 0.4}}
					className="contact-email"
				>
					<a
						href="mailto:2EthanWang@gmail.com"
						className="email-link"
					>
						<IconMail size={24} className="email-icon" />
						2EthanWang@gmail.com
					</a>
					<button className="copy-button" onClick={handleCopyEmail}>
						<IconCopy size={20} />
					</button>
				</motion.div>

				<motion.div
					initial={{opacity: 0, y: 20}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.8, delay: 0.6}}
					className="contact-button-container"
				>
					<button className="contact-button">Get in Touch</button>
					<div className="availability-indicator">
						<span className="availability-dot"></span>
						Available For Work
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default Contact;
