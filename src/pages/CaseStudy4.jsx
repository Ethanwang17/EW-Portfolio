import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const CaseStudy4 = () => {
	return (
		<div
			className="case-study-four"
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
					padding: "24px 40px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
				}}
			>
				<Link
					to="/"
					style={{
						display: "flex",
						alignItems: "center",
						gap: "10px",
						textDecoration: "none",
						color: "#222",
						fontWeight: 600,
						fontSize: "0.95rem",
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
							src="/images/Mindscape Icon.png"
							alt="Mindscape Icon"
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
							Mindscape Project
						</span>
						<span style={{color: "#777"}}>•</span>
						<span style={{color: "#777"}}>2024</span>
					</div>
				</div>
			</motion.nav>

			{/* Hero Section - Split Layout */}
			<section
				style={{
					maxWidth: "1400px",
					margin: "0 auto",
					padding: "80px 40px",
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: "60px",
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
							fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
							fontWeight: 700,
							lineHeight: 1.1,
							marginBottom: "30px",
						}}
					>
						MindScape
					</h1>

					<p
						style={{
							fontSize: "1.1rem",
							lineHeight: 1.6,
							color: "#555",
							marginBottom: "40px",
							maxWidth: "500px",
						}}
					>
						A digital health platform designed to bridge the gap in
						mental health monitoring by shifting from subjective
						self-reporting to real-time, biometric-driven insights.
						This project addresses the rising need for early mental
						health intervention and empowers individuals with
						actionable, data-informed tools for emotional
						well-being.
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
							Product Strategy
						</span>
					</div>
				</motion.div>

				{/* Right Side - Hero Image */}
				<motion.div
					initial={{opacity: 0, x: 30}}
					animate={{opacity: 1, x: 0}}
					transition={{duration: 0.7, delay: 0.2}}
					style={{
						borderRadius: "20px",
						overflow: "hidden",
						height: "500px",
						boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
					}}
				>
					<img
						src="/images/placeholder-hero.jpg"
						alt="Project Hero"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</motion.div>
			</section>

			{/* Overview Section - With Large Stats */}
			<section
				style={{
					backgroundColor: "#fff",
					padding: "80px 0",
				}}
			>
				<div
					style={{
						maxWidth: "1200px",
						margin: "0 auto",
						padding: "0 40px",
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
								fontSize: "2.2rem",
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
								gridTemplateColumns: "repeat(3, 1fr)",
								gap: "30px",
								marginBottom: "60px",
							}}
						>
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
										fontSize: "2.8rem",
										fontWeight: 700,
										marginBottom: "10px",
										color: "#222",
									}}
								>
									85%
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									confidence rate in early detection metrics
									from user testing
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
										fontSize: "2.8rem",
										fontWeight: 700,
										marginBottom: "10px",
										color: "#222",
									}}
								>
									12,000+
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									data samples analyzed across test dashboards
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
										fontSize: "2.8rem",
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
									of users indicated improved awareness of
									mental health signals
								</p>
							</div>
						</div>

						<p
							style={{
								fontSize: "1.1rem",
								lineHeight: 1.7,
								color: "#555",
								maxWidth: "800px",
								margin: "0 auto 30px",
								textAlign: "center",
							}}
						>
							MindScape is an innovative app that leverages
							wearable data, machine learning, and health
							dashboards to detect early signs of mental health
							concerns like anxiety. Built with the goal of
							empowering individuals to proactively manage their
							mental well-being, the platform offers insights from
							biometric patterns and identifies anomalies through
							AI.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Content Sections with Timeline Approach */}
			<section
				style={{
					maxWidth: "1000px",
					margin: "0 auto",
					padding: "80px 40px",
				}}
			>
				{/* Challenge Section */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						marginBottom: "100px",
						position: "relative",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "-60px",
							top: "0",
							width: "40px",
							height: "40px",
							borderRadius: "50%",
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							fontSize: "1.2rem",
							fontWeight: "700",
							color: "#222",
						}}
					>
						1
					</div>
					<h2
						style={{
							fontSize: "2.2rem",
							fontWeight: 700,
							marginBottom: "30px",
							color: "#222",
						}}
					>
						The Challenge
					</h2>

					<p
						style={{
							fontSize: "1.05rem",
							lineHeight: 1.7,
							color: "#555",
							marginBottom: "30px",
						}}
					>
						Traditional mental health monitoring relies heavily on
						subjective self-reporting, which often fails to capture
						real-time symptoms or subtle biometric changes. This
						results in delayed interventions and missed
						opportunities for preventative care.
					</p>

					<div
						style={{
							backgroundColor: "#fff",
							padding: "30px",
							borderRadius: "20px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							marginBottom: "30px",
						}}
					>
						<h3
							style={{
								fontSize: "1.3rem",
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
									fontSize: "1.05rem",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Reducing reliance on subjective self-reports
							</li>
							<li
								style={{
									fontSize: "1.05rem",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Identifying biometric outliers accurately and
								meaningfully
							</li>
							<li
								style={{
									fontSize: "1.05rem",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Addressing potential misuse and ethical concerns
								in AI diagnosis
							</li>
						</ul>
					</div>

					<motion.div
						whileHover={{scale: 1.03}}
						transition={{duration: 0.3}}
						style={{
							borderRadius: "20px",
							overflow: "hidden",
							height: "350px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
						}}
					>
						<img
							src="/images/placeholder-image.jpg"
							alt="📉 Challenge visualization: Timeline showing the delay between symptom onset and self-reporting vs. biometric alerts"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</motion.div>
				</motion.div>

				{/* Research Section */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						marginBottom: "100px",
						position: "relative",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "-60px",
							top: "0",
							width: "40px",
							height: "40px",
							borderRadius: "50%",
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							fontSize: "1.2rem",
							fontWeight: "700",
							color: "#222",
						}}
					>
						2
					</div>
					<h2
						style={{
							fontSize: "2.2rem",
							fontWeight: 700,
							marginBottom: "30px",
							color: "#222",
						}}
					>
						Research & Discovery
					</h2>

					<p
						style={{
							fontSize: "1.05rem",
							lineHeight: 1.7,
							color: "#555",
							marginBottom: "30px",
						}}
					>
						Our research combined interviews, literature reviews,
						and prototype testing. We explored the role of AI in
						mental health diagnosis, user comfort with biometric
						monitoring, and the accuracy of current wearable data
						analytics.
					</p>

					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(2, 1fr)",
							gap: "20px",
							marginBottom: "30px",
						}}
					>
						<motion.div
							whileHover={{scale: 1.03}}
							transition={{duration: 0.3}}
							style={{
								borderRadius: "20px",
								overflow: "hidden",
								height: "250px",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							}}
						>
							<img
								src="/images/placeholder-image.jpg"
								alt="🧠 Research image 1: Heatmap of app user engagement"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>
						</motion.div>

						<motion.div
							whileHover={{scale: 1.03}}
							transition={{duration: 0.3}}
							style={{
								borderRadius: "20px",
								overflow: "hidden",
								height: "250px",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							}}
						>
							<img
								src="/images/placeholder-image.jpg"
								alt="📊 Research image 2: Interview word cloud on trust in AI"
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
								}}
							/>
						</motion.div>
					</div>

					<div
						style={{
							backgroundColor: "#fff",
							padding: "30px",
							borderRadius: "20px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
						}}
					>
						<h3
							style={{
								fontSize: "1.3rem",
								fontWeight: 600,
								marginBottom: "15px",
								color: "#222",
							}}
						>
							Key Insights:
						</h3>
						<p
							style={{
								fontSize: "1.05rem",
								lineHeight: 1.6,
								color: "#555",
								marginBottom: "20px",
							}}
						>
							AI can detect anxiety symptoms with up to 92%
							accuracy. Therapists see AI as a tool to ease
							workload. Users trust AI but worry about incorrect
							predictions. Clear data presentation and outlier
							transparency are essential.
						</p>
					</div>
				</motion.div>

				{/* Solution Section */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						marginBottom: "100px",
						position: "relative",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "-60px",
							top: "0",
							width: "40px",
							height: "40px",
							borderRadius: "50%",
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							fontSize: "1.2rem",
							fontWeight: "700",
							color: "#222",
						}}
					>
						3
					</div>
					<h2
						style={{
							fontSize: "2.2rem",
							fontWeight: 700,
							marginBottom: "30px",
							color: "#222",
						}}
					>
						The Solution
					</h2>

					<p
						style={{
							fontSize: "1.05rem",
							lineHeight: 1.7,
							color: "#555",
							marginBottom: "40px",
						}}
					>
						MindScape offers a personal mental health dashboard
						hosted on Splunk that collects data from IoT/wearable
						devices, categorizes it, and uses machine learning to
						highlight health anomalies. The mobile-friendly app
						features user customization and clear visual insights.
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
								padding: "30px",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							}}
						>
							<h3
								style={{
									fontSize: "1.4rem",
									fontWeight: 600,
									marginBottom: "15px",
									color: "#222",
								}}
							>
								Biometric Data Aggregation
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Syncs with wearable devices to collect
								continuous health data.
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
								padding: "30px",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							}}
						>
							<h3
								style={{
									fontSize: "1.4rem",
									fontWeight: 600,
									marginBottom: "15px",
									color: "#222",
								}}
							>
								Machine Learning Insights
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Detects and highlights outliers like abnormal
								heart rates or sleep patterns.
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
								padding: "30px",
								boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							}}
						>
							<h3
								style={{
									fontSize: "1.4rem",
									fontWeight: 600,
									marginBottom: "15px",
									color: "#222",
								}}
							>
								Customizable Dashboards
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Users can track metrics, personalize their
								profile, and explore trends over time.
							</p>
						</motion.div>
					</div>

					<motion.div
						whileHover={{scale: 1.02}}
						transition={{duration: 0.3}}
						style={{
							borderRadius: "20px",
							overflow: "hidden",
							height: "500px",
							boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
						}}
					>
						<img
							src="/images/placeholder-image.jpg"
							alt="📱 Solution showcase: Mobile dashboard displaying sleep, heart rate, and activity trends with outlier highlights"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
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
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "-60px",
							top: "0",
							width: "40px",
							height: "40px",
							borderRadius: "50%",
							backgroundColor: "#fff",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
							fontSize: "1.2rem",
							fontWeight: "700",
							color: "#222",
						}}
					>
						4
					</div>
					<h2
						style={{
							fontSize: "2.2rem",
							fontWeight: 700,
							marginBottom: "30px",
							color: "#222",
						}}
					>
						Results & Impact
					</h2>

					<p
						style={{
							fontSize: "1.05rem",
							lineHeight: 1.7,
							color: "#555",
							marginBottom: "30px",
						}}
					>
						MindScape's success stems from its combination of
						personalized insights and transparent analytics. With
						strong user validation and a scalable Splunk backend,
						the app offers a viable prototype for future development
						and enterprise integration.
					</p>

					<blockquote
						style={{
							fontSize: "1.3rem",
							lineHeight: 1.6,
							color: "#222",
							fontWeight: 500,
							fontStyle: "italic",
							padding: "30px 40px",
							backgroundColor: "#fff",
							borderRadius: "20px",
							boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
							borderLeft: "5px solid #222",
							margin: "40px 0",
						}}
					>
						🗣️ "MindScape helped me visualize my stress patterns in
						a way I never could before. I now know when to take
						breaks before it's too late."
						<footer
							style={{
								marginTop: "15px",
								fontSize: "1rem",
								color: "#555",
								fontWeight: 400,
								fontStyle: "normal",
							}}
						>
							— Early user tester
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
						padding: "40px",
						marginBottom: "60px",
						boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
					}}
				>
					<h3
						style={{
							fontSize: "1.4rem",
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
							React (Frontend)
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
							Node.js (Backend + API integration)
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
							Splunk (Data analysis dashboard)
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
							Figma (UI/UX prototyping)
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
							HealthKit + IoT APIs (Biometric data input)
						</span>
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true}}
					transition={{duration: 0.6}}
					style={{
						padding: "60px",
						borderRadius: "20px",
						backgroundColor: "#fff",
						boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
						textAlign: "center",
						marginBottom: "60px",
					}}
				>
					<h2
						style={{
							fontSize: "2rem",
							fontWeight: 700,
							marginBottom: "20px",
							color: "#222",
						}}
					>
						Let's Work Together
					</h2>
					<p
						style={{
							fontSize: "1.1rem",
							lineHeight: 1.6,
							color: "#555",
							marginBottom: "30px",
							maxWidth: "600px",
							margin: "0 auto 30px",
						}}
					>
						Interested in collaborating on a similar project? I'd
						love to hear from you!
					</p>
					<Link
						to="/contact"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "10px",
							textDecoration: "none",
							color: "#222",
							fontWeight: 600,
							padding: "14px 30px",
							backgroundColor: "#faf9f6",
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
						Get in Touch
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5 12H19"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M12 5L19 12L12 19"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</motion.div>

				{/* Footer Navigation */}
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Link
						to="/"
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

export default CaseStudy4;
