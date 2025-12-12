import { HeroSection } from "./components/HeroSection";
import { ScrollRevealSection } from "./components/ScrollRevealSection";
import { OutdoorShowcase } from "./components/OutdoorShowcase";
import { ProductSection } from "./components/ProductSection";
import { StorySection } from "./components/StorySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";

function App() {
	// Images
	// Use BASE_URL so local assets work with GitHub Pages subpath
	const coffeeBagImage = `${
		import.meta.env.BASE_URL
	}rough_weather_roasters_bag.png`;
	const coffeeBeansImage =
		"https://images.unsplash.com/photo-1553698249-0e3f9263ffa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMGRhcmt8ZW58MXx8fHwxNzY1NTE0MzA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
	const forestBackground =
		"https://images.unsplash.com/photo-1628759969226-6f5d30a460b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMG1vdW50YWluJTIwZm9yZXN0fGVufDF8fHx8MTc2NTQzMjM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
	const mountainBackground =
		"https://images.unsplash.com/photo-1628759969226-6f5d30a460b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMG1vdW50YWluJTIwZm9yZXN0fGVufDF8fHx8MTc2NTQzMjM2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

	const showcaseImages = [
		{
			src: "https://images.unsplash.com/photo-1705805546173-b95c8503560b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJlciUyMG1pc3QlMjBjbGlmZnxlbnwxfHx8fDE3NjU1MzgwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			alt: "Rock climber scaling a wet cliff in mist",
		},
		{
			src: "https://images.unsplash.com/photo-1760641011250-d29cbc5d4bf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXlha2VyJTIwZGFyayUyMHJpdmVyfGVufDF8fHx8MTc2NTUzODAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			alt: "Kayaker on a dark river under low clouds",
		},
		{
			src: "https://images.unsplash.com/photo-1541962359032-102cc2d1cf02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtlcnMlMjByYWluJTIwZm9yZXN0fGVufDF8fHx8MTc2NTUzODAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			alt: "Hikers in hooded jackets during rain",
		},
		{
			src: "https://images.unsplash.com/photo-1652655147093-b1810170c12c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wZmlyZSUyMGZvcmVzdCUyMG5pZ2h0fGVufDF8fHx8MTc2NTUzODAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
			alt: "Campfire glowing dimly under trees",
		},
	];

	const testimonials = [
		{
			quote:
				"This coffee fuels my 5am climbs. Strong, bold, and never lets me down.",
			author: "Sarah M.",
			image:
				"https://images.unsplash.com/photo-1570043996260-ef9cfa8b8bcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwYWR2ZW50dXJlJTIwYmFja3BhY2t8ZW58MXx8fHwxNzY1NTM4MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			quote:
				"Perfect for those rainy mornings on the trail. Tastes like determination.",
			author: "Jake R.",
			image:
				"https://images.unsplash.com/photo-1541962359032-102cc2d1cf02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtlcnMlMjByYWluJTIwZm9yZXN0fGVufDF8fHx8MTc2NTUzODAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
		{
			quote:
				"The only coffee that keeps up with my adventures. Bold and uncompromising.",
			author: "Emma L.",
			image:
				"https://images.unsplash.com/photo-1705805546173-b95c8503560b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwY2xpbWJlciUyMG1pc3QlMjBjbGlmZnxlbnwxfHx8fDE3NjU1MzgwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
		},
	];

	return (
		<div className="min-h-screen bg-[#0F0F0F]">
			<HeroSection coffeeBagImage={coffeeBagImage} />
			<ScrollRevealSection
				coffeeBagImage={coffeeBagImage}
				coffeeBeansImage={coffeeBeansImage}
				forestBackground={forestBackground}
			/>
			<OutdoorShowcase images={showcaseImages} />
			<ProductSection coffeeBagImage={coffeeBagImage} />
			<StorySection backgroundImage={mountainBackground} />
			<TestimonialsSection testimonials={testimonials} />
			<Footer />
		</div>
	);
}

export default App;
