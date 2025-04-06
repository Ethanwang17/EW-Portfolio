import React from "react";
import {motion} from "framer-motion";
import "./About.css";

const About = () => {
	return (
		<motion.div className="about-container">
			<div className="about-content">
				<motion.div
					className="about-header"
					initial={{opacity: 0, x: -50}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true, margin: "-100px"}}
					transition={{duration: 0.8}}
				>
					<h2>about.</h2>
				</motion.div>

				<motion.div
					className="about-text"
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: "-100px"}}
					transition={{duration: 0.8, delay: 0.2}}
				>
					<p>
						I craft sleek, user-focused web experiences using modern
						frameworks and tools. From startups to global teams, I
						build intuitive, scalable interfaces that leave a
						lasting impact.
					</p>
				</motion.div>

				<div className="about-details">
					<motion.div
						className="about-image-container"
						initial={{opacity: 0, scale: 0.9}}
						whileInView={{opacity: 1, scale: 1}}
						viewport={{once: true, margin: "-100px"}}
						transition={{duration: 0.8, delay: 0.4}}
					>
						<img
							src="/images/ethanProfilePic.jpg"
							alt="Professional portrait"
							className="about-image"
						/>
					</motion.div>

					<motion.div
						className="about-description"
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true, margin: "-100px"}}
						transition={{duration: 0.8, delay: 0.6}}
					>
						<p>
							With a strong eye for design and deep technical
							skills, I bring modern web applications to life—from
							concept to deployment.
						</p>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
