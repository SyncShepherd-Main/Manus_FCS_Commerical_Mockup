import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Award, Shield } from 'lucide-react';

export default function RestaurantFoundationRepair() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fcs-navy to-fcs-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Restaurant Foundation Repair: Minimize Downtime & Protect Your Investment</h1>
          <p className="text-xl mb-8">Ensure the stability and longevity of your restaurant with FCS Foundation Repair.</p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center"><CheckCircle className="text-fcs-green mr-2" /> 25+ Years Experience</div>
            <div className="flex items-center"><Award className="text-fcs-orange mr-2" /> BBB A+ Rated</div>
            <div className="flex items-center"><Shield className="text-fcs-green mr-2" /> Lifetime Warranty</div>
          </div>
          <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            <Phone className="mr-2" /> Call for a Free Inspection: 469-402-1038
          </Button>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Introduction</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            For restaurant owners, a stable and safe environment is paramount. The foundation of your establishment is not just a structural component; it\'s the bedrock of your business operations, directly impacting everything from health code compliance to equipment stability and customer safety. In the dynamic and competitive restaurant industry of Dallas-Fort Worth, even minor structural issues can lead to significant operational disruptions, financial losses, and damage to your brand reputation. At FCS Foundation Repair, we understand these critical stakes. With over 25 years of dedicated experience in commercial foundation solutions, an impeccable A+ rating with the Better Business Bureau (BBB), and a strong track record evidenced by 295+ positive customer reviews, we stand as the trusted authority in commercial foundation repair. We offer comprehensive, tailored solutions specifically designed to address the unique challenges faced by restaurant establishments. Our primary goal is to minimize any potential downtime for your business, protect your valuable assets, and ensure the long-term structural integrity and success of your restaurant. Our unwavering commitment to delivering superior quality and lasting results is further underscored by our lifetime transferable warranty, providing you with unparalleled peace of mind. We invite you to contact us today at 469-402-1038 for a complimentary, no-obligation inspection and expert consultation. Let us help you secure your restaurant\'s future from the ground up.
          </p>
        </div>
      </section>

      {/* Common Problems Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Common Problems</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Restaurants are particularly susceptible to foundation issues due to a combination of heavy equipment, constant foot traffic, and specific operational demands. Common problems include:
          </p>
          
          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Health Codes & Drainage Issues</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Kitchens, with their frequent spills and rigorous cleaning schedules, often experience significant moisture exposure. Poor drainage can lead to water pooling around the foundation, causing soil expansion and contraction, which puts immense stress on the structure. This can result in cracks, uneven floors, and potential health code violations if water seeps into unwanted areas, fostering mold or pest infestations. Maintaining a dry and stable foundation is critical for passing inspections and ensuring a hygienic environment.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Equipment Stability & Vibration</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Heavy kitchen equipment, such as industrial ovens, refrigerators, and dishwashers, exerts considerable weight on the foundation. Any settlement or shifting can lead to uneven surfaces, compromising the stability and operational efficiency of these expensive machines. Vibrations from HVAC systems or other machinery can exacerbate existing foundation weaknesses, leading to further structural damage and potential equipment malfunction. This not only impacts productivity but can also lead to costly repairs or premature replacement of essential kitchen appliances.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">High Traffic & Structural Stress</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Restaurants experience continuous foot traffic from staff and customers, placing constant stress on floors and foundations. Over time, this can contribute to wear and tear, leading to cracks, sinking floors, and structural instability. These issues can create tripping hazards, affect the aesthetic appeal of your dining area, and ultimately deter customers. Addressing these problems promptly is crucial to maintaining a safe and inviting atmosphere for your patrons.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Solutions</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            FCS Foundation Repair offers a range of advanced and customized solutions to address the specific foundation challenges of restaurants. Our approach focuses on long-term stability and minimal disruption to your business operations.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Steel Pier Installation</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            For significant settlement, we often recommend steel pier foundation repair. These piers are driven deep into the ground to reach stable bedrock or load-bearing strata, effectively transferring the weight of your structure to a more secure base. This method provides robust, long-lasting support and is ideal for stabilizing foundations experiencing severe sinking or shifting. Our expert technicians ensure precise installation, minimizing disruption to your restaurant\'s interior.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Helical Pier Installation</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Helical piers are an excellent solution for lighter structural loads or when soil conditions require a different approach. These screw-like piles are twisted into the ground until they reach stable soil, offering strong support and resistance to both compressive and tensile forces. Helical piers are particularly effective in areas with expansive clay soils, common in Dallas-Fort Worth, and can be installed quickly with minimal excavation, making them suitable for projects with tight deadlines.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Concrete Pier Installation</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            For certain soil types and structural requirements, concrete piers can provide a reliable and cost-effective solution. These piers are constructed by excavating holes and filling them with reinforced concrete, creating a solid support system. Our team carefully assesses your specific situation to determine if concrete piers are the most appropriate solution, ensuring optimal stability and durability for your restaurant\'s foundation.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Drainage Correction & Waterproofing</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Addressing the root cause of moisture-related foundation problems is crucial. We implement comprehensive drainage solutions, including French drains, surface drains, and grading adjustments, to divert water away from your foundation. Additionally, we offer waterproofing services to protect your foundation from water intrusion, preventing future damage and ensuring compliance with health and safety regulations. Proper drainage is key to maintaining a stable foundation and preventing costly recurring issues.
          </p>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Case Study: The Bistro on Main</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The Bistro on Main, a popular upscale restaurant in downtown Dallas, began experiencing significant foundation settlement, leading to uneven floors in their dining area and kitchen. This not only created an unsightly appearance but also posed a safety risk to staff and customers, and threatened the stability of their expensive kitchen equipment. Health inspectors had also raised concerns about potential water pooling issues near the back entrance.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            FCS Foundation Repair was called in to assess the situation. Our team conducted a thorough inspection, utilizing advanced diagnostic tools to identify the extent of the damage and the underlying causes. We determined that expansive clay soils, coupled with inadequate drainage around the building, were contributing to the severe settlement.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Our proposed solution involved a combination of steel pier installation to stabilize the main dining area and kitchen, along with a comprehensive drainage correction system to redirect water away from the foundation. We worked closely with The Bistro\'s management to schedule the repairs during their off-peak hours and a short closure period, ensuring minimal disruption to their business. Our crew completed the project efficiently and professionally, restoring the foundation to its original stability.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Post-repair, The Bistro on Main reported perfectly level floors, improved equipment stability, and successfully passed all health inspections. The restaurant\'s management praised FCS Foundation Repair for our professionalism, efficiency, and the long-lasting quality of our work. This project exemplifies our commitment to providing tailored solutions that protect our clients\' investments and ensure their continued success.
          </p>
        </div>
      </section>

      {/* Revenue Protection Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Revenue Protection</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Foundation issues can severely impact a restaurant\'s revenue through various channels. Uneven floors and visible cracks can deter customers, leading to a decline in patronage and negative reviews. Structural instability can compromise the safety of your establishment, potentially leading to costly liability claims or even temporary closure by regulatory bodies. Furthermore, damaged foundations can lead to expensive repairs for plumbing, electrical systems, and even kitchen equipment, adding to operational costs.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            By investing in professional foundation repair with FCS Foundation Repair, you are not just fixing a structural problem; you are safeguarding your revenue stream. Our timely and effective solutions prevent minor issues from escalating into major crises, ensuring your restaurant remains open, safe, and appealing to customers. Our lifetime transferable warranty further protects your investment, providing long-term financial security and peace of mind. Don\'t let foundation problems eat into your profits – partner with FCS Foundation Repair to protect your business.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">FAQ</h2>
          
          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Q: How long does restaurant foundation repair typically take?</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A: The duration of the repair depends on the severity of the damage and the chosen solution. At FCS Foundation Repair, we understand the critical need for minimal disruption in the restaurant industry. Therefore, we prioritize quick turnaround times and offer flexible scheduling options, including after-hours work, to ensure your restaurant\'s operating hours are impacted as little as possible. Following our initial comprehensive inspection, we will provide you with a detailed and transparent timeline for the entire repair process.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Q: Will my restaurant need to close during the repair process?</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A: We understand the paramount importance of continuous operation for restaurants. Our goal is always to implement solutions that allow your business to remain open. In many cases, we can isolate work areas or schedule repairs during off-peak hours or short, planned closure periods. We work closely with each client to develop a repair plan that minimizes any impact on your revenue, customer experience, and daily operations. Your business continuity is our priority.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Q: What are the signs of foundation problems in a restaurant?</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A: Common signs of foundation issues in a restaurant include uneven or sloping floors, noticeable cracks in walls or ceilings (especially around door and window frames), doors and windows that stick or are difficult to open and close, visible gaps between walls and floors, and standing water around the exterior foundation. If you observe any of these indicators, it is crucial to seek a professional foundation inspection promptly to prevent further damage and costly repairs.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Q: How does FCS Foundation Repair ensure health code compliance?</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A: Our comprehensive drainage correction and waterproofing solutions are specifically engineered to prevent moisture accumulation around and beneath your foundation. Excess moisture is a primary contributor to health code violations related to mold growth, mildew, and pest infestations. By ensuring a dry and stable foundation environment, we help you maintain a hygienic operation that consistently meets and exceeds health and safety regulations.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Q: Do you offer a warranty on your commercial foundation repair services?</h3>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            A: Absolutely. All our commercial foundation repair services are backed by a robust lifetime transferable warranty. This warranty is a testament to our confidence in the superior quality, durability, and effectiveness of our workmanship and the materials we use. It provides you with long-term assurance, protecting your investment and offering complete peace of mind for the lifetime of your restaurant\'s foundation.
          </p>
        </div>
      </section>

      <CaseStudies propertyType="restaurant" />
      <Testimonials variant="commercial" />

      {/* CTA Section */}
      <section className="bg-fcs-navy text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Protect Your Restaurant\'s Future Today!</h2>
          <p className="text-xl mb-8">Don\'t let foundation problems compromise your business. Contact FCS Foundation Repair for expert solutions.</p>
          <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            <Phone className="mr-2" /> Get Your Free Inspection: 469-402-1038
          </Button>
        </div>
      </section>
    </div>
  );
}
