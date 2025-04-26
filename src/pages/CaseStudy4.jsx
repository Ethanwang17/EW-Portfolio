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
						<span style={{color: "#777"}}>Capstone Project</span>
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
						MindScape addresses the limitations of self-reported
						mental health tracking by introducing a biometric-driven
						approach to emotional well-being. Through wearable
						integration and machine learning, MindScape provides
						more accurate, timely insights—bridging the gap between
						preventative care and early detection. This matters
						because early intervention in mental health can
						significantly improve long-term outcomes.
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
							IOS Development
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
							Machine Learning
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
						// boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
					}}
				>
					<img
						src="/images/Mindscape Hero Mockup.png"
						alt="Mindscape health monitoring dashboard showing biometric data visualization"
						style={{
							// width: "100%",
							height: "100%",
							objectFit: "cover",
							objectPosition: "center",
							display: "block",
							margin: "0 auto",
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
									user confidence in design and feature
									usefulness after testing
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
									10,000+
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									biometric data points processed for
									validation
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
									improvement in user understanding of their
									mental health patterns
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
							MindScape is a digital health platform that
							leverages biometric data, Apple Health integration,
							and machine learning to detect early signs of mental
							health concerns. The system offers a personal
							dashboard hosted on Splunk that highlights outlier
							data such as irregular sleep patterns or abnormal
							heart rates. With a secure login, user
							personalization, and future chatbot integration
							planned, MindScape empowers users to take charge of
							their mental well-being in an accessible,
							data-informed way.
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
								Making biometric data understandable and
								actionable
							</li>
							<li
								style={{
									fontSize: "1.05rem",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Addressing ethical and privacy concerns around
								AI-driven analysis
							</li>
						</ul>
					</div>

					{/* <motion.div
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
							src="/images/Mindscape Challenge Timeline.png"
							alt="Challenge visualization: Problem timeline showing delay from symptom onset to traditional reporting vs. biometric detection"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
					</motion.div> */}
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
							marginBottom: "30px",
						}}
					>
						<motion.div
							whileHover={{scale: 1.03}}
							transition={{duration: 0.3}}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: "20px",
								overflow: "hidden",
								height: "auto",
								// boxShadow: "0 6px 25px rgba(0, 0, 0, 0.06)",
							}}
						>
							<img
								src="/images/Mindscape Research Dashboard.png"
								alt="Splunk Dashboard showing Heart Rate Outliers, Steps Taken by Time, and another metric with outliers"
								style={{
									width: "75%",
									height: "75%",
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
							AI can detect anxiety with 92% accuracy
						</p>
						<p
							style={{
								fontSize: "1.05rem",
								lineHeight: 1.6,
								color: "#555",
								marginBottom: "20px",
							}}
						>
							Users have high confidence in AI but require clarity
							and transparency
						</p>
						<p
							style={{
								fontSize: "1.05rem",
								lineHeight: 1.6,
								color: "#555",
								marginBottom: "20px",
							}}
						>
							Metrics must be clearly defined and customizable to
							be useful
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
								Health Dashboard
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Intuitive visualizations for sleep, activity,
								and heart rate patterns with alerts for
								anomalies.
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
								Personalized User Profiles
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Users can change names and profile pictures and
								access private dashboards securely.
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
								Machine Learning Analysis
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								ML models categorize and highlight biometric
								outliers for early issue detection.
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
							src="/images/Mindscape iPhone Layout.png"
							alt="Solution showcase: MindScape mobile view with Splunk-powered charts and outlier detection"
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
						"The dashboard made it so much easier to notice when my
						stress levels were spiking. I've never had that kind of
						visibility before."
						<footer
							style={{
								marginTop: "15px",
								fontSize: "1rem",
								color: "#555",
								fontWeight: 400,
								fontStyle: "normal",
							}}
						>
							— Early tester
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
							React Native
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
							Xcode
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
							Splunk
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
							Apple HealthKit
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
							Python
						</span>
					</div>
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
						onClick={() => window.scrollTo(0, 0)}
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
