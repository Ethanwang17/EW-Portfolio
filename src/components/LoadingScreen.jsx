import {
	Terminal,
	TypingAnimation,
	AnimatedSpan,
} from "@/components/magicui/terminal";
import {motion} from "framer-motion";
import {useState, useEffect} from "react";

export default function LoadingScreen({onLoadingComplete}) {
	const [showWelcome, setShowWelcome] = useState(false);
	const [showSystem, setShowSystem] = useState(false);
	const [showTech1, setShowTech1] = useState(false);
	const [showTech2, setShowTech2] = useState(false);
	const [showTech3, setShowTech3] = useState(false);
	const [showTech4, setShowTech4] = useState(false);
	const [showTech5, setShowTech5] = useState(false);
	const [showTech6, setShowTech6] = useState(false);
	const [showComplete, setShowComplete] = useState(false);

	useEffect(() => {
		const sequence = async () => {
			setShowWelcome(true);

			await new Promise((resolve) => setTimeout(resolve, 400));
			setShowSystem(true);

			await new Promise((resolve) => setTimeout(resolve, 400));
			setShowTech1(true);

			await new Promise((resolve) => setTimeout(resolve, 400));
			setShowTech2(true);

			await new Promise((resolve) => setTimeout(resolve, 400));
			setShowTech3(true);

			await new Promise((resolve) => setTimeout(resolve, 400));
			setShowTech4(true);

			await new Promise((resolve) => setTimeout(resolve, 400));
			setShowTech5(true);

			await new Promise((resolve) => setTimeout(resolve, 400));
			setShowTech6(true);

			await new Promise((resolve) => setTimeout(resolve, 400));
			setShowComplete(true);

			await new Promise((resolve) => setTimeout(resolve, 4500));
			onLoadingComplete();
		};

		sequence();
	}, [onLoadingComplete]);

	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			className="fixed inset-0 flex items-center justify-center bg-background"
		>
			<Terminal className="w-[90%] max-w-[600px]">
				{showWelcome && (
					<TypingAnimation delay={0} duration={30}>
						&gt; Welcome to Ethan Wang's Portfolio...
					</TypingAnimation>
				)}

				{showSystem && (
					<AnimatedSpan delay={1500}>
						Loading Skill Tree...
					</AnimatedSpan>
				)}

				{showTech1 && (
					<AnimatedSpan delay={1750} className="text-green-500">
						✓ HTML5 & CSS3
					</AnimatedSpan>
				)}

				{showTech2 && (
					<AnimatedSpan delay={2000} className="text-green-500">
						✓ React.js
					</AnimatedSpan>
				)}

				{showTech3 && (
					<AnimatedSpan delay={2250} className="text-green-500">
						✓ JavaScript
					</AnimatedSpan>
				)}

				{showTech4 && (
					<AnimatedSpan delay={2500} className="text-green-500">
						✓ UI/UX Design
					</AnimatedSpan>
				)}

				{showTech5 && (
					<AnimatedSpan delay={2750} className="text-green-500">
						✓ SQL & Databases
					</AnimatedSpan>
				)}

				{showTech6 && (
					<AnimatedSpan delay={3000} className="text-green-500">
						✓ .NET & C#
					</AnimatedSpan>
				)}

				{showComplete && (
					<TypingAnimation delay={3250} duration={30}>
						Loading complete! Redirecting...
					</TypingAnimation>
				)}
			</Terminal>
		</motion.div>
	);
}
