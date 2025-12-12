import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface StorySectionProps {
	backgroundImage: string;
}

export function StorySection({ backgroundImage }: StorySectionProps) {
	return (
		<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<ImageWithFallback
					src={backgroundImage}
					alt="Cloudy Mountain Background"
					className="w-full h-full object-cover"
				/>
				{/* Dark semi-transparent overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#1E392A]/70 to-[#0F0F0F]/80" />
			</div>

			{/* Grain overlay */}
			<div className="grain-overlay absolute inset-0" />

			{/* Content */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center"
			>
				<h2 className="text-white mb-8">Made for the ones who keep going.</h2>
				<p className="text-[#C8C8C8] text-xl max-w-3xl mx-auto leading-relaxed">
					Rough Weather Roasters is inspired by the people who don't wait for
					perfect weather. You climb anyway. You paddle anyway. You push anyway.
					Your coffee should match your grit.
				</p>

				{/* Decorative elements */}
				<div className="mt-12 flex items-center justify-center gap-4">
					<div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C46A2B]" />
					<div className="w-2 h-2 bg-[#C46A2B] rotate-45" />
					<div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C46A2B]" />
				</div>
			</motion.div>
		</section>
	);
}
