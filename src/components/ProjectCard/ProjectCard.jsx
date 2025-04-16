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
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.33334 8H12.6667"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 3.33337L12.6667 8.00004L8 12.6667"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
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
