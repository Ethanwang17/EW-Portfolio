// home.jsx
import React, {useState, useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";
import Dock from "../components/Dock/Dock";
import Lanyard from "../components/Lanyard/Lanyard";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import {Marquee} from "@/components/magicui/marquee";
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
	const location = useLocation();

	const dockItems = [
		{
			icon: <IconHome size={24} color="#fff" />,
			label: "Home",
			onClick: () => {
				// Scroll to the top or a specific 'home' section
				window.scrollTo({top: 0, behavior: "smooth"});
				// If you have a specific <section id="home">, use this instead:
				// document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
			},
		},
		{
			icon: <IconFolder size={24} color="#fff" />,
			label: "Projects",
			onClick: () => {
				document
					.getElementById("projects")
					?.scrollIntoView({behavior: "smooth"});
			},
		},
		{
			icon: <IconUser size={24} color="#fff" />,
			label: "About",
			onClick: () => {
				document
					.getElementById("about")
					?.scrollIntoView({behavior: "smooth"});
			},
		},

		{
			icon: <IconMail size={24} color="#fff" />,
			label: "Contact",
			onClick: () => {
				document
					.getElementById("contact")
					?.scrollIntoView({behavior: "smooth"});
			},
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

	// Effect to handle scrolling based on hash
	useEffect(() => {
		if (location.hash === "#projects") {
			// Use setTimeout to allow the layout to potentially stabilize
			const scrollTimer = setTimeout(() => {
				const element = document.getElementById("projects");
				if (element) {
					// Remove behavior: 'smooth' for instant scroll
					element.scrollIntoView();
				}
			}, 100); // 100ms delay, adjust if needed

			return () => clearTimeout(scrollTimer); // Cleanup timeout on unmount or hash change
		}
	}, [location.hash]); // Re-run effect if the hash changes

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

			<motion.div className="project-cards-container" id="projects">
				<motion.div
					initial={{opacity: 0, x: -100}}
					whileInView={{opacity: 1, x: 0}}
					viewport={{once: true, margin: "-50px"}}
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
						description="Automating show discovery through real-time ticket monitoring and Discord notifications."
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
						title="HR Management"
						company="TSMC"
						year="2020"
						description="Simplifying employee relocation and housing logistics for TSMC's workforce."
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
						title="Eco-Conscious Transportation"
						company="X-Scape"
						year="2020"
						description="Helping travelers make greener choices by comparing carbon emissions across transportation options."
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
						description="Bringing biometric insights to mental health by detecting early signs of emotional changes."
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
			<motion.div className="about-me-section" id="about">
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
