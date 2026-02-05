import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Award, Shield } from 'lucide-react';

export default function IndustrialFoundationRepair() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2C5F8D] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industrial Foundation Repair | Heavy-Duty Solutions</h1>
          <p className="text-xl mb-8">FCS Foundation Repair: Over 25 Years of Expertise in Industrial Foundation Solutions</p>
          <div className="flex justify-center items-center space-x-6 mb-8 flex-wrap gap-4">
            <div className="flex items-center"><CheckCircle className="text-[#4A7C59] mr-2" /> BBB A+ Rated</div>
            <div className="flex items-center"><Award className="text-[#FF8C00] mr-2" /> 25+ Years Experience</div>
            <div className="flex items-center"><Shield className="text-[#4A7C59] mr-2" /> Lifetime Warranty</div>
          </div>
          <Button className="bg-[#FF8C00] hover:bg-[#4A7C59] text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            <Phone className="mr-2" /> Call for a Free Estimate: 469-402-1038
          </Button>
        </div>
      </section>
      
      {/* Content sections */}
      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Introduction</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Industrial facilities face unique foundation challenges that demand specialized expertise and heavy-duty solutions. At FCS Foundation Repair, we bring over 25 years of experience serving manufacturing plants, processing facilities, and industrial complexes throughout the Dallas-Fort Worth metroplex. Our team understands the critical importance of maintaining structural integrity in environments where heavy machinery, precision equipment alignment, and continuous production operations are paramount. Industrial foundation problems can lead to costly downtime, equipment damage, and safety hazards that impact your bottom line and workforce safety.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            The expansive clay soils common in North Texas, combined with the extreme loads imposed by industrial equipment, create a challenging environment for foundation stability. Whether your facility houses CNC machines requiring precise leveling, heavy presses exerting concentrated loads, or conveyor systems spanning large distances, foundation settlement can compromise operational efficiency and equipment longevity. FCS Foundation Repair specializes in engineered solutions designed to handle the demanding requirements of industrial applications, ensuring your facility maintains the structural stability necessary for safe, efficient operations. Our commitment to minimal disruption means we work around your production schedule, often performing repairs during planned maintenance windows or off-shifts to keep your operations running.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Common Industrial Foundation Problems</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Industrial foundations endure some of the most severe stresses of any commercial structure. **Differential settlement** caused by expansive clay soils is exacerbated by the concentrated loads from heavy machinery, often weighing tens of thousands of pounds. This uneven settlement manifests as floor slabs that develop cracks, slopes, or depressions, directly impacting equipment alignment and operational precision. Manufacturing equipment requiring tolerances measured in thousandths of an inch becomes unreliable when the foundation beneath shifts even slightly.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            **Equipment misalignment** is one of the most costly consequences of foundation movement. CNC machines, stamping presses, injection molding equipment, and assembly line machinery all depend on precise leveling and alignment. When foundations settle unevenly, equipment must be constantly re-leveled and recalibrated, leading to increased maintenance costs, reduced product quality, and accelerated wear on machinery components. In severe cases, misaligned equipment can produce defective products or suffer catastrophic failure.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            **Vibration damage** presents another significant challenge. Industrial operations generate constant vibrations from machinery, material handling equipment, and production processes. These vibrations can accelerate foundation deterioration, particularly in areas where the soil has already begun to settle. Over time, this creates a destructive cycle where vibration causes further settlement, which in turn allows more vibration transmission, leading to progressive structural degradation.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Additional problems include **slab cracking** that creates trip hazards and allows moisture intrusion, **column settlement** that compromises structural load paths, **loading dock separation** that impedes logistics operations, and **floor joint deterioration** that accelerates under forklift traffic. Recognizing these warning signs early and addressing them with professional foundation repair prevents minor issues from escalating into major operational disruptions and safety hazards.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Industrial-Strength Foundation Solutions</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            FCS Foundation Repair offers comprehensive, engineered solutions specifically designed for the demanding requirements of industrial facilities. Our approach begins with a thorough structural assessment conducted by experienced foundation specialists who understand industrial operations. We evaluate soil conditions, existing foundation design, load distributions, and operational requirements to develop a customized repair strategy that addresses both immediate concerns and long-term stability.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            For heavy machinery foundations and areas experiencing significant settlement, we employ **steel pier foundation systems**. These high-capacity piers are hydraulically driven deep into stable soil strata, often reaching depths of 20-30 feet or more. Steel piers provide exceptional load-bearing capacity, making them ideal for supporting concentrated equipment loads. The installation process is precisely controlled, allowing us to lift settled foundations back to their original elevation while ensuring equipment alignment is maintained or restored.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            **Helical pier systems** offer another effective solution, particularly for areas with limited access or where vibration must be minimized during installation. These screw-like piers are mechanically advanced into the soil, providing immediate load transfer without the hydraulic pressure required for steel piers. Helical piers excel in applications where precision installation is critical and can be installed with minimal disruption to ongoing operations.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            For floor slab repairs and areas requiring leveling, we utilize **polyurethane foam injection** technology. This advanced method involves injecting high-density structural foam beneath settled concrete slabs. The foam expands in a controlled manner, filling voids, compacting loose soils, and lifting the slab back to its proper elevation. Polyurethane injection offers rapid curing times—often allowing equipment to be returned to service within hours—and provides long-lasting support that resists moisture and maintains its structural properties indefinitely.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our solutions also address ancillary concerns such as **drainage improvements** to prevent future soil saturation, **control joint repair** to maintain slab integrity, and **underpinning** for structural columns and load-bearing walls. Every repair is backed by our comprehensive lifetime transferable warranty, demonstrating our confidence in the durability and effectiveness of our industrial foundation solutions. Our experienced crews work efficiently to minimize production disruption, often coordinating repairs during planned maintenance windows or working night shifts to keep your facility operational.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Case Study: Manufacturing Facility Precision Restoration</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A precision manufacturing facility in Arlington, Texas, specializing in aerospace components, faced a critical situation when foundation settlement began affecting their CNC machining center. The 80,000 square foot facility housed multiple five-axis CNC machines, each weighing over 40,000 pounds and requiring floor levelness within 0.001 inches per foot for optimal operation. Over several months, operators noticed increasing calibration issues, with parts beginning to fall outside tolerance specifications.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Our engineering team conducted a comprehensive foundation survey using laser leveling equipment and discovered differential settlement of up to 3 inches across the machine shop floor. The expansive clay soils beneath the facility had experienced significant shrinkage during a prolonged drought period, causing concentrated settlement under the heavy equipment pads. The facility manager faced a difficult decision: continue operations with increasing scrap rates and potential equipment damage, or shut down for extensive repairs.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            FCS Foundation Repair proposed a phased repair strategy that would allow continued operation of non-critical areas while addressing the most severe settlement zones first. We installed 47 high-capacity steel piers beneath the primary machine foundations, each pier designed to support loads exceeding 60,000 pounds. The piers were driven to depths of 28 feet, reaching stable soil strata unaffected by seasonal moisture variations. Simultaneously, we performed polyurethane foam injection across 12,000 square feet of floor slab to eliminate voids and restore proper floor elevation.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            The project was executed over four weeks, working exclusively during second and third shifts to minimize production impact. Our crews coordinated closely with the facility's maintenance team, ensuring that critical equipment could be safely relocated, repaired, and returned to service in sequence. Upon completion, laser surveys confirmed that all machine foundations were restored to within 0.0005 inches per foot—exceeding the equipment manufacturer's specifications.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            The results were immediate and dramatic. Scrap rates dropped by 73% within the first month, machine calibration intervals returned to normal schedules, and the facility reported zero equipment-related production delays in the six months following repair. The facility manager noted that the investment in proper foundation repair paid for itself within eight months through reduced scrap, decreased maintenance costs, and improved production efficiency. This project exemplifies FCS Foundation Repair's capability to deliver precision industrial foundation solutions that protect both structural assets and operational productivity.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Maintaining Production Continuity</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            At FCS Foundation Repair, we recognize that production downtime directly impacts your profitability and competitive position. Our industrial foundation repair services are specifically designed to minimize operational disruption while delivering permanent, engineered solutions. We work closely with your facility management and maintenance teams to develop repair schedules that align with your production calendar, planned maintenance windows, and operational priorities.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Our project managers are experienced in coordinating complex industrial repairs in active facilities. We understand the importance of maintaining safety protocols, coordinating with other trades, and adapting to changing production schedules. When necessary, we can mobilize crews for night shift or weekend work, ensuring that critical production areas remain operational during business hours. Our efficient installation methods, particularly polyurethane foam injection, often allow for same-day return to service in many applications.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            We also provide detailed project planning and communication throughout the repair process. Before work begins, we conduct thorough site assessments to identify potential conflicts, access requirements, and safety considerations. During execution, we maintain open communication channels with your team, providing daily progress updates and immediately addressing any concerns. This collaborative approach ensures that foundation repairs enhance rather than hinder your operational goals, protecting your facility's structural integrity while respecting the demands of continuous industrial operations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Industrial Foundation FAQ</h2>
          <div className="space-y-4 text-lg leading-relaxed text-gray-700">
            <div>
              <p className="font-bold">Q: How do I know if my industrial facility needs foundation repair?</p>
              <p>A: Common warning signs include cracks in floor slabs or walls, equipment that requires frequent re-leveling, doors or windows that stick, visible gaps between walls and floors, and difficulty maintaining production tolerances. If you notice any of these issues, schedule a professional foundation inspection immediately to prevent further damage.</p>
            </div>

            <div>
              <p className="font-bold">Q: Will foundation repair require shutting down our production operations?</p>
              <p>A: In most cases, no. FCS Foundation Repair specializes in phased repair strategies that allow continued operation of non-affected areas. We work during off-shifts, weekends, or planned maintenance windows to minimize production impact. Our team coordinates closely with your facility management to develop a repair schedule that protects both your foundation and your operational continuity.</p>
            </div>

            <div>
              <p className="font-bold">Q: How long does industrial foundation repair typically take?</p>
              <p>A: Project duration varies based on the extent of damage, facility size, and repair methods required. Minor repairs might be completed in days, while comprehensive foundation stabilization for large facilities could span several weeks. We provide detailed project timelines during the planning phase and work efficiently to meet agreed-upon schedules.</p>
            </div>

            <div>
              <p className="font-bold">Q: What is the typical cost of industrial foundation repair?</p>
              <p>A: Costs vary significantly based on factors including the severity of settlement, soil conditions, facility size, required load capacity, and chosen repair methods. Steel pier installations typically range from $1,500-$3,000 per pier, while polyurethane foam injection costs $5-$15 per square foot. We provide detailed, transparent estimates after conducting a thorough site assessment. Contact us at 469-402-1038 for a free evaluation.</p>
            </div>

            <div>
              <p className="font-bold">Q: Do you offer warranties on industrial foundation repairs?</p>
              <p>A: Yes. FCS Foundation Repair backs all structural foundation repairs with a comprehensive lifetime transferable warranty. This warranty covers the repair work and provides long-term assurance that your foundation investment is protected. Our warranty is one of the strongest in the industry, reflecting our confidence in our engineering and installation quality.</p>
            </div>

            <div>
              <p className="font-bold">Q: Can you work with our structural engineer or equipment manufacturers?</p>
              <p>A: Absolutely. We regularly collaborate with structural engineers, equipment manufacturers, and facility consultants to ensure our foundation repairs meet all technical specifications and operational requirements. We can provide detailed engineering documentation, load calculations, and as-built drawings as needed for your records or equipment warranty compliance.</p>
            </div>

            <div>
              <p className="font-bold">Q: Why choose FCS Foundation Repair for industrial foundation work?</p>
              <p>A: With over 25 years of experience, an A+ BBB rating, and 295+ positive reviews, FCS Foundation Repair brings proven expertise to every industrial project. Our specialized knowledge of heavy equipment foundations, precision alignment requirements, and production continuity planning sets us apart. We deliver engineered solutions backed by comprehensive warranties, ensuring your facility maintains the structural stability necessary for safe, efficient industrial operations.</p>
            </div>
          </div>
        </section>

      <CaseStudies propertyType="industrial" />
      <Testimonials variant="commercial" />

      {/* CTA Section */}
        <section className="bg-[#2C5F8D] text-white py-12 text-center rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Protect Your Industrial Operations</h2>
          <p className="text-xl mb-8">Don't let foundation problems compromise your production efficiency and equipment precision. Contact FCS Foundation Repair today for expert industrial foundation solutions.</p>
          <Button className="bg-[#FF8C00] hover:bg-[#4A7C59] text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            <Phone className="mr-2" /> Get Your Free Industrial Foundation Assessment: 469-402-1038
          </Button>
        </section>
      </div>
    </div>
  );
}
