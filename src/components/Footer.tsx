import { motion } from "motion/react";
import { Tent, Compass, Lightbulb } from "lucide-react";

export function Footer() {
	const navLinks = [
		{ name: "Shop", href: "#shop" },
		{ name: "Our Story", href: "#story" },
		{ name: "Brewing Guide", href: "#guide" },
		{ name: "Contact", href: "#contact" },
	];

	const socialIcons = [
		{ Icon: Tent, label: "Instagram", href: "#" },
		{ Icon: Compass, label: "Facebook", href: "#" },
		{ Icon: Lightbulb, label: "Twitter", href: "#" },
	];

	return (
		<footer className="relative bg-gradient-to-b from-[#2A1A14] to-[#0F0F0F] py-16 px-6">
			{/* Grain overlay */}
			<div className="grain-overlay absolute inset-0" />

			<div className="relative max-w-7xl mx-auto">
				{/* Newsletter Signup */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12 pb-12 border-b border-[#C46A2B]/20"
				>
					<h3 className="text-white mb-4">Join the Expedition</h3>
					<p className="text-[#C8C8C8] mb-6">
						Get trail updates, new roasts, and outdoor stories.
					</p>

					<form className="max-w-md mx-auto flex gap-3">
						<input
							type="email"
							placeholder="your@email.com"
							className="flex-1 px-4 py-3 bg-[#1E392A]/30 border border-[#C46A2B]/30 rounded-lg text-white placeholder:text-[#C8C8C8]/50 focus:outline-none focus:border-[#C46A2B] transition-colors"
						/>
						<button
							type="submit"
							className="px-6 py-3 bg-[#C46A2B] text-white rounded-lg hover:bg-[#d4753a] transition-colors"
						>
							Subscribe
						</button>
					</form>
				</motion.div>

				{/* Footer Content Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
					{/* Logo & Tagline */}
					<div>
						<h4 className="text-white mb-3">Rough Weather Roasters</h4>
						<p className="text-[#C8C8C8]">Coffee for the willing.</p>
					</div>

					{/* Navigation Links */}
					<div>
						<h4 className="text-white mb-4">Navigate</h4>
						<ul className="space-y-2">
							{navLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										className="text-[#C8C8C8] hover:text-[#C46A2B] transition-colors"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social Icons */}
					<div>
						<h4 className="text-white mb-4">Connect</h4>
						<div className="flex gap-4">
							{socialIcons.map((social, index) => (
								<motion.a
									key={index}
									href={social.href}
									whileHover={{ scale: 1.1, rotate: 5 }}
									whileTap={{ scale: 0.95 }}
									className="p-3 bg-[#1E392A]/30 rounded-full border border-[#C46A2B]/30 hover:border-[#C46A2B] hover:bg-[#C46A2B]/20 transition-all group"
									aria-label={social.label}
								>
									<social.Icon className="w-5 h-5 text-[#C8C8C8] group-hover:text-[#C46A2B] transition-colors" />
								</motion.a>
							))}
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="text-center pt-8 border-t border-[#C46A2B]/20">
					<p className="text-[#C8C8C8]">
						© 2025 Rough Weather Roasters. For the ones who keep going.
					</p>
				</div>
			</div>
		</footer>
	);
}
