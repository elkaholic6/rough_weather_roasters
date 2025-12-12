import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ScrollRevealSectionProps {
	coffeeBagImage: string;
	coffeeBeansImage: string;
	forestBackground: string;
}

export function ScrollRevealSection({
	coffeeBagImage,
	coffeeBeansImage,
	forestBackground,
}: ScrollRevealSectionProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const bagY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
	const bagRotate = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
	const beansY = useTransform(scrollYProgress, [0.3, 1], [-50, 300]);
	const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

	return (
		<section
			ref={containerRef}
			className="relative min-h-screen flex items-center justify-center overflow-hidden"
		>
			{/* Forest background */}
			<div className="absolute inset-0">
				<ImageWithFallback
					src={forestBackground}
					alt="Rainy Forest Vista"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F] via-[#1E392A]/90 to-[#0F0F0F]" />
			</div>

			{/* Content */}
			<motion.div
				style={{ opacity }}
				className="relative z-10 flex flex-col items-center px-6 py-20"
			>
				{/* Open coffee bag */}
				<motion.div
					style={{ y: bagY, rotateX: bagRotate }}
					className="relative w-full max-w-lg mb-20"
				>
					<ImageWithFallback
						src={coffeeBagImage}
						alt="Open Coffee Bag"
						className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
					/>
				</motion.div>

				{/* Text overlay */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center max-w-3xl"
				>
					<h2 className="text-white mb-4">
						Crafted for harsh mornings, long climbs, and wild places.
					</h2>
				</motion.div>
			</motion.div>

			{/* Grain overlay */}
			<div className="grain-overlay absolute inset-0 pointer-events-none" />
		</section>
	);
}
