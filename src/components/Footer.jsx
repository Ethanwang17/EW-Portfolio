import React from "react";
import {ArrowUp} from "lucide-react";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className="footer-container" id="contact">
			<div className="footer-content">
				<div className="footer-copyright">
					© {new Date().getFullYear()}
				</div>

				<div className="back-to-top" onClick={scrollToTop}>
					BACK TO TOP
					<div className="arrow-up-circle">
						<ArrowUp size={20} />
					</div>
				</div>
			</div>

			<div className="footer-project">
				<p className="project-heading">HAVE WORK IN MIND?</p>
				<h2 className="lets-talk">LET'S TALK</h2>
			</div>

			<div className="footer-links">
				<div className="social-links">
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						GITHUB
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						LINKEDIN
					</a>
					<a
						href="https://twitter.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						TWITTER
					</a>
				</div>

				<div className="credits">
					<p>
						Designed & Developed by{" "}
						<span className="credit-name">Ethan Wang</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
