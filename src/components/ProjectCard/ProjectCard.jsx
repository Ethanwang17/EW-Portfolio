import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({
	title,
	company,
	year,
	description,
	imageSrc,
	buttonText = "Read More",
	buttonLink = "#",
	icon,
}) => {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="project-card">
			<div className="project-card-content">
				<div className="project-card-icon">{icon}</div>
				<h3 className="project-card-title">{title}</h3>
				<div className="project-card-company-year">
					<span className="project-card-company">{company}</span>
					<span className="project-card-dot">•</span>
					<span className="project-card-year">{year}</span>
				</div>
				<p className="project-card-description">{description}</p>
				<motion.div
					className="project-card-button"
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}
				>
					<Link
						to={buttonLink}
						className="project-card-link-wrapper"
						onClick={handleClick}
					>
						{buttonText}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							width="16"
							height="16"
							fill="currentColor"
						>
							<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
						</svg>
					</Link>
				</motion.div>
			</div>
			<div className="project-card-image">
				<img src={imageSrc} alt={title} />
			</div>
		</div>
	);
};

export default ProjectCard;
