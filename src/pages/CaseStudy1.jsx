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
							src="/images/Ticket Genie Icon.png"
							alt="Ticket Genie Icon"
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
							Ticket Genie
						</span>
						<span style={{color: "#777"}}>•</span>
						<span style={{color: "#777"}}>Software Engineer</span>
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
						Ticket Genie: Real-Time Show Alerts
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
							Data Scraping
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
							Automation Engineering
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
							Real-Time Systems
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
						height: "auto",
						maxWidth: "100%",
					}}
				>
					<img
						src="/images/Ticket Genie Hero Mockup.png"
						alt="Ticket Genie Discord bot interface showing alert notifications"
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
										fontSize: "clamp(2rem, 6vw, 2.8rem)",
										fontWeight: 700,
										marginBottom: "10px",
										color: "#222",
									}}
								>
									1,000+
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
										fontSize: "clamp(2rem, 6vw, 2.8rem)",
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
								fontSize: "clamp(1rem, 3vw, 1.1rem)",
								lineHeight: 1.7,
								color: "#555",
								maxWidth: "800px",
								margin: "0 auto 30px",
								textAlign: "center",
							}}
						>
							Ticket Genie is a cloud-hosted, two-bot system that
							keeps a constant pulse on two invite-only ticket
							platforms and pushes personalized Discord alerts the
							moment new performances drop. Running 24/7 on Heroku
							with a PostgreSQL backbone, it marries fast,
							headless scraping with per-user preferences so
							members never miss limited-availability shows again.
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
						Manually hunting for tickets on private entertainment
						sites is a race against the clock and a chore that
						drains enthusiasm. Listings appear at unpredictable
						hours, disappear just as quickly, and live behind login
						walls that defeat ordinary RSS or push-notification
						tools.
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
								Automating login, scraping, and parsing of
								websites with varying formats
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
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
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Providing per-user customization for alerts in a
								group communication environment
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
						The development process involved researching API-less
						scraping, handling authentication, managing rate limits,
						and balancing efficient data checks with timely user
						alerts. Focus was placed on Discord user experience,
						command interaction design, and database schema
						efficiency.
					</p>

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
								Show alerts are time-sensitive and need &lt;3
								min alert delivery for high value
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Blacklist / keyword filters to stop unwanted
								genres or venues from flooding DMs
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Slash-command interface (/blacklist add "Magic
								Show", /alerts pause) so non-technical users
								could self-service settings without bot
								restarts.
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
								Automated Scrapers for FillASeat & House Seats
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
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
								User-Specific Notification System
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
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
								Cloud-Based Architecture
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
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
							height: "auto",
							maxWidth: "100%",
							marginBottom: "40px",
						}}
					>
						<img
							src="/images/Ticket Genie Solution Image.png"
							alt="Solution showcase: Screenshot of Discord alerts with interactive buttons and slash commands"
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
						Ticket Genie has been running continuously on Heroku,
						serving real-time alerts to a private Discord server.
						User testing confirmed increased satisfaction and
						decreased time spent browsing ticket websites.
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
						"I used to cycle through both sites all day to see
						sold-out notices. Now Ticket Genie pings me and tickets
						are secured with no stress."
						<footer
							style={{
								marginTop: "15px",
								fontSize: "1rem",
								color: "#555",
								fontWeight: 400,
								fontStyle: "normal",
							}}
						>
							— Avid Ticket Genie user
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
							Python
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
							Discord API
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
							PostgreSQL
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
							Selenium
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
							Heroku
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

export default CaseStudy1;
