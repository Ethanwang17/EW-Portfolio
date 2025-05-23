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
						I’m a software developer passionate about transforming
						design concepts into engaging digital experiences. I
						focus on building products that feel effortless to use
						and create real value for people.
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
							Always learning, always building—focused on growth
							through hands-on problem solving.
						</p>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
