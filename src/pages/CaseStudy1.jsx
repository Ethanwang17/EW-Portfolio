import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const CaseStudy1 = () => {
	return (
		<div
			className="case-study-one"
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
							src="/images/placeholder-icon.png"
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
						Ticket Genie: Real-Time Show Alerts through Web Scraping
						& Discord Automation
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
						A bot-powered solution for real-time discovery of newly
						released tickets on two private entertainment platforms.
						Ticket Genie eliminates the need for manual checking by
						monitoring FillASeat Las Vegas and House Seats Las Vegas
						24/7 and delivering personalized show alerts directly
						via Discord. This project matters because it transforms
						how users engage with time-sensitive membership
						benefits—bringing automation, customization, and cloud
						deployment into a seamless notification system.
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
									95%
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									uptime maintained over 3 months of
									continuous Heroku deployment, ensuring
									reliable show monitoring and delivery
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
									direct messages sent to users with new show
									alerts, helping them act quickly on
									limited-availability events
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
									60%
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									of active users customized their
									notifications using the in-app blacklist
									feature, highlighting the value of
									personalization
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
							Ticket Genie is an automated system that
							continuously scrapes private ticketing platforms
							(FillASeat and House Seats Las Vegas), stores
							real-time data in a PostgreSQL database, and sends
							personalized Discord notifications to users about
							newly available shows. The system includes blacklist
							functionality, allowing users to customize what
							notifications they receive, and is deployed on
							Heroku for reliable uptime.
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
						Manually checking for new entertainment listings on
						invite-only platforms is tedious, unreliable, and often
						results in missed opportunities. Users wanted instant
						updates and better personalization.
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
								Automating login, scraping, and parsing of
								websites with varying formats (JSONP, HTML)
							</li>
							<li
								style={{
									fontSize: "1.05rem",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Delivering notifications without overwhelming
								users
							</li>
							<li
								style={{
									fontSize: "1.05rem",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Providing per-user customization for alerts in a
								group communication environment (Discord)
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
							alt="📉 Challenge visualization: Flowchart of the time-consuming manual process vs. automated Ticket Genie system"
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
						The development process involved researching API-less
						scraping, handling authentication, managing rate limits,
						and balancing efficient data checks with timely user
						alerts. Focus was placed on Discord user experience,
						command interaction design, and database schema
						efficiency.
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
								alt="🧠 Research image 1: Architecture diagram of bots, Discord, and database"
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
								alt="📊 Research image 2: Database table relationships between shows, users, and blacklists"
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
							Shows are time-sensitive and need &lt;3 min alert
							delivery for high value. Blacklist features are
							essential for managing user fatigue. Hosting on
							Heroku with Procfile ensures background job support
							and environment flexibility.
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
						A two-bot system (one for each platform) developed in
						Python, designed to run asynchronously, identify new
						shows, and notify users in near real-time with full
						database tracking and Discord interactivity.
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
								Automated Scrapers for FillASeat & House Seats
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Each bot handles login, parsing, and show
								extraction every 2–3 minutes.
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
								User-Specific Notification System
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Uses slash commands and user-specific blacklists
								to send DM alerts only for unfiltered shows.
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
								Cloud-Based Architecture
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Deployed to Heroku using a Procfile, with
								persistent PostgreSQL integration and
								environment-based secrets for security.
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
							alt="📱 Solution showcase: Screenshot of Discord alerts with interactive buttons and slash commands"
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
						Ticket Genie has been running continuously on Heroku,
						serving real-time alerts to a private Discord server.
						User testing confirmed increased satisfaction and
						decreased time spent browsing ticket websites.
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
						🗣️ "I used to miss shows all the time. Now I get pings
						on Discord the second something drops—it's perfect."
						<footer
							style={{
								marginTop: "15px",
								fontSize: "1rem",
								color: "#555",
								fontWeight: 400,
								fontStyle: "normal",
							}}
						>
							— Avid FillASeat user
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
							Python (Scraping & Bot Logic)
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
							Discord API (py-cord) (Notification & Slash
							Commands)
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
							PostgreSQL (Show and user data tracking)
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
							Requests & Regex (Web scraping and JSONP parsing)
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
							asyncio / subprocess (Concurrent bot execution)
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
							Heroku (Deployment & background process management)
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
							psycopg2-binary, pytz (Database & time zone
							handling)
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

export default CaseStudy1;
