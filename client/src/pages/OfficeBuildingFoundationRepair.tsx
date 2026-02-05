import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Award, Shield } from 'lucide-react';

export default function OfficeBuildingFoundationRepair() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fcs-navy to-fcs-blue text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Office Building Foundation Repair | Protect Your Investment
          </h1>
          <p className="text-xl mb-8">Ensure the long-term stability and value of your commercial property with FCS Foundation Repair.</p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center"><CheckCircle className="mr-2" /> BBB A+ Rated</div>
            <div className="flex items-center"><Award className="mr-2" /> 25+ Years Experience</div>
            <div className="flex items-center"><Shield className="mr-2" /> Lifetime Warranty</div>
          </div>
          <Button className="bg-fcs-orange hover:bg-fcs-green text-white font-bold py-3 px-8 rounded-full text-lg">
            <Phone className="mr-2" /> Call for a Free Inspection: 469-402-1038
          </Button>
        </div>
      </section>
      
      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Introduction</h2>
          <p className="mb-4 text-lg leading-relaxed">
            Office buildings are significant commercial investments, serving as the backbone of businesses and often housing numerous tenants. The structural integrity of these multi-story assets is paramount, with the foundation acting as its most critical component. A compromised foundation can lead to a cascade of issues, from minor cosmetic damage to severe structural instability, impacting property value, tenant safety, and operational continuity. FCS Foundation Repair, with over 25 years of experience in commercial foundation solutions, understands the unique challenges faced by office building owners. We specialize in providing robust, long-lasting repairs that protect your investment and ensure the safety and stability of your commercial property. Our expertise is backed by a BBB A+ rating and over 295 positive reviews, reflecting our commitment to quality and customer satisfaction. We offer a lifetime warranty on our repairs, giving you peace of mind that your office building's foundation is in capable hands. Contact us today at 469-402-1038 for a comprehensive assessment.
          </p>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Common Problems in Office Building Foundations</h2>
          <p className="mb-8 text-lg leading-relaxed">
            Office building foundations are subjected to various stresses, often leading to distinct problems that require specialized attention. Understanding these common issues is the first step toward effective remediation.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">1. Differential Settlement and Uneven Floors</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Differential settlement occurs when the soil beneath an office building's foundation shifts or compresses unevenly, causing one part of the structure to sink more than another. This can manifest as sloping floors, visible cracks in interior and exterior walls (especially stair-step cracks), and misaligned doors and windows. In multi-story office buildings, differential settlement can lead to significant structural stress, affecting the integrity of load-bearing walls and support columns. This issue is particularly prevalent in areas with expansive clay soils, which swell and shrink with changes in moisture content, or in regions prone to seismic activity.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">2. Water-Related Soil Movement and Foundation Upheaval</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Excessive moisture from heavy rains, poor drainage around the building perimeter, or undetected plumbing leaks beneath the slab can saturate the soil, causing it to expand. This expansion can lead to <strong>foundation upheaval</strong>, where sections of the foundation lift upwards. Conversely, prolonged drought conditions can cause soils to shrink, leading to settlement. These cycles of expansion and contraction exert immense pressure on the foundation, leading to cracks, bowing, and other forms of structural damage. Office buildings with extensive landscaping or complex underground utility systems are particularly susceptible to water-related soil movement.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">3. Foundation Cracks and Structural Damage</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Cracks in the foundation are not merely cosmetic; they are often indicators of underlying structural distress. These can appear in various forms:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 text-lg leading-relaxed">
            <li><strong>Vertical Cracks:</strong> Often suggest settlement or minor structural movement.</li>
            <li><strong>Horizontal Cracks:</strong> Typically more severe, indicating significant pressure from soil expansion or hydrostatic pressure, potentially compromising the structural integrity of the foundation walls.</li>
            <li><strong>Stair-Step Cracks:</strong> Common in brick or block foundations, these follow the mortar lines and are strong indicators of differential settlement.</li>
            <li><strong>Diagonal Cracks:</strong> Can indicate uneven settlement or localized stress points.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed">
            Left unaddressed, these cracks can widen, allowing water intrusion, pest infestation, and further structural degradation, ultimately jeopardizing the safety and longevity of the office building.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">4. Failure Under Heavy Commercial Loads</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Office buildings, especially those with multiple stories, data centers, or heavy equipment, impose substantial and often uneven loads on their foundations. Over time, if the original foundation was not adequately designed for these loads or if soil conditions deteriorate, the foundation can fail to support the structure effectively. This can lead to localized settlement, bowing of support beams, and compromised structural stability, posing significant risks to occupants and assets. The dynamic nature of office spaces, with frequent renovations and changes in occupancy, can further exacerbate these issues.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Solutions for Office Building Foundation Repair</h2>
          <p className="mb-8 text-lg leading-relaxed">
            FCS Foundation Repair employs advanced, proven techniques to address the complex foundation problems inherent in office buildings. Our solutions are designed for minimal disruption, maximum effectiveness, and long-term stability.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">1. Helical Piers</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Helical piers are an ideal solution for stabilizing settling foundations in office buildings. These steel shafts with helical plates are screwed deep into the ground, beyond the active soil zone, until they reach stable, load-bearing strata. Once installed, hydraulic jacks are used to transfer the building's weight to the piers, effectively lifting and stabilizing the foundation. This method offers several advantages:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 text-lg leading-relaxed">
            <li><strong>Minimal Disruption:</strong> Installation requires smaller equipment and less excavation compared to traditional methods, allowing businesses to remain operational.</li>
            <li><strong>Immediate Load-Bearing:</strong> Helical piers provide immediate support, eliminating the need for lengthy curing times.</li>
            <li><strong>Versatility:</strong> Effective in various soil conditions and capable of supporting significant loads, making them suitable for multi-story office buildings.</li>
            <li><strong>Precision:</strong> Torque-monitored installation ensures each pier achieves its engineered load capacity.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">2. Steel Piers</h3>
          <p className="mb-4 text-lg leading-relaxed">
            For severe settlement issues and heavier structures, steel piers offer a robust solution. These heavy-duty steel pipes are driven hydraulically deep into the ground until they reach bedrock or a stable load-bearing stratum. The weight of the office building is then transferred to these piers, providing permanent support and preventing further settlement. Steel piers are particularly effective for:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 text-lg leading-relaxed">
            <li><strong>Heavy Structures:</strong> Capable of supporting the substantial loads of large, multi-story office buildings.</li>
            <li><strong>Deep Foundations:</strong> Ideal when stable soil is located at significant depths.</li>
            <li><strong>Durability:</strong> Constructed from high-strength steel, ensuring long-term stability and resistance to corrosion.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">3. Slab Repair and Leveling</h3>
          <p className="mb-4 text-lg leading-relaxed">
            For office buildings with concrete slab foundations experiencing cracks, unevenness, or minor settlement, our slab repair and leveling services restore structural integrity and aesthetics. This can involve:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 text-lg leading-relaxed">
            <li><strong>Polyurethane Foam Injection:</strong> A minimally invasive technique where expanding foam is injected beneath the slab to fill voids, lift settled sections, and stabilize the soil. This method is fast, clean, and causes minimal disruption.</li>
            <li><strong>Crack Repair:</strong> Utilizing specialized epoxies and sealants to repair foundation cracks, preventing water intrusion and further damage. This is often combined with other repair methods to address the root cause of the cracking.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">4. Drainage Solutions</h3>
          <p className="mb-4 text-lg leading-relaxed">
            Effective drainage is crucial for preventing water-related foundation problems. FCS Foundation Repair provides comprehensive drainage solutions tailored to the specific needs of office buildings, including:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 text-lg leading-relaxed">
            <li><strong>French Drains:</strong> Installed around the perimeter of the building to collect and divert excess groundwater away from the foundation.</li>
            <li><strong>Surface Drains:</strong> Designed to capture surface water runoff and direct it away from critical areas.</li>
            <li><strong>Grading Correction:</strong> Reshaping the landscape around the building to ensure proper water runoff and prevent pooling near the foundation.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed">
            By addressing water management, we mitigate the risk of soil expansion and contraction, protecting the foundation from future damage.
          </p>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Case Study: The Sterling Plaza Office Building</h2>
          <p className="mb-4 text-lg leading-relaxed">
            <strong>Challenge:</strong> The Sterling Plaza, a prominent five-story office building in downtown Dallas, began experiencing significant structural issues, including extensive stair-step cracking in its brick facade, noticeable sloping of interior floors on the lower levels, and persistent issues with doors and windows sticking. These problems were traced back to differential settlement caused by fluctuating moisture levels in the expansive clay soils beneath the building, exacerbated by an aging storm drain system that allowed water to pool near the foundation. The building management was concerned about tenant safety, potential property value depreciation, and the disruption that extensive repairs might cause to their numerous business tenants.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            <strong>Solution:</strong> FCS Foundation Repair was engaged to provide a comprehensive solution. After a thorough structural assessment and soil analysis, our team recommended a combination of steel piers and targeted drainage improvements. We installed 75 high-capacity steel piers around the perimeter and strategic interior points of the building, driving them to refusal at depths averaging 40 feet to reach stable bedrock. This process involved careful coordination with building management to minimize disruption to daily operations, often performing work during off-hours. Concurrently, we implemented a new perimeter French drain system and regraded key areas to ensure proper water diversion away from the foundation.
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            <strong>Results:</strong> Within three months, the Sterling Plaza's foundation was fully stabilized. The interior floors were leveled, and the facade cracks were repaired and monitored, showing no further movement. The building management reported a significant improvement in tenant satisfaction due to the restored structural integrity and the minimal impact of the repair process. The property value was preserved, and the building's long-term stability was secured. This project stands as a testament to FCS Foundation Repair's ability to handle complex commercial foundation challenges with precision, efficiency, and a focus on client needs.
          </p>
        </div>
      </section>

      {/* Tenant Coordination */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Tenant Coordination: Minimizing Disruption in Office Environments</h2>
          <p className="mb-8 text-lg leading-relaxed">
            Repairing the foundation of an active office building requires meticulous planning and execution to minimize disruption to tenants and their daily operations. FCS Foundation Repair understands the critical importance of maintaining business continuity. Our approach includes:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4 text-lg leading-relaxed">
            <li><strong>Phased Work Schedules:</strong> We work closely with building management to develop repair schedules that accommodate tenant needs, often performing noisier or more disruptive work during evenings, weekends, or holidays.</li>
            <li><strong>Clear Communication:</strong> We establish clear lines of communication with building management to provide regular updates on project progress, potential impacts, and mitigation strategies. This allows tenants to be informed and prepared.</li>
            <li><strong>Site Management:</strong> Our teams maintain clean, organized, and safe work areas, ensuring minimal obstruction to common areas, entrances, and parking. We utilize dust barriers and noise reduction techniques where appropriate.</li>
            <li><strong>Access and Security:</strong> We coordinate access to work areas with building security protocols, ensuring that all personnel are properly vetted and that tenant security is never compromised.</li>
          </ul>
          <p className="mb-4 text-lg leading-relaxed">
            Our goal is to complete necessary repairs efficiently and effectively, allowing your office building to return to full functionality with minimal inconvenience to your tenants.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Frequently Asked Questions (FAQ)</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q1: How do I know if my office building has foundation problems?</h3>
              <p className="text-lg leading-relaxed">
                A1: Common signs include cracks in walls (interior and exterior), sloping or uneven floors, sticking doors and windows, gaps around window and door frames, and visible foundation cracks. Any of these indicators warrant a professional inspection.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q2: What causes foundation problems in office buildings?</h3>
              <p className="text-lg leading-relaxed">
                A2: A variety of factors contribute, including expansive clay soils, poor drainage, plumbing leaks, inadequate original construction, heavy loads, and seismic activity. Soil moisture fluctuations are a primary culprit in many regions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q3: How long does commercial foundation repair take?</h3>
              <p className="text-lg leading-relaxed">
                A3: The duration varies significantly based on the severity and complexity of the problem, the size of the building, and the chosen repair method. FCS Foundation Repair prioritizes efficient execution while ensuring quality, and we work to minimize disruption to your operations. A typical project might range from a few days to several weeks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q4: Is commercial foundation repair disruptive to tenants?</h3>
              <p className="text-lg leading-relaxed">
                A4: We understand the need for business continuity. FCS Foundation Repair employs strategies like phased work schedules, off-hours work, clear communication, and meticulous site management to minimize disruption to your tenants. Our goal is to make the process as smooth as possible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q5: What is the cost of office building foundation repair?</h3>
              <p className="text-lg leading-relaxed">
                A5: The cost is highly variable, depending on the extent of the damage, the chosen repair methods, and site-specific conditions. We provide detailed, transparent estimates after a thorough inspection. Investing in timely repair is crucial to prevent more extensive and costly damage in the future.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q6: Does FCS Foundation Repair offer a warranty on commercial services?</h3>
              <p className="text-lg leading-relaxed">
                A6: Yes, FCS Foundation Repair stands behind the quality of our work with a lifetime warranty on our commercial foundation repairs. This commitment reflects our confidence in our solutions and provides long-term peace of mind for property owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CaseStudies propertyType="office" />
      <Testimonials variant="commercial" />

      {/* CTA Section */}
      <section className="bg-fcs-navy text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Protect Your Investment with FCS Foundation Repair</h2>
          <p className="text-xl mb-8">
            Your office building is a critical asset, and its foundation is the bedrock of its value and safety. Don't let foundation problems compromise your investment or disrupt your tenants. FCS Foundation Repair offers unparalleled expertise, proven solutions, and a commitment to excellence that ensures the long-term stability of your commercial property. With over 25 years of experience, a BBB A+ rating, and hundreds of satisfied clients, we are the trusted partner for office building foundation repair.
          </p>
          <Button className="bg-fcs-orange hover:bg-fcs-green text-white font-bold py-3 px-8 rounded-full text-lg">
            <Phone className="mr-2" /> Call for a Free Inspection: 469-402-1038
          </Button>
          <p className="mt-4 text-lg">Experience the FCS difference – where strong foundations build stronger businesses.</p>
        </div>
      </section>
    </div>
  );
}
