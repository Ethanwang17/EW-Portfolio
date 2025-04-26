import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const CaseStudy2 = () => {
	return (
		<div
			className="case-study-two"
			style={{
				backgroundColor: "#faf9f6",
				color: "#222",
				fontFamily: "'Inter', system-ui, sans-serif",
			}}
		>
			{/* Navigation Bar */}
			<motion.nav
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 0.4}}
				style={{
					padding: "24px max(5%, 20px)",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
					flexWrap: "wrap",
					gap: "15px",
				}}
			>
				<Link
					to="/#projects"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						textDecoration: "none",
						color: "#222",
						fontWeight: 600,
						fontSize: "0.95rem",
					}}
					onClick={() => window.scrollTo(0, 0)}
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 12H5"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 19L5 12L12 5"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					Back to Projects
				</Link>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
					}}
				>
					<div
						style={{
							width: "32px",
							height: "32px",
							borderRadius: "6px",
							overflow: "hidden",
						}}
					>
						<img
							src="/images/TSMC Icon.png"
							alt="Company Icon"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							textTransform: "uppercase",
							letterSpacing: "0.05em",
							fontSize: "0.85rem",
						}}
					>
						<span style={{fontWeight: 600, color: "#555"}}>
							TSMC
						</span>
						<span style={{color: "#777"}}>•</span>
						<span style={{color: "#777"}}>
							Software Engineer Internship
						</span>
					</div>
				</div>
			</motion.nav>

			{/* Hero Section - Split Layout */}
			<section
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "60px max(5%, 20px)",
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gap: "40px",
					alignItems: "center",
				}}
			>
				{/* Left Side - Text content */}
				<motion.div
					initial={{opacity: 0, x: -30}}
					animate={{opacity: 1, x: 0}}
					transition={{duration: 0.7}}
				>
					<h1
						style={{
							fontSize: "clamp(2rem, 5vw, 3.8rem)",
							fontWeight: 700,
							lineHeight: 1.1,
							marginBottom: "30px",
						}}
					>
						TSMC HR Web App
					</h1>

					<p
						style={{
							fontSize: "clamp(1rem, 3vw, 1.1rem)",
							lineHeight: 1.6,
							color: "#555",
							marginBottom: "40px",
							maxWidth: "500px",
						}}
					>
						Tasked with modernizing a slow, outdated internal HR
						system used by thousands of employees, our team at TSMC
						was challenged to build a scalable, cloud-based HR web
						application that could process data faster, integrate
						seamlessly with existing .NET architecture, and improve
						the overall employee experience.
					</p>

					<div
						style={{
							display: "flex",
							gap: "15px",
							flexWrap: "wrap",
							marginBottom: "40px",
						}}
					>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#fff",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							UX Design
						</span>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#fff",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							Web Development
						</span>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#fff",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							Enterprise Software
						</span>
					</div>
				</motion.div>

				{/* Right Side - Hero Image */}
				<motion.div
					initial={{opacity: 0, x: 30}}
					animate={{opacity: 1, x: 0}}
					transition={{duration: 0.7, delay: 0.2}}
					style={{
						overflow: "hidden",
						height: "auto",
						maxWidth: "100%",
					}}
				>
					<img
						src="/images/TSMC Hero Mockup.png"
						alt="TSMC HR Dashboard Hero"
						style={{
							width: "100%",
							height: "auto",
							objectFit: "contain",
						}}
					/>
				</motion.div>
			</section>

			{/* Overview Section - With Large Stats */}
			<section
				style={{
					backgroundColor: "#fff",
					padding: "60px 0",
				}}
			>
				<div
					style={{
						maxWidth: "1200px",
						margin: "0 auto",
						padding: "0 max(5%, 20px)",
					}}
				>
					<motion.div
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						viewport={{once: true}}
						transition={{duration: 0.6}}
					>
						<h2
							style={{
								fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
								fontWeight: 700,
								marginBottom: "50px",
								textAlign: "center",
							}}
						>
							Project Overview
						</h2>

						<div
							style={{
								display: "grid",
								gridTemplateColumns:
									"repeat(auto-fit, minmax(250px, 1fr))",
								gap: "20px",
								marginBottom: "60px",
							}}
						>
							<div
								className="stats-card"
								style={{
									textAlign: "center",
									padding: "30px",
									borderRadius: "20px",
									boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
									backgroundColor: "#faf9f6",
								}}
							>
								<h3
									style={{
										fontSize: "clamp(2rem, 6vw, 2.8rem)",
										fontWeight: 700,
										marginBottom: "10px",
										color: "#222",
									}}
								>
									40%
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									Increase in HR data processing speed
								</p>
							</div>
							<div
								style={{
									textAlign: "center",
									padding: "30px",
									borderRadius: "20px",
									boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
									backgroundColor: "#faf9f6",
								}}
							>
								<h3
									style={{
										fontSize: "clamp(2rem, 6vw, 2.8rem)",
										fontWeight: 700,
										marginBottom: "10px",
										color: "#222",
									}}
								>
									5,000+
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									Employees impacted across the organization
								</p>
							</div>
							<div
								style={{
									textAlign: "center",
									padding: "30px",
									borderRadius: "20px",
									boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
									backgroundColor: "#faf9f6",
								}}
							>
								<h3
									style={{
										fontSize: "clamp(2rem, 6vw, 2.8rem)",
										fontWeight: 700,
										marginBottom: "10px",
										color: "#222",
									}}
								>
									25%
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									fewer employee support tickets submitted{" "}
								</p>
							</div>
						</div>

						<p
							style={{
								fontSize: "clamp(1rem, 3vw, 1.1rem)",
								lineHeight: 1.7,
								color: "#555",
								maxWidth: "800px",
								margin: "0 auto 30px",
								textAlign: "center",
							}}
						>
							Before this project, TSMC's HR processes were
							heavily dependent on manually maintained Excel
							spreadsheets, resulting in scattered, error-prone
							workflows. Routine tasks like onboarding, updating
							records, and managing housing assignments were slow
							and frustrating for both HR staff and employees. I
							joined as a Software Engineer Intern to help lead
							the overhaul—designing a modern frontend experience,
							collaborating on backend API architecture,
							optimizing database performance, and deploying
							everything to Microsoft Azure. As a result, we
							created a unified, cloud-based HR application that
							replaced dozens of inefficient spreadsheets with a
							fast, secure, and intuitive platform.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Content Sections with Timeline Approach */}
			<section
				style={{
					maxWidth: "1000px",
					margin: "0 auto",
					padding: "60px max(5%, 20px)",
				}}
			>
				{/* Challenge Section */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						marginBottom: "80px",
						position: "relative",
						paddingLeft: "min(60px, 15vw)",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "0",
							top: "5px",
							width: "min(40px, 10vw)",
							height: "min(40px, 10vw)",
							borderRadius: "50%",
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							fontSize: "min(1.2rem, 4vw)",
							fontWeight: "700",
							color: "#222",
						}}
					>
						1
					</div>
					<h2
						style={{
							fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
							fontWeight: 700,
							marginBottom: "30px",
							color: "#222",
						}}
					>
						The Challenge
					</h2>

					<p
						style={{
							fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
							lineHeight: 1.7,
							color: "#555",
							marginBottom: "30px",
						}}
					>
						The previous HR system wasn't truly a system—it was a
						collection of Excel files, internal forms, and
						disconnected databases patched together over time. This
						made it difficult to find information quickly,
						introduced frequent human errors, and created
						significant version control issues. Our goal was to
						rebuild it from the ground up with a modern tech stack,
						focusing on usability, speed, and scalability.
					</p>

					<div
						style={{
							backgroundColor: "#fff",
							padding: "25px",
							borderRadius: "20px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							marginBottom: "30px",
						}}
					>
						<h3
							style={{
								fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
								fontWeight: 600,
								marginBottom: "15px",
								color: "#222",
							}}
						>
							Key Challenges:
						</h3>
						<ul
							style={{
								paddingLeft: "20px",
							}}
						>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Creating a responsive, accessible frontend for
								5,000+ diverse users
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Designing and integrating with a scalable REST
								API using .NET and SQL Server
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Handling large concurrent data requests with
								minimal latency
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Ensuring secure login and data protection for
								sensitive HR records
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Migrating to Microsoft Azure cloud
								infrastructure without disrupting operations
							</li>
						</ul>
					</div>
				</motion.div>

				{/* Research Section */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						marginBottom: "80px",
						position: "relative",
						paddingLeft: "min(60px, 15vw)",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "0",
							top: "5px",
							width: "min(40px, 10vw)",
							height: "min(40px, 10vw)",
							borderRadius: "50%",
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							fontSize: "min(1.2rem, 4vw)",
							fontWeight: "700",
							color: "#222",
						}}
					>
						2
					</div>
					<h2
						style={{
							fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
							fontWeight: 700,
							marginBottom: "30px",
							color: "#222",
						}}
					>
						Research & Discovery
					</h2>

					<p
						style={{
							fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
							lineHeight: 1.7,
							color: "#555",
							marginBottom: "30px",
						}}
					>
						We interviewed internal users (HR staff and employees)
						and conducted usability testing on the old system. We
						discovered: Slow speeds were frustrating users,
						especially during onboarding or payroll weeks. There was
						a lot of misinformation and incorrect data. The
						interface lacked intuitive navigation, especially for
						non-technical users. We also worked with the backend
						team to define API requirements and security standards,
						particularly around authentication, authorization, and
						data consistency.
					</p>

					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(250px, 1fr))",
							gap: "20px",
							marginBottom: "30px",
						}}
					></div>

					<div
						style={{
							backgroundColor: "#fff",
							padding: "25px",
							borderRadius: "20px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
						}}
					>
						<h3
							style={{
								fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
								fontWeight: 600,
								marginBottom: "15px",
								color: "#222",
							}}
						>
							Key Insights:
						</h3>
						<ul style={{paddingLeft: "20px"}}>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Most users wanted a clean, mobile-friendly UI
								they could access outside of office hours
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								HR staff needed batch processing tools and
								faster data retrieval
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								The system had to meet strict uptime and
								security expectations—common in the
								semiconductor industry
							</li>
						</ul>
					</div>
				</motion.div>

				{/* Solution Section */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						marginBottom: "80px",
						position: "relative",
						paddingLeft: "min(60px, 15vw)",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "0",
							top: "5px",
							width: "min(40px, 10vw)",
							height: "min(40px, 10vw)",
							borderRadius: "50%",
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							fontSize: "min(1.2rem, 4vw)",
							fontWeight: "700",
							color: "#222",
						}}
					>
						3
					</div>
					<h2
						style={{
							fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
							fontWeight: 700,
							marginBottom: "30px",
							color: "#222",
						}}
					>
						The Solution
					</h2>

					<p
						style={{
							fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
							lineHeight: 1.7,
							color: "#555",
							marginBottom: "40px",
						}}
					>
						The TSMC HR Web App was developed using a React
						frontend, integrated with a .NET backend via a
						well-documented set of REST APIs. I focused on the
						frontend development, including building secure login
						flows, dynamic dashboards, and data entry forms, while
						also working closely with backend engineers on API
						consumption and database interactions.
					</p>

					<div
						style={{
							display: "grid",
							gridTemplateColumns:
								"repeat(auto-fit, minmax(280px, 1fr))",
							gap: "25px",
							marginBottom: "40px",
						}}
					>
						<motion.div
							whileHover={{
								scale: 1.03,
								boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
							}}
							transition={{duration: 0.3}}
							style={{
								backgroundColor: "#fff",
								borderRadius: "20px",
								padding: "25px",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							}}
						>
							<h3
								style={{
									fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
									fontWeight: 600,
									marginBottom: "15px",
									color: "#222",
								}}
							>
								Responsive React Frontend
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Designed and built a clean, responsive UI using
								React and Tailwind CSS. Ensured full
								accessibility compliance, responsive layout
								behavior, and usability across browsers and
								devices.
							</p>
						</motion.div>

						<motion.div
							whileHover={{
								scale: 1.03,
								boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
							}}
							transition={{duration: 0.3}}
							style={{
								backgroundColor: "#fff",
								borderRadius: "20px",
								padding: "25px",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							}}
						>
							<h3
								style={{
									fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
									fontWeight: 600,
									marginBottom: "15px",
									color: "#222",
								}}
							>
								Secure API Integration
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Integrated RESTful APIs built in .NET Core with
								role-based authentication, allowing HR teams to
								manage employee records with greater efficiency
								and security.
							</p>
						</motion.div>

						<motion.div
							whileHover={{
								scale: 1.03,
								boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
							}}
							transition={{duration: 0.3}}
							style={{
								backgroundColor: "#fff",
								borderRadius: "20px",
								padding: "25px",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							}}
						>
							<h3
								style={{
									fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
									fontWeight: 600,
									marginBottom: "15px",
									color: "#222",
								}}
							>
								Azure Cloud Deployment
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								The app was deployed on Microsoft Azure, using
								App Services and SQL Server integration. This
								allowed the system to scale easily and benefit
								from Azure's built-in monitoring, alerts, and
								auto-scaling.
							</p>
						</motion.div>
					</div>

					<motion.div
						whileHover={{scale: 1.02}}
						transition={{duration: 0.3}}
						style={{
							borderRadius: "20px",
							overflow: "visible",
							height: "auto",
							maxWidth: "100%",
							marginBottom: "40px",
						}}
					>
						<img
							src="/images/TSMC Web Layout.png"
							alt="🌍 Solution showcase: Screenshot of X-Scape app showing travel route and emission comparison"
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
							}}
						/>
					</motion.div>
				</motion.div>

				{/* Results Section */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						marginBottom: "80px",
						position: "relative",
						paddingLeft: "min(60px, 15vw)",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "0",
							top: "5px",
							width: "min(40px, 10vw)",
							height: "min(40px, 10vw)",
							borderRadius: "50%",
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							fontSize: "min(1.2rem, 4vw)",
							fontWeight: "700",
							color: "#222",
						}}
					>
						4
					</div>
					<h2
						style={{
							fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
							fontWeight: 700,
							marginBottom: "30px",
							color: "#222",
						}}
					>
						Results & Impact
					</h2>

					<p
						style={{
							fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
							lineHeight: 1.7,
							color: "#555",
							marginBottom: "30px",
						}}
					>
						The new HR application improved performance, usability,
						and reliability across the board. Processing speed for
						large HR datasets increased by 40%, while downtime and
						latency were reduced due to more efficient API and
						database design. The HR department reported improved
						workflow efficiency and employee satisfaction.
					</p>

					<blockquote
						style={{
							fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
							lineHeight: 1.6,
							color: "#222",
							fontWeight: 500,
							fontStyle: "italic",
							padding: "30px 25px",
							backgroundColor: "#fff",
							borderRadius: "20px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							borderLeft: "5px solid #222",
							margin: "40px 0",
						}}
					>
						"The new system feels like night and day. We're no
						longer held back by clunky sheets or slow processing
						times. Our team can finally focus on people, not
						process."
						<footer
							style={{
								marginTop: "15px",
								fontSize: "1rem",
								color: "#555",
								fontWeight: 400,
								fontStyle: "normal",
							}}
						>
							— Internal HR Staff Member
						</footer>
					</blockquote>
				</motion.div>

				{/* Technologies Used */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						backgroundColor: "#fff",
						borderRadius: "20px",
						padding: "30px 25px",
						marginBottom: "60px",
						boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
					}}
				>
					<h3
						style={{
							fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
							fontWeight: 600,
							marginBottom: "20px",
							color: "#222",
						}}
					>
						Technologies Used
					</h3>

					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "10px",
						}}
					>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#faf9f6",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							React.js
						</span>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#faf9f6",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							CSS
						</span>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#faf9f6",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							.NET Core / C#
						</span>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#faf9f6",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							Microsoft Azure
						</span>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#faf9f6",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							SQL Server
						</span>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#faf9f6",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							Git + Azure DevOps
						</span>
						<span
							style={{
								padding: "8px 16px",
								backgroundColor: "#faf9f6",
								borderRadius: "100px",
								fontSize: "0.9rem",
								color: "#555",
								boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
							}}
						>
							Figma
						</span>
					</div>
				</motion.div>

				{/* Footer Navigation */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "15px",
					}}
				>
					<Link
						to="/#projects"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							textDecoration: "none",
							color: "#222",
							fontWeight: 600,
							padding: "12px 24px",
							backgroundColor: "#fff",
							borderRadius: "100px",
							boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
							transition: "transform 0.3s, box-shadow 0.3s",
						}}
						onMouseOver={(e) => {
							e.currentTarget.style.transform = "scale(1.05)";
							e.currentTarget.style.boxShadow =
								"0 6px 16px rgba(0, 0, 0, 0.08)";
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.transform = "scale(1)";
							e.currentTarget.style.boxShadow =
								"0 4px 12px rgba(0, 0, 0, 0.05)";
						}}
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M19 12H5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M12 19L5 12L12 5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						Back to All Projects
					</Link>

					<button
						onClick={() =>
							window.scrollTo({top: 0, behavior: "smooth"})
						}
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							border: "none",
							background: "#fff",
							color: "#222",
							fontWeight: 600,
							padding: "12px 24px",
							borderRadius: "100px",
							boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
							cursor: "pointer",
							transition: "transform 0.3s, box-shadow 0.3s",
						}}
						onMouseOver={(e) => {
							e.currentTarget.style.transform = "scale(1.05)";
							e.currentTarget.style.boxShadow =
								"0 6px 16px rgba(0, 0, 0, 0.08)";
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.transform = "scale(1)";
							e.currentTarget.style.boxShadow =
								"0 4px 12px rgba(0, 0, 0, 0.05)";
						}}
					>
						Back to Top
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 19V5"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 12L12 5L19 12"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
			</section>
		</div>
	);
};

export default CaseStudy2;
