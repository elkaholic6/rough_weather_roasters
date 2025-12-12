import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ShowcaseImage {
  src: string;
  alt: string;
}

interface OutdoorShowcaseProps {
  images: ShowcaseImage[];
}

export function OutdoorShowcase({ images }: OutdoorShowcaseProps) {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0F0F0F] via-[#1a1410] to-[#0F0F0F]">
      <div className="max-w-7xl mx-auto">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6">
            Built for the outdoors. Roasted for adventure.
          </h2>
          <p className="text-[#C8C8C8] max-w-3xl mx-auto">
            Our beans are small-batch roasted with a bold flavor profile strong enough to cut through cold air, early mornings, and long miles.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg aspect-[3/4]"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark overlay with earthy tones */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E392A]/80 via-[#2A1A14]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Grain effect */}
              <div className="grain-overlay absolute inset-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
