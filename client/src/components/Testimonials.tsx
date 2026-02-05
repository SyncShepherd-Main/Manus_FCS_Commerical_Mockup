import { Star } from 'lucide-react';

interface TestimonialProps {
  variant?: 'commercial' | 'general';
}

export default function Testimonials({ variant = 'general' }: TestimonialProps) {
  const commercialTestimonials = [
    {
      name: "Adam H.",
      role: "Property Owner",
      text: "Joaquin Vasquez and the FCS team handled our complex project involving foundation leveling, plumbing, drainage regrading, and new concrete. Throughout the process, they were always accessible and very responsive to our questions and concerns. They offered detailed explanations for solutions, gave a variety of options, and have been great about helping us understand our property's foundation. I would highly recommend working with them.",
      rating: 5
    },
    {
      name: "TexPatriot",
      role: "Commercial Property, Comanche TX",
      text: "Rodrigo showed up on time from two hours away and completed a thorough inspection. Raul and his crew were efficient, knowledgeable and eager to start. The job was very big, but true to their word, the job was finished on schedule. The sheer amount of labor was mind boggling. I am astounded at the level of craftsmanship these professionals exhibited. I would recommend FCS without hesitation again and again.",
      rating: 5
    },
    {
      name: "Alex K.",
      role: "Business Owner",
      text: "We just had our foundation repaired by FCS Foundation Repair and we are very proud to have them repair our foundation. They did an excellent job and cleaned up after themselves. Highly recommend! Raul is the man!",
      rating: 5
    }
  ];

  const generalTestimonials = [
    {
      name: "Anam H.",
      role: "Recent Customer",
      text: "FCS was great to work with and a super fast response team! They helped us get a second opinion with honest and candid feedback. They are not going to try to 'sell' you like most other companies. They are honest and fair and care about the property's integrity and not about making a buck off of you. I highly recommend them!",
      rating: 5
    },
    {
      name: "Willie M.",
      role: "Satisfied Client",
      text: "Great customer service. They explained everything clearly and answered all my questions and concerns.",
      rating: 5
    },
    {
      name: "Macie K.",
      role: "Property Owner",
      text: "Russell was very helpful. He showed up on time and explained everything clearly.",
      rating: 5
    }
  ];

  const testimonials = variant === 'commercial' ? commercialTestimonials : generalTestimonials;

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#FF8C00] text-[#FF8C00]" />
              ))}
            </div>
            <span className="text-xl font-semibold text-gray-700">5.0 Stars</span>
          </div>
          <p className="text-gray-600">Based on 295+ Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-[#1E3A5F]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            <span className="font-semibold text-[#1E3A5F]">BBB A+ Rated</span> | 
            <span className="font-semibold text-[#1E3A5F]"> 25+ Years Experience</span> | 
            <span className="font-semibold text-[#1E3A5F]"> Lifetime Warranty</span>
          </p>
        </div>
      </div>
    </section>
  );
}
