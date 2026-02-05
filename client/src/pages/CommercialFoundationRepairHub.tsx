import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Award, Shield } from 'lucide-react';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import Testimonials from '@/components/Testimonials';

export default function CommercialFoundationRepairHub() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fcs-navy to-fcs-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Foundation Repair in Dallas-Fort Worth | Trusted Since 1999</h1>
          <p className="text-xl mb-8">Safeguarding Your Business Investment with Over 25 Years of Expertise</p>
          <div className="flex justify-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-fcs-green" size={24} />
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-fcs-green" size={24} />
              <span>BBB A+ Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-fcs-green" size={24} />
              <span>Lifetime Warranty</span>
            </div>
          </div>
          <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            <Phone className="mr-2" size={20} />
            Call Us Today: 469-402-1038
          </Button>
        </div>
      </section>
      
      {/* Commercial Expertise Statement */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6 text-center">Our Commercial Expertise: Safeguarding Your Business Investment</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            FCS Foundation Repair possesses a profound understanding of the complexities inherent in commercial foundation systems. Unlike residential properties, commercial structures often involve intricate designs, heavier loads, and specialized operational requirements. Our expertise extends to addressing these critical differences, ensuring that our repair solutions not only rectify existing issues but also fortify your property against future challenges. We recognize that foundation problems can disrupt business operations, lead to costly downtime, and even pose safety risks. Therefore, our approach prioritizes efficient, minimally invasive solutions designed to restore structural stability with the least possible impact on your daily activities. Our team is adept at navigating the specific challenges presented by various commercial building types, from multi-story office complexes to expansive industrial warehouses, always with an eye towards preserving your business continuity. Our 25+ years of experience in the Dallas-Fort Worth area have equipped us with invaluable insights into the region's unique soil conditions and construction practices, allowing us to deliver durable and effective commercial foundation repair solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            <Button className="bg-fcs-blue hover:bg-fcs-blue/90 text-white font-bold py-3 px-8 rounded-full text-lg mt-6">
              Get a Free Commercial Foundation Assessment
            </Button>
          </p>
        </div>
      </section>

      {/* Property Types Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-10 text-center">Property Types We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fcs-blue mb-3">Retail Centers & Shopping Malls</h3>
              <p className="text-gray-700">Foundations in retail environments must withstand constant foot traffic, heavy display units, and dynamic structural loads. We address issues that can lead to uneven flooring, cracked walls, and compromised aesthetics, ensuring a safe and inviting shopping experience.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fcs-blue mb-3">Office Buildings</h3>
              <p className="text-gray-700">From single-story offices to multi-story corporate towers, foundation stability is crucial for employee safety and property value. We tackle problems like settling, bowing walls, and slab cracks that can affect the structural integrity and interior finishes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fcs-blue mb-3">Industrial Warehouses & Manufacturing Facilities</h3>
              <p className="text-gray-700">These properties endure immense stress from heavy machinery, large inventories, and continuous operations. Our solutions are engineered to support significant load-bearing requirements, preventing structural failures that could halt production and endanger personnel.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fcs-blue mb-3">Educational Institutions</h3>
              <p className="text-gray-700">Schools and universities require stable foundations to ensure the safety of students and staff. We repair foundations affected by soil movement, water damage, and age, preserving the learning environment.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fcs-blue mb-3">Healthcare Facilities</h3>
              <p className="text-gray-700">Hospitals, clinics, and medical centers demand absolute structural integrity. Our precise repair methods minimize disruption to critical operations while restoring the foundation's strength and compliance with stringent health codes.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fcs-blue mb-3">Hospitality (Hotels & Restaurants)</h3>
              <p className="text-gray-700">Maintaining an impeccable appearance and safe environment is paramount in the hospitality sector. We resolve foundation issues that can cause aesthetic damage, operational inefficiencies, and safety concerns for guests and staff.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fcs-blue mb-3">Multi-Family Residential (Apartments & Condos)</h3>
              <p className="text-gray-700">While distinct from single-family homes, these properties share commercial characteristics in their scale and complexity. We provide comprehensive solutions for widespread foundation problems affecting multiple units, ensuring tenant safety and property value.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-fcs-blue mb-3">Government & Municipal Buildings</h3>
              <p className="text-gray-700">Public buildings require robust foundations to serve communities reliably. We offer dependable repair services that uphold structural standards and extend the lifespan of essential civic infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6 text-center">Commercial Services Overview: Comprehensive Solutions for Structural Integrity</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            FCS Foundation Repair offers a full spectrum of commercial foundation repair services, meticulously designed to address the unique and often complex challenges faced by businesses in Dallas-Fort Worth. Our approach integrates advanced techniques with proven methodologies to deliver lasting stability and peace of mind. We understand that commercial properties are significant investments, and our goal is to protect that investment by providing solutions that are not only effective but also minimally disruptive to your operations.
          </p>
          
          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Slab Foundation Repair</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many commercial buildings in Texas are constructed on slab foundations, which are susceptible to issues caused by expansive clay soils. Our slab repair services include the installation of steel piers or concrete piers, driven deep into stable strata to provide permanent support. We utilize hydraulic equipment to carefully lift and stabilize the foundation, closing cracks and leveling uneven surfaces. This process is critical for preventing further structural damage, protecting interior finishes, and ensuring the safety of occupants. Our team conducts thorough soil analysis to determine the most appropriate pier system and placement, ensuring a customized and effective solution for your commercial property.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Pier and Beam Foundation Repair</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            For commercial properties built on pier and beam foundations, we offer comprehensive repair and restoration services. This often involves replacing deteriorated wooden beams, shims, and piers with durable concrete or steel components. We also address issues such as sagging floors, inadequate ventilation in crawl spaces, and moisture control. Our experts meticulously inspect the crawl space, identifying areas of weakness or damage, and implement precise leveling techniques to restore the foundation to its original integrity. Proper ventilation and drainage solutions are also integrated to prevent future moisture-related problems, which are common in the Dallas-Fort Worth climate.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Helical Pier Installation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Helical piers are an excellent solution for commercial properties requiring deep foundation support, especially in challenging soil conditions or when new construction demands immediate load-bearing capacity. These steel shafts with helical plates are screwed into the ground until they reach stable soil, providing a strong, deep foundation. Helical piers are ideal for new construction, underpinning existing foundations, and supporting heavy commercial structures. Their installation is often quicker and less disruptive than traditional methods, making them a preferred choice for businesses seeking efficient and reliable foundation stabilization.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Drainage Solutions</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Effective drainage is paramount for preventing commercial foundation problems. Excess moisture around the foundation can lead to soil expansion and contraction, causing significant structural stress. Our drainage solutions include the installation of French drains, surface drains, and grading improvements to divert water away from your foundation. We also offer sump pump installation for properties with persistent water accumulation issues. By managing water effectively, we help mitigate the primary cause of foundation damage, thereby extending the life of your commercial property's foundation and preventing costly future repairs.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Foundation Underpinning</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            When a commercial foundation has settled significantly or requires additional support due to increased load or soil instability, underpinning becomes necessary. We employ various underpinning techniques, including the installation of new piers or the extension of existing ones, to transfer the building's load to deeper, more stable soil layers. This process effectively stabilizes the foundation, prevents further settlement, and restores structural integrity. Our engineers meticulously design underpinning plans to suit the specific needs of your commercial building, ensuring a robust and long-lasting solution.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg mt-6 inline-flex items-center">
              <Phone className="mr-2" size={20} />
              Schedule Your Commercial Foundation Service
            </Button>
          </p>
        </div>
      </section>

      {/* Inspection Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6 text-center">The FCS Commercial Foundation Inspection Process</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At FCS Foundation Repair, our commercial foundation inspection process is thorough, systematic, and designed to provide a precise diagnosis of your property's structural health. We understand that for businesses, time is money, and accuracy is paramount. Our experienced inspectors utilize a multi-faceted approach to identify the root causes of foundation issues, offering clear, actionable insights and tailored repair recommendations.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Initial Consultation and Site Visit</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our process begins with an initial consultation where we discuss your concerns, observe any visible signs of damage, and gather preliminary information about your property. A scheduled site visit follows, during which our certified inspector will conduct a comprehensive exterior and interior examination of your commercial building. This includes assessing the surrounding landscape, drainage patterns, and any external factors that might contribute to foundation stress.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Exterior Assessment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            On the exterior, our inspectors meticulously look for common indicators of foundation problems. This includes examining the foundation perimeter for cracks, shifts, or bowing. We pay close attention to brick veneer, siding, and fascia for signs of separation or distortion. The condition of expansion joints, concrete slabs, and walkways adjacent to the building are also evaluated, as these can often reveal underlying foundation movement. We also assess the grading around the building to identify areas where water might be pooling or improperly draining towards the foundation.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Interior Assessment</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Inside your commercial property, our inspection covers all accessible areas. We look for interior wall cracks, particularly those that are diagonal or extend from door and window frames. Uneven or sloping floors are measured using specialized equipment to determine the degree of settlement or heave. We also check for sticking doors and windows, gaps between walls and ceilings, and any signs of moisture intrusion in basements or crawl spaces. For properties with pier and beam foundations, a detailed crawl space inspection is conducted to assess the condition of beams, piers, and subflooring, as well as ventilation and moisture levels.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Advanced Diagnostic Tools</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            To ensure the most accurate assessment, our inspectors utilize advanced diagnostic tools. These may include laser levels to precisely measure floor elevations, moisture meters to detect hidden water issues, and sometimes, ground-penetrating radar (GPR) to map subsurface conditions without invasive digging. These tools allow us to gather objective data, which is crucial for developing an effective and precise repair plan.
          </p>

          <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Detailed Report and Recommendations</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Following the comprehensive inspection, you will receive a detailed report outlining our findings. This report will clearly explain the nature and extent of any foundation damage, its probable causes, and a proposed repair plan. The recommendations will include specific solutions, estimated timelines, and a transparent cost breakdown. We take the time to walk you through the report, answer all your questions, and ensure you fully understand the proposed course of action. Our goal is to empower you with the information needed to make informed decisions about your commercial property's foundation repair.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            <Button className="bg-fcs-blue hover:bg-fcs-blue/90 text-white font-bold py-3 px-8 rounded-full text-lg mt-6">
              Request a Commercial Foundation Inspection
            </Button>
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6 text-center">Commercial Case Studies: Proven Solutions for Dallas-Fort Worth Businesses</h2>
          
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-fcs-blue mb-3">Case Study 1: Retail Strip Center Stabilization</h3>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Client:</strong> A multi-tenant retail strip center in Plano, TX.</p>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Challenge:</strong> The property owners observed significant cracking in the exterior brick veneer, uneven flooring within several tenant spaces, and recurring issues with doors sticking. These problems were impacting tenant satisfaction and raising concerns about the long-term viability of the investment. Initial assessments pointed to differential settlement of the slab foundation due to expansive clay soils.</p>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Solution:</strong> FCS Foundation Repair conducted a thorough inspection, utilizing laser leveling to map the extent of the settlement. Our engineers designed a comprehensive repair plan involving the installation of 45 steel piers strategically placed around the perimeter and interior load-bearing points of the structure. The piers were driven to refusal, ensuring they reached stable bedrock, and then hydraulically lifted to stabilize and level the foundation. Interior floor leveling was also performed where necessary.</p>
            <p className="text-gray-700"><strong className="text-fcs-navy">Outcome:</strong> The foundation was successfully stabilized, and the building's structural integrity was restored. Exterior cracks were closed, and interior flooring became level, resolving the issues with sticking doors. The property owners reported improved tenant satisfaction and renewed confidence in their investment. The project was completed within the agreed timeline, minimizing disruption to the retail businesses.</p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-fcs-blue mb-3">Case Study 2: Industrial Warehouse Underpinning</h3>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Client:</strong> A large industrial warehouse facility in Fort Worth, TX, used for heavy manufacturing.</p>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Challenge:</strong> The warehouse, constructed on a pier and beam foundation, began exhibiting signs of severe settlement, particularly in areas supporting heavy machinery. This led to misaligned equipment, cracked concrete floors, and concerns about operational safety. The client needed a robust solution that could withstand significant industrial loads.</p>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Solution:</strong> Our team performed an in-depth analysis of the existing pier and beam system and the underlying soil conditions. We determined that the original foundation was insufficient for the current operational loads. The solution involved a combination of replacing deteriorated wooden beams with reinforced steel, installing additional concrete piers, and strategically underpinning critical sections of the foundation with helical piers. The helical piers were chosen for their ability to provide deep, high-capacity support with minimal excavation.</p>
            <p className="text-gray-700"><strong className="text-fcs-navy">Outcome:</strong> The warehouse foundation was significantly strengthened and stabilized, capable of supporting the heavy machinery without further settlement. The concrete floors were repaired and leveled, eliminating safety hazards and allowing for proper equipment alignment. The client experienced a seamless transition back to full operational capacity, with enhanced structural reliability for their manufacturing processes.</p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-fcs-blue mb-3">Case Study 3: Educational Facility Foundation Repair</h3>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Client:</strong> A public elementary school building in Dallas, TX.</p>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Challenge:</strong> The school district reported extensive cracking in interior and exterior walls, particularly around windows and doorways, and noticeable sloping in several classrooms. These issues were causing concern for student and staff safety and were becoming a distraction to the learning environment. Water intrusion in certain areas of the building's perimeter was also identified as a contributing factor.</p>
            <p className="text-gray-700 mb-2"><strong className="text-fcs-navy">Solution:</strong> FCS Foundation Repair developed a multi-faceted repair strategy. This included the installation of concrete piers along the affected sections of the slab foundation to provide stabilization and lift. Additionally, a comprehensive drainage system, including French drains and grading improvements, was implemented around the building's perimeter to divert rainwater away from the foundation and mitigate future moisture-related issues. Interior cosmetic repairs were also part of the scope.</p>
            <p className="text-gray-700"><strong className="text-fcs-navy">Outcome:</strong> The school's foundation was successfully stabilized, and the structural integrity of the building was restored. The drainage improvements effectively managed water runoff, preventing further soil saturation and foundation stress. The interior and exterior cosmetic repairs enhanced the building's appearance, creating a safer and more conducive learning environment for students and teachers. The project was completed during the summer break, ensuring no disruption to the academic calendar.</p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg mt-6 inline-flex items-center">
              <Phone className="mr-2" size={20} />
              View More Commercial Success Stories
            </Button>
          </p>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6 text-center">Why Choose FCS Foundation Repair for Your Commercial Needs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-fcs-blue mb-3">Unmatched Experience and Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over 25 years of dedicated service in the Dallas-Fort Worth area, FCS Foundation Repair brings unparalleled experience to every commercial project. Our long-standing presence means we possess an intimate understanding of the region's unique geological challenges, including expansive clay soils and fluctuating weather patterns that significantly impact foundations. This local expertise allows us to diagnose problems accurately and implement solutions that are specifically engineered for the North Texas environment, ensuring maximum effectiveness and durability.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-fcs-blue mb-3">Proven Track Record and Reputation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our commitment to quality and customer satisfaction is reflected in our stellar reputation. FCS Foundation Repair proudly maintains an A+ rating with the Better Business Bureau (BBB), a testament to our ethical business practices and consistent delivery of high-quality services. Furthermore, with over 295 positive customer reviews, our clients consistently praise our professionalism, efficiency, and the lasting results of our work. These accolades underscore our reliability and the trust we've built within the commercial community.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-fcs-blue mb-3">Comprehensive and Customized Solutions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that no two commercial foundation problems are identical. That's why we offer comprehensive, customized repair plans tailored to the specific needs of your property and business operations. From advanced slab and pier and beam repairs to specialized helical pier installations and robust drainage solutions, our services cover every aspect of commercial foundation stabilization. Our engineers and technicians work closely with you to develop a strategy that addresses the root cause of the issue while minimizing disruption to your business.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-fcs-blue mb-3">Lifetime Warranty for Enduring Peace of Mind</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Investing in commercial foundation repair is a significant decision, and we believe in standing behind our work. FCS Foundation Repair offers a lifetime transferable warranty on our foundation repairs, providing you with enduring peace of mind. This warranty is a clear demonstration of our confidence in the quality and durability of our solutions, ensuring that your commercial property remains structurally sound for years to come.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-fcs-blue mb-3">Business Continuity Focused Approach</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We recognize that any disruption to your commercial operations can have significant financial implications. Our team is trained to execute repairs efficiently and with meticulous planning to minimize downtime. We coordinate closely with property managers and business owners to schedule work at convenient times, implement protective measures, and maintain a clean, safe work environment. Our goal is to restore your foundation's integrity swiftly, allowing you to resume normal business activities with minimal interruption.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            <Button className="bg-fcs-blue hover:bg-fcs-blue/90 text-white font-bold py-3 px-8 rounded-full text-lg mt-6">
              Discover the FCS Difference
            </Button>
          </p>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6 text-center">Warning Signs of Commercial Foundation Problems</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Early detection of commercial foundation problems can save businesses significant time, money, and operational disruption. Being vigilant for warning signs allows for timely intervention, preventing minor issues from escalating into major structural crises. FCS Foundation Repair encourages commercial property owners and managers in Dallas-Fort Worth to be aware of these common indicators:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Exterior Warning Signs</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong className="text-fcs-navy">Cracks in Exterior Walls:</strong> Look for stair-step cracks in brick mortar, horizontal cracks, or vertical cracks that are wider at the top or bottom. These often indicate differential settlement.</li>
                <li><strong className="text-fcs-navy">Separation Around Doors and Windows:</strong> Gaps appearing between window frames or door frames and the exterior walls can signal foundation movement.</li>
                <li><strong className="text-fcs-navy">Fascia Board or Roofline Sagging:</strong> An uneven roofline or sagging fascia boards can be a symptom of foundation issues affecting the entire structure.</li>
                <li><strong className="text-fcs-navy">Chimney Leaning or Cracking:</strong> If your commercial property has a chimney, observe if it's leaning away from the building or if cracks are forming at its base.</li>
                <li><strong className="text-fcs-navy">Porches or Patios Pulling Away:</strong> Concrete porches, patios, or walkways that are separating from the main building often indicate foundation settlement.</li>
                <li><strong className="text-fcs-navy">Poor Drainage Around Foundation:</strong> Water pooling near the foundation after rain, or soil that is consistently oversaturated, can lead to soil expansion and contraction, stressing the foundation.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-fcs-blue mb-4">Interior Warning Signs</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li><strong className="text-fcs-navy">Cracks in Interior Walls or Ceilings:</strong> Diagonal cracks extending from the corners of doors and windows, or cracks in drywall and plaster, are common indicators. Cracks in ceilings can also point to structural stress.</li>
                <li><strong className="text-fcs-navy">Uneven or Sloping Floors:</strong> Floors that feel bouncy, soft, or noticeably slope in certain areas are a strong sign of foundation settlement or pier and beam issues. Use a level to confirm.</li>
                <li><strong className="text-fcs-navy">Sticking Doors and Windows:</strong> Doors and windows that are difficult to open or close, or that no longer latch properly, often indicate that their frames have become distorted due to foundation movement.</li>
                <li><strong className="text-fcs-navy">Gaps Between Walls and Ceilings/Floors:</strong> Visible gaps where walls meet ceilings or floors can be a direct result of the foundation shifting.</li>
                <li><strong className="text-fcs-navy">Cabinets Separating from Walls:</strong> In commercial kitchens or restrooms, cabinets pulling away from the walls can indicate structural instability.</li>
                <li><strong className="text-fcs-navy">Musty Odors or Moisture in Crawl Spaces/Basements:</strong> These can suggest water intrusion, which directly impacts foundation health, especially in pier and beam structures.</li>
              </ul>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center mt-8">
            If you observe any of these warning signs, it is crucial to contact FCS Foundation Repair promptly for a professional commercial foundation inspection. Early intervention can prevent more extensive damage and costly repairs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg mt-6 inline-flex items-center">
              <Phone className="mr-2" size={20} />
              Schedule a Foundation Inspection
            </Button>
          </p>
        </div>
      </section>

      <CaseStudyGallery />
      <Testimonials variant="commercial" />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6 text-center">Frequently Asked Questions About Commercial Foundation Repair</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q1: How do commercial foundation problems differ from residential ones?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-fcs-navy">A1:</strong> Commercial foundations typically bear significantly heavier loads and are often designed with more complex structural engineering to accommodate larger buildings, specialized equipment, and higher traffic volumes. The impact of foundation issues on business continuity, safety regulations, and potential financial losses is also much greater. Repair methods for commercial properties often require more robust solutions and a deeper understanding of structural dynamics.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q2: What are the common causes of commercial foundation damage in Dallas-Fort Worth?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-fcs-navy">A2:</strong> The primary culprit in the Dallas-Fort Worth area is expansive clay soil, which swells when wet and shrinks when dry. This constant movement, coupled with poor drainage, plumbing leaks, and extreme weather fluctuations, puts immense stress on foundations. Inadequate initial construction or insufficient soil preparation can also contribute to problems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q3: How long does a typical commercial foundation repair take?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-fcs-navy">A3:</strong> The duration of a commercial foundation repair project varies significantly depending on the extent of the damage, the size and type of the building, and the chosen repair method. Minor repairs might take a few days, while extensive projects could span several weeks. FCS Foundation Repair prioritizes efficient execution and works closely with businesses to minimize operational downtime.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q4: Will commercial foundation repair disrupt my business operations?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-fcs-navy">A4:</strong> While some level of disruption is often unavoidable, FCS Foundation Repair employs strategies to minimize impact on your business. We plan projects meticulously, often scheduling work during off-peak hours or in phases, and implement measures to maintain a safe and accessible environment for your employees and customers. Our goal is to restore your foundation with the least possible interruption.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q5: Is commercial foundation repair covered by insurance?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-fcs-navy">A5:</strong> Insurance coverage for commercial foundation repair depends on the cause of the damage and your specific policy. Generally, damage caused by sudden events like plumbing leaks may be covered, while damage due to soil movement or settlement is often excluded. We recommend reviewing your commercial property insurance policy and consulting with your provider. FCS Foundation Repair can provide detailed reports and documentation to assist with your claim.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q6: What is the cost of commercial foundation repair?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-fcs-navy">A6:</strong> The cost of commercial foundation repair varies widely based on the severity and type of damage, the size of the property, the chosen repair method, and accessibility. After a thorough inspection, FCS Foundation Repair provides a detailed, transparent estimate outlining all costs involved. We focus on delivering cost-effective, long-term solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q7: Do you offer a warranty on commercial foundation repairs?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-fcs-navy">A7:</strong> Yes, FCS Foundation Repair stands behind the quality of our work with a lifetime transferable warranty on our commercial foundation repairs. This warranty provides long-term assurance and protects your investment, reflecting our confidence in the durability and effectiveness of our solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fcs-blue mb-2">Q8: How can I prevent future commercial foundation problems?</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-fcs-navy">A8:</strong> Proactive measures are key. Ensure proper drainage around your property by maintaining gutters, downspouts, and grading. Address plumbing leaks immediately. Consider installing a root barrier if large trees are near the foundation. Regular inspections by professionals can also help identify and mitigate potential issues before they become severe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6 text-center">Service Areas: Serving the Greater Dallas-Fort Worth Metroplex</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            FCS Foundation Repair proudly serves commercial clients throughout the expansive Dallas-Fort Worth metropolitan area and surrounding communities. Our deep understanding of local soil conditions and building codes ensures that businesses across the region receive the highest quality commercial foundation repair services. Our primary service areas include, but are not limited to:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-fcs-blue font-semibold">
            <span>Dallas</span>
            <span>Fort Worth</span>
            <span>Plano</span>
            <span>Irving</span>
            <span>Garland</span>
            <span>Frisco</span>
            <span>McKinney</span>
            <span>Denton</span>
            <span>Richardson</span>
            <span>Arlington</span>
            <span>Grand Prairie</span>
            <span>Mesquite</span>
            <span>Carrollton</span>
            <span>Lewisville</span>
            <span>Flower Mound</span>
            <span>Allen</span>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center mt-8">
            If your commercial property is located within the Dallas-Fort Worth metroplex, contact FCS Foundation Repair at 469-402-1038 to schedule a comprehensive foundation inspection. We are your local experts dedicated to protecting your business investment.
          </p>
        </div>
      </section>

      {/* Contact Form (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-fcs-navy mb-6">Contact FCS Foundation Repair Today</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Don't let foundation problems jeopardize your commercial property or business operations. Contact FCS Foundation Repair today for a professional, no-obligation commercial foundation inspection. Our experienced team is ready to provide the expert solutions you need to ensure the long-term stability and safety of your investment.
          </p>
          <Button className="bg-fcs-green hover:bg-fcs-green/90 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
            <Phone className="mr-2" size={20} />
            Call Us: 469-402-1038
          </Button>
          <p className="text-gray-600 mt-4">Or fill out our online contact form to schedule your consultation.</p>
          {/* A real contact form component would go here */}
          <div className="mt-8 p-8 border border-gray-300 rounded-lg bg-gray-50">
            <p className="text-gray-700"><em>[Placeholder for Contact Form Component]</em></p>
          </div>
        </div>
      </section>
    </div>
  );
}
