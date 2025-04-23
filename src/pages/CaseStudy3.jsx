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
							src="/images/xscape-icon-placeholder.png"
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
							X-Scape
						</span>
						<span style={{color: "#777"}}>•</span>
						<span style={{color: "#777"}}>Web Platform</span>
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
						X-Scape
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
						height: "500px",
					}}
				>
					<img
						src="/images/X-Scape Hero Mockup.png"
						alt="X-Scape Hero"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "contain",
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

						<p
							style={{
								fontSize: "1.1rem",
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
							carbon offsetting resources—all through an intuitive
							and educational platform.
						</p>

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
									users served through live deployment and
									campus demos
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
						The transportation sector is the largest source of
						greenhouse gas (GHG) emissions in the U.S., yet most
						people are unaware of how their individual travel
						choices contribute to this.
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
								Lack of transparency in how much carbon is
								emitted per travel mode
							</li>
							<li
								style={{
									fontSize: "1.05rem",
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
									fontSize: "1.05rem",
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
								borderRadius: "20px",
								overflow: "hidden",
								height: "auto",
								// boxShadow: "0 6px 25px rgba(0, 0, 0, 0.06)",
							}}
						>
							<img
								src="/images/X-Scape Research.png"
								alt="X-Scape Research slide showing green house gas emissions from transportation"
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
						<ul style={{paddingLeft: "20px"}}>
							<li
								style={{
									fontSize: "1.05rem",
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
									fontSize: "1.05rem",
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
									fontSize: "1.05rem",
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
						We created X-Scape, a responsive web application that
						educates and empowers users to reduce their carbon
						footprint through smarter travel.
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
								Carbon Emission Calculator
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Users enter their origin and destination and
								instantly view CO₂ emissions by car, plane, and
								train.
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
								Greener Travel Recommendations
							</h3>
							<p
								style={{
									fontSize: "1rem",
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
								Offset Integration
							</h3>
							<p
								style={{
									fontSize: "1rem",
									lineHeight: 1.6,
									color: "#555",
								}}
							>
								Provides links to verified carbon offsetting
								programs for direct action.
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
							// boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
						}}
					>
						<img
							src="/images/X-Scape Web Layout.png"
							alt="🌍 Solution showcase: Screenshot of X-Scape app showing travel route and emission comparison"
							style={{
								width: "100%",
								height: "auto",
								objectFit: "contain",
								// borderRadius: "20px",
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
						X-Scape was launched to the public via xscape.web.app
						and received strong feedback from students, educators,
						and sustainability advocates.
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
						🗣️ "This project transformed the way I think about
						travel. I had no idea how much my daily choices added up
						until I saw it clearly laid out."
						<footer
							style={{
								marginTop: "15px",
								fontSize: "1rem",
								color: "#555",
								fontWeight: 400,
								fontStyle: "normal",
							}}
						>
							— User from UW Capstone Showcase
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
							React (Frontend UI)
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
							Node.js (Backend logic)
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
							Express (API handling)
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
							Firebase (Hosting + Database)
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
							Google Maps API (Travel data & route mapping)
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
							Figma (UI/UX design and prototyping)
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
						Interested in discussing projects or opportunities? I'd
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

export default CaseStudy3;
