// home.jsx
import React, {useState, useEffect} from "react";
import Dock from "../components/Dock/Dock";
import Lanyard from "../components/Lanyard/Lanyard";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import {Marquee} from "@/components/magicui/marquee";
import SplitText from "../TextAnimations/SplitText/SplitText";
import {motion} from "framer-motion";
import About from "../components/About/About";
import Footer from "../components/Footer";
import {
	IconHome,
	IconFolder,
	IconUser,
	IconMail,
	IconCopy,
} from "@tabler/icons-react";

const Home = () => {
	const [showLanyard, setShowLanyard] = useState(false);

	const dockItems = [
		{
			icon: <IconHome size={24} color="#fff" />,
			label: "Home",
			onClick: () => console.log("Home clicked"),
		},
		{
			icon: <IconUser size={24} color="#fff" />,
			label: "About",
			onClick: () => console.log("About clicked"),
		},
		{
			icon: <IconFolder size={24} color="#fff" />,
			label: "Projects",
			onClick: () => console.log("Projects clicked"),
		},
		{
			icon: <IconMail size={24} color="#fff" />,
			label: "Contact",
			onClick: () => console.log("Contact clicked"),
		},
	];

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("2EthanWang@gmail.com");
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowLanyard(true);
		}, 800); // 0.8 second delay

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="home-container">
			{/* Add Lanyard with delay */}
			{showLanyard && (
				<div className="lanyard-container">
					<Lanyard position={[0, 0, 20]} fov={18} />
				</div>
			)}

			{/* Top Dock with animation */}
			<motion.div
				initial={{y: -50, opacity: 0}} // Start above and transparent
				animate={{y: 0, opacity: 1}} // Animate to original position and fully visible
				transition={{duration: 1}} // Duration of the animation
				className="top-dock-container"
			>
				<Dock
					items={dockItems}
					magnification={80}
					distance={100}
					panelHeight={68}
					dockHeight={256}
					baseItemSize={50}
					className="top-dock"
				/>
			</motion.div>

			{/* Main content */}
			<div className="main-content">
				<motion.h1
					initial={{y: 100, opacity: 0}} // Start below and transparent
					animate={{y: 0, opacity: 1}} // Animate to original position and fully visible
					transition={{duration: 1}} // Duration of the animation
					className="main-heading"
				>
					<div className="main-heading-text">
						Ethan <br />
						Wang
						<div className="subheading">
							Hello! I craft seamless digital experiences with
							code and creativity.
						</div>
					</div>
				</motion.h1>

				{/* Combined intro and email section */}
				<motion.div
					className="marquee-container"
					initial={{opacity: 0, y: 50}}
					animate={{opacity: 1, y: 0}}
					transition={{
						duration: 1,
						delay: 0, // Add delay to start after the main heading animation
						ease: "easeOut",
					}}
				>
					<Marquee pauseOnHover={true} className="tech-stack-marquee">
						<span>React</span>
						<span>•</span>
						<span>HTML</span>
						<span>•</span>
						<span>CSS</span>
						<span>•</span>
						<span>JavaScript</span>
						<span>•</span>
						<span>Java</span>
						<span>•</span>
						<span>Python</span>
						<span>•</span>
						<span>SQL</span>
						<span>•</span>
						<span>Git</span>
						<span>•</span>
						<span>Swift</span>
						<span>•</span>
						<span>R</span>
						<span>•</span>
						<span>.NET</span>
						<span>•</span>
						<span>C#</span>
						<span>•</span>
					</Marquee>
				</motion.div>
			</div>

			<motion.div className="project-cards-container">
				<motion.div
					initial={{opacity: 0, x: -100}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true, margin: "-300px"}}
					transition={{
						duration: 1,
						type: "spring",
						stiffness: 100,
						damping: 20,
					}}
				>
					<h2>My Latest Work</h2>
				</motion.div>

				<motion.div
					initial={{opacity: 0, y: 50}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: "-100px"}}
					transition={{duration: 0.6}}
					className="project-cards-grid"
				>
					<ProjectCard
						title="Ticket Alerts App"
						company="Ticket Genie"
						year="2024"
						description="Pitched the original prototype and led design for a simpler app that brings Snapchatters closer to their friends."
						imageSrc="/images/Ticket Genie.jpg"
						buttonText="Read the Case Study"
						icon={
							<div>
								<img
									src="/images/Ticket Genie Icon.png"
									alt="Ticket Genie Icon"
									style={{width: "40px", height: "40px"}}
								/>
							</div>
						}
						buttonLink="/casestudy1"
					/>

					<ProjectCard
						title="HR Dashboard"
						company="TSMC"
						year="2020"
						description="Redesigning job recommendations based on job seeker activity."
						imageSrc="/images/TSMC.jpg"
						buttonText="Read the Case Study"
						icon={
							<div>
								<img
									src="/images/TSMC Icon.png"
									alt="TSMC Icon"
									style={{width: "40px", height: "40px"}}
								/>
							</div>
						}
						buttonLink="/casestudy2"
					/>

					<ProjectCard
						title="Eco-Conscious Transportation Planner"
						company="X-Scape"
						year="2020"
						description="Improving a key element in the job seeker experience."
						imageSrc="/images/X-scape.jpg"
						buttonText="Read the Case Study"
						icon={
							<div>
								<img
									src="/images/X-Scape Icon.png"
									alt="X-Scape Icon"
									style={{width: "40px", height: "40px"}}
								/>
							</div>
						}
						buttonLink="/casestudy3"
					/>

					<ProjectCard
						title="AI-Powered Health App"
						company="Mindscape"
						year="2019"
						description="Dish-level reviews for ordering confidently. Case study coming soon."
						imageSrc="/images/Mindscape.jpg"
						icon={
							<div>
								<img
									src="/images/Mindscape Icon.png"
									alt="Mindscape Icon"
									style={{width: "40px", height: "40px"}}
								/>
							</div>
						}
						buttonLink="/casestudy4"
					/>
				</motion.div>
			</motion.div>

			{/* About Me section - Replace with About component */}
			<motion.div className="about-me-section">
				<motion.div
					initial={{opacity: 0, y: 50}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, margin: "-300px"}}
					transition={{
						duration: 1,
						type: "spring",
						stiffness: 100,
						damping: 20,
					}}
					style={{textAlign: "center"}}
				>
					<h2>Meet Ethan</h2>
				</motion.div>

				{/* Add the About component here */}
				<About />
			</motion.div>

			{/* Add Footer component */}
			<Footer />
		</div>
	);
};

export default Home;
