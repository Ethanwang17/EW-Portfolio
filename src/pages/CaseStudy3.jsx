import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const CaseStudy3 = () => {
	return (
		<div
			className="case-study-three"
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
							src="/images/X-Scape Icon.png"
							alt="X-Scape Icon"
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
							X-Scape
						</span>
						<span style={{color: "#777"}}>•</span>
						<span style={{color: "#777"}}>Project</span>
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
						X-Scape
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
						A web app designed to tackle the growing impact of
						transportation-related carbon emissions. X-Scape helps
						users visualize their carbon footprint from travel and
						make informed, eco-conscious decisions. With climate
						change as a pressing global issue, this project provides
						an intuitive way for everyday users to engage with
						sustainability in travel.
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
						overflow: "hidden",
						height: "auto",
						maxWidth: "100%",
					}}
				>
					<img
						src="/images/X-Scape Hero Mockup.png"
						alt="X-Scape application interface showing eco-friendly transportation options"
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

						<p
							style={{
								fontSize: "clamp(1rem, 3vw, 1.1rem)",
								lineHeight: 1.7,
								color: "#555",
								maxWidth: "800px",
								margin: "0 auto 60px",
								textAlign: "center",
							}}
						>
							A sustainability-focused travel assistant that
							estimates carbon emissions across different travel
							methods, recommends greener alternatives, and offers
							carbon offsetting resources. All through an
							intuitive and educational platform.
						</p>

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
									85%
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									increase in awareness around carbon
									emissions in user testing
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
									95%
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									user satisfaction rate from feedback surveys
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
									40%
								</h3>
								<p
									style={{
										fontSize: "1rem",
										color: "#555",
									}}
								>
									of test users changed travel plans to reduce
									their emissions
								</p>
							</div>
						</div>
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
						The transportation sector is the largest source of
						greenhouse gas (GHG) emissions in the U.S., yet most
						people are unaware of how their individual travel
						choices contribute to this.
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
								Lack of transparency in how much carbon is
								emitted per travel mode
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Difficulty in comparing travel emissions and
								finding greener alternatives
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								No easy way to access reliable offsetting
								options from a single platform
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
						We started by studying how people currently plan travel
						and their awareness of carbon footprints. We interviewed
						users, analyzed EPA and carbon offsetting datasets, and
						evaluated existing tools.
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
								height: "auto",
							}}
						>
							<img
								src="/images/X-Scape Research.png"
								alt="X-Scape Research slide showing green house gas emissions from transportation"
								style={{
									width: "100%",
									maxWidth: "800px",
									height: "auto",
									objectFit: "contain",
								}}
							/>
						</motion.div>
					</div>

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
								Most users don't consider emissions unless the
								data is visible at the point of planning
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								Educating users visually and interactively
								increases their likelihood to choose
								eco-friendly options
							</li>
							<li
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
									lineHeight: 1.6,
									color: "#555",
									marginBottom: "10px",
								}}
							>
								People want to help the environment—but need
								actionable, easy-to-understand guidance
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
						We created X-Scape, a responsive web application that
						educates and empowers users to reduce their carbon
						footprint through smarter travel and eco-conscious
						choices.
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
						{/* Key Feature 1 */}
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
								Eco-Friendly Car Quiz
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Users complete a short, lifestyle-focused quiz
								and X-Scape recommends the best low-emission
								vehicle options.
							</p>
						</motion.div>

						{/* Key Feature 2 */}
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
								Greener Travel Recommendations
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Suggests lower-emission travel alternatives and
								encourages behavioral change.
							</p>
						</motion.div>

						{/* Key Feature 3 */}
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
								Car Compare Tool
							</h3>
							<p
								style={{
									fontSize: "clamp(0.95rem, 3vw, 1rem)",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Empowers users to line up multiple vehicles
								side-by-side. Helping shoppers pinpoint the most
								sustainable car that fits their budget and
								lifestyle.
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
							src="/images/X-Scape Web Layout.png"
							alt="Solution showcase: Screenshot of X-Scape app showing travel route and emission comparison"
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
							marginBottom: "15px",
						}}
					>
						X-Scape was launched to the public and received strong
						feedback from students, educators, and sustainability
						advocates.
					</p>

					<a
						href="https://xscape.web.app"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: "8px",
							backgroundColor: "#222",
							color: "#fff",
							fontWeight: 600,
							padding: "12px 20px",
							borderRadius: "8px",
							textDecoration: "none",
							marginBottom: "30px",
							boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
							transition:
								"transform 0.3s, box-shadow 0.3s, background-color 0.3s",
						}}
						onMouseOver={(e) => {
							e.currentTarget.style.transform = "scale(1.03)";
							e.currentTarget.style.boxShadow =
								"0 6px 16px rgba(0, 0, 0, 0.15)";
							e.currentTarget.style.backgroundColor = "#444";
						}}
						onMouseOut={(e) => {
							e.currentTarget.style.transform = "scale(1)";
							e.currentTarget.style.boxShadow =
								"0 4px 12px rgba(0, 0, 0, 0.1)";
							e.currentTarget.style.backgroundColor = "#222";
						}}
					>
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							style={{marginRight: "4px"}}
						>
							<path
								d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						View the X-Scape Website
					</a>

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
						"This project transformed the way I think about travel.
						I had no idea how much my daily choices added up until I
						saw it clearly laid out."
						<footer
							style={{
								marginTop: "15px",
								fontSize: "1rem",
								color: "#555",
								fontWeight: 400,
								fontStyle: "normal",
							}}
						>
							— X-Scape user
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
							React
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
							Firebase
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

export default CaseStudy3;
