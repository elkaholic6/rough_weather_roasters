import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
	coffeeBagImage: string;
}

export function HeroSection({ coffeeBagImage }: HeroSectionProps) {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
			{/* Dark gradient background */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#2A1A14] via-[#1a1410] to-[#0F0F0F]" />

			{/* Subtle texture overlay */}
			<div className="absolute inset-0 opacity-20">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(196,106,43,0.15),transparent_50%)]" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center max-w-6xl mx-auto">
				{/* 3D Coffee Bag without rotation animation */}
				<motion.div
					className="mb-12 w-full max-w-md"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					<div className="relative">
						<ImageWithFallback
							src={coffeeBagImage}
							alt="Rough Weather Roasters Coffee Bag"
							className="w-full h-auto rounded-2xl drop-shadow-[0_20px_80px_rgba(196,106,43,0.4)]"
						/>
						{/* Campfire glow effect */}
						<div className="absolute inset-0 bg-gradient-radial from-[#C46A2B] via-transparent to-transparent opacity-30 blur-3xl -z-10" />
					</div>
				</motion.div>

				{/* Hero Text */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3 }}
				>
					<h1 className="text-white mb-6">Coffee For the Willing.</h1>
					<p className="text-[#C8C8C8] mb-12 max-w-2xl mx-auto">
						Fuel for climbers, hikers, paddlers, wanderers — the ones who choose
						the challenge.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="px-8 py-4 bg-[#C46A2B] text-white rounded-lg hover:bg-[#d4753a] transition-colors shadow-lg"
						>
							Shop Coffee
						</motion.button>
						<motion.a
							href="#roasts"
							whileHover={{ x: 5 }}
							className="text-[#C8C8C8] hover:text-[#C46A2B] transition-colors underline underline-offset-4"
						>
							Explore the Roasts →
						</motion.a>
					</div>
				</motion.div>
			</div>

			{/* Bottom gradient fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
		</section>
	);
}
