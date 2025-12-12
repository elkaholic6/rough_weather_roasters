import { motion } from 'motion/react';
import { Mountain, Compass, Waves } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  name: string;
  subtitle: string;
  icon: typeof Mountain;
  image: string;
}

interface ProductSectionProps {
  coffeeBagImage: string;
}

export function ProductSection({ coffeeBagImage }: ProductSectionProps) {
  const products: Product[] = [
    {
      name: 'Summit Roast',
      subtitle: 'Dark + rugged',
      icon: Mountain,
      image: coffeeBagImage,
    },
    {
      name: 'Trailblazer Medium',
      subtitle: 'Balanced + bold',
      icon: Compass,
      image: coffeeBagImage,
    },
    {
      name: 'River Run Light',
      subtitle: 'Smooth + energetic',
      icon: Waves,
      image: coffeeBagImage,
    },
  ];

  return (
    <section id="roasts" className="relative py-24 px-6 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Our Roasts</h2>
          <p className="text-[#C8C8C8]">Choose your fuel for the trail ahead.</p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card Background */}
              <div className="relative bg-gradient-to-br from-[#2A1A14] to-[#1a1410] rounded-xl p-8 border border-[#C46A2B]/20 hover:border-[#C46A2B]/60 transition-all duration-300 overflow-hidden">
                {/* Grain overlay */}
                <div className="grain-overlay absolute inset-0" />
                
                {/* Wood grain texture effect */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 2px,
                    rgba(200,200,200,0.1) 2px,
                    rgba(200,200,200,0.1) 4px
                  )`
                }} />

                {/* Icon */}
                <div className="relative flex justify-center mb-6">
                  <div className="p-3 bg-[#C46A2B]/20 rounded-full">
                    <product.icon className="w-8 h-8 text-[#C46A2B]" />
                  </div>
                </div>

                {/* 3D Coffee Bag with rotation */}
                <motion.div
                  animate={{ rotateY: [0, 15, -15, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative mb-6"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto drop-shadow-[0_15px_40px_rgba(196,106,43,0.3)]"
                  />
                  {/* Rim light effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C46A2B]/20 to-transparent blur-xl" />
                </motion.div>

                {/* Product Info */}
                <div className="relative text-center">
                  <h3 className="text-white mb-2">{product.name}</h3>
                  <p className="text-[#C8C8C8]">{product.subtitle}</p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#C46A2B]/0 group-hover:bg-[#C46A2B]/5 transition-all duration-300 rounded-xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
