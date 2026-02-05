import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Award, Shield } from 'lucide-react';

export default function RetailFoundationRepair() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fcs-navy to-fcs-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Retail Store Foundation Repair Dallas | Keep Your Business Open</h1>
          <p className="text-xl mb-8">Protect your investment and ensure continuous operation with expert foundation repair services.</p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <Award className="text-fcs-orange" size={24} />
              <span>BBB A+ Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-fcs-green" size={24} />
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-fcs-orange" size={24} />
              <span>Lifetime Warranty</span>
            </div>
          </div>
          <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            <Phone className="mr-2" size={20} /> Call for a Free Inspection: 469-402-1038
          </Button>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Maintaining the Structural Integrity of Your Retail Establishment</h2>
          <p className="text-lg text-gray-700 mb-4">Maintaining the structural integrity of your retail establishment is paramount to its success. Foundation issues, if left unaddressed, can lead to significant operational disruptions, safety hazards, and substantial financial losses. FCS Foundation Repair understands the unique challenges faced by retail businesses in Dallas-Fort Worth. With over 25 years of experience, a BBB A+ rating, and 295+ positive reviews, we specialize in providing prompt, reliable, and minimally disruptive <strong>retail store foundation repair</strong> services. Our goal is to ensure your business remains open and operational, safeguarding your investment and customer experience. We prioritize customer safety and ADA compliance, addressing potential trip hazards proactively. Trust FCS Foundation Repair to deliver professional appearance and lasting solutions with a lifetime warranty. Call us today at 469-402-1038 for a comprehensive assessment.</p>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Common Foundation Problems Affecting Retail Properties</h2>
          <p className="text-lg text-gray-700 mb-4">Retail properties are particularly susceptible to foundation problems due to heavy foot traffic, constant inventory movement, and often expansive building footprints. Common issues include differential settlement, slab cracks, and bowing walls, all exacerbated by the region's fluctuating soil conditions. These problems manifest as uneven floors, sticking doors and windows, and visible cracks in walls or ceilings, creating significant trip hazards for customers and staff. Beyond safety concerns, these structural flaws detract from your store's professional appearance, potentially impacting customer perception and sales. Moreover, unaddressed foundation damage can lead to costly inventory damage, plumbing leaks, and even compromise the building's overall structural stability, making ADA compliance a constant challenge. Early detection and intervention are crucial to mitigate these risks and prevent minor issues from escalating into major, business-threatening crises. FCS Foundation Repair's expert team is adept at identifying these subtle signs of distress before they cause significant operational interruption.</p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Advanced Solutions for Retail Foundation Repair</h2>
          <p className="text-lg text-gray-700 mb-4">FCS Foundation Repair offers a comprehensive suite of advanced solutions tailored to the specific needs of retail properties. Our approach begins with a thorough, no-obligation inspection to accurately diagnose the root cause and extent of the foundation damage. This involves a detailed assessment of the property's exterior and interior, including soil analysis, elevation measurements, and a review of any existing structural reports. Based on this comprehensive assessment, we develop a customized repair plan utilizing industry-leading techniques such as steel pier installation, concrete pilings, or slab jacking. Each method is chosen based on the specific soil conditions, structural requirements, and the extent of the damage to ensure the most effective and long-lasting solution.</p>
          <p className="text-lg text-gray-700 mb-4"><strong>Steel Pier Installation:</strong> This is one of the most reliable and widely used methods for stabilizing foundations in expansive clay soils common in the Dallas-Fort Worth area. Steel piers are hydraulically driven deep into the ground until they reach stable bedrock or a load-bearing stratum. Once the desired depth is achieved, hydraulic jacks are used to lift the foundation to its original elevation, and the piers are then secured. This method provides robust, long-term support, effectively stabilizing the foundation and preventing further settlement. It is particularly effective for severe settlement issues and offers a permanent solution.</p>
          <p className="text-lg text-gray-700 mb-4"><strong>Concrete Pilings:</strong> Similar to steel piers, concrete pilings offer a durable solution, especially suitable for heavier structures or specific soil compositions. These pilings are typically pre-cast concrete cylinders driven or poured into the ground to provide foundational support. The choice between steel and concrete often depends on geological factors, project scope, and engineering recommendations. Both methods are designed to transfer the building's weight to more stable soil layers, preventing future movement.</p>
          <p className="text-lg text-gray-700 mb-4"><strong>Slab Jacking (Polyjacking/Mudjacking):</strong> For minor settlement or uneven concrete slabs, slab jacking offers a less invasive and often quicker solution. This process involves drilling small holes into the affected concrete slab and injecting a specialized material (either a cementitious grout for mudjacking or a high-density polyurethane foam for polyjacking) beneath the slab. The injected material expands, lifting and leveling the concrete surface. This method is ideal for eliminating trip hazards, restoring a professional appearance, and improving drainage with minimal disruption to your retail operations. It's a cost-effective solution for localized issues.</p>
          <p className="text-lg text-gray-700 mb-4">All our repair methods are designed to be efficient, ensuring minimal impact on your daily operations. We understand the importance of maintaining customer safety and ADA compliance, and our solutions are engineered to address these critical aspects. Our commitment to quality is backed by a lifetime warranty, providing you with peace of mind and a secure investment. We also provide detailed post-repair guidance and maintenance tips to ensure the longevity of the repair. Contact us at 469-402-1038 to discuss the best solution for your retail establishment and schedule a free, no-obligation inspection.</p>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Case Study: Minimizing Disruption for a Dallas Boutique</h2>
          <p className="text-lg text-gray-700 mb-4">A prominent Dallas-area boutique, experiencing significant foundation settlement, faced potential closure due to severe interior cracking and uneven flooring that posed serious trip hazards. The owner, concerned about customer safety and maintaining ADA compliance, contacted FCS Foundation Repair. Our team conducted a detailed structural analysis, identifying extensive differential settlement beneath the sales floor and storage areas. We proposed a targeted steel pier installation plan, strategically placing piers to stabilize the affected sections. Throughout the project, our priority was to minimize disruption to the boutique's operations. We implemented a phased approach, working during off-hours and cordoning off small sections at a time, allowing the store to remain open for business. Our meticulous execution ensured that the repair work was completed efficiently and cleanly, with no impact on the boutique's professional appearance. Post-repair, the floors were level, cracks were repaired, and the boutique successfully passed its ADA compliance inspection. The owner praised FCS Foundation Repair for our professionalism, efficiency, and commitment to keeping their business operational, highlighting our ability to deliver lasting solutions without compromising their customer experience. This project exemplifies our dedication to providing top-tier <strong>retail store foundation repair</strong> that protects both property and profitability.</p>
        </div>
      </section>

      {/* Stay Open Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Keep Your Business Running: Our Commitment to Minimal Interruption</h2>
          <p className="text-lg text-gray-700 mb-4">At FCS Foundation Repair, we recognize that for retail businesses, time is money. Every hour your doors are closed due to repairs translates directly into lost revenue and customer inconvenience. That's why our entire process, from initial assessment to project completion, is designed to ensure minimal interruption to your operations. Our experienced project managers work closely with you to develop a repair schedule that accommodates your business hours, often performing work during evenings, weekends, or other low-traffic periods. We employ efficient techniques and state-of-the-art equipment to expedite the repair process without compromising quality. Our crews are trained to maintain a clean and safe work environment, mitigating any potential hazards and preserving your store's professional appearance. By choosing FCS Foundation Repair, you're partnering with a team that understands the critical importance of keeping your business running smoothly. We are committed to delivering effective <strong>retail store foundation repair</strong> solutions that allow you to focus on what you do best: serving your customers. Call 469-402-1038 today to learn how we can help you stay open.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Frequently Asked Questions About Retail Foundation Repair</h2>
          <div className="space-y-8 text-lg text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q: How long does a typical retail foundation repair take?</h3>
              <p>A: The duration of a retail foundation repair project can vary significantly based on the extent of the damage, the chosen repair method, and the size of the retail property. While some minor repairs, especially those involving slab jacking, might be completed within a day or two, more extensive projects requiring steel pier installation could take several days to a week. FCS Foundation Repair prioritizes efficiency and minimal disruption. We work closely with business owners to develop a repair schedule that accommodates their operational needs, often performing work during off-peak hours, evenings, or weekends to ensure your business can remain open and functional throughout the process. Our goal is to complete the repair swiftly without compromising on the quality or longevity of the solution.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q: Will the repair process disrupt my customers or inventory?</h3>
              <p>A: Minimizing disruption is a cornerstone of our commercial repair philosophy. We understand that any interruption can impact your bottom line. Our experienced project managers meticulously plan each phase of the repair to ensure the least possible impact on your customers and inventory. This includes implementing strategies such as phased work, where only small sections of the property are worked on at a time, careful site management to maintain cleanliness and safety, and scheduling work during non-business hours whenever feasible. We utilize protective barriers and clear signage to guide customers safely around work areas, and our crews are trained to be discreet and professional. Our goal is to ensure customer safety and maintain your store's professional appearance throughout the repair, allowing you to continue serving your clientele with minimal inconvenience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q: Is your work guaranteed?</h3>
              <p>A: Absolutely. FCS Foundation Repair stands firmly behind the quality and durability of our work. We offer a comprehensive lifetime transferable warranty on all foundation repairs. This warranty provides you with long-term peace of mind, knowing that your investment is protected and that we are committed to the lasting stability of your retail property. Our dedication to superior craftsmanship and reliable solutions is reflected in this industry-leading guarantee.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q: How do I know if my retail store has foundation problems?</h3>
              <p>A: Early detection of foundation problems can save significant time and money. Key indicators of foundation issues in a retail setting include uneven or sloping floors, cracks in the interior or exterior walls (especially stair-step cracks in brickwork), sticking doors and windows that no longer close properly, visible gaps between walls and ceilings or floors, and pooling water near the foundation. Additionally, any noticeable shifts in shelving or display units, or persistent plumbing leaks, could signal underlying foundation movement. Our experts offer free, no-obligation inspections that include a thorough assessment of these signs, along with advanced diagnostic techniques, to accurately identify any issues and their root causes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q: Are your repairs ADA compliant?</h3>
              <p>A: Yes, ensuring ADA compliance is a critical consideration in all our commercial foundation repair projects. Uneven floors, cracks, and thresholds created by foundation settlement can pose significant accessibility challenges and trip hazards, potentially leading to violations. Our repair solutions are specifically designed to eliminate these issues, restoring level surfaces and structural integrity to ensure your premises meet all current accessibility standards. We are committed to helping retail businesses provide a safe and accessible environment for all customers and employees.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q: What makes FCS Foundation Repair different from other companies?</h3>
              <p>A: FCS Foundation Repair distinguishes itself through a combination of unparalleled experience, proven reliability, and a customer-centric approach. With over 25 years in the industry, a stellar BBB A+ rating, and a track record of 295+ positive customer reviews, our reputation speaks for itself. We offer a lifetime transferable warranty, demonstrating our confidence in our work. Our commitment to minimal disruption, customer safety, and ADA compliance sets us apart, as does our specialized expertise in commercial properties. We provide tailored solutions, not one-size-fits-all approaches, ensuring the most effective and efficient repair for your specific needs. Our team is dedicated to protecting your business investment and ensuring its continuous operation.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q: How can I get a quote?</h3>
              <p>A: Obtaining a quote from FCS Foundation Repair is straightforward and obligation-free. Simply call our dedicated commercial services line at 469-402-1038. Our friendly and knowledgeable staff will assist you in scheduling a free, comprehensive inspection of your retail property. During this inspection, our experts will assess the foundation, diagnose any problems, and discuss the most appropriate repair solutions. Following the assessment, you will receive a detailed, transparent quote outlining the scope of work and associated costs, with no hidden fees. We believe in clear communication and empowering our clients with all the necessary information to make informed decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <CaseStudies propertyType="retail" />
      <Testimonials variant="commercial" />

      {/* CTA Section */}
      <section className="bg-fcs-blue text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Retail Investment?</h2>
          <p className="text-xl mb-8">Don't let foundation problems jeopardize your business. Contact FCS Foundation Repair today for a free, comprehensive inspection and a lasting solution.</p>
          <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            <Phone className="mr-2" size={20} /> Call Us Now: 469-402-1038
          </Button>
        </div>
      </section>
    </div>
  );
}
