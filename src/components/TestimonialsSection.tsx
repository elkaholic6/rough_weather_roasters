import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Testimonial {
  quote: string;
  author: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0F0F0F] to-[#1a1410]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Voices from the Trail</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Polaroid-style frame */}
              <div className="bg-[#C8C8C8] p-4 pb-16 shadow-2xl hover:shadow-[0_20px_50px_rgba(196,106,43,0.3)] transition-shadow duration-300 relative">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Cinematic grading overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E392A]/40 to-transparent mix-blend-multiply" />
                </div>

                {/* Quote */}
                <div className="text-[#2A1A14] px-2">
                  <p className="mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-right">– {testimonial.author}</p>
                </div>

                {/* Worn edges effect */}
                <div className="absolute inset-0 border-2 border-[#2A1A14]/10 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
