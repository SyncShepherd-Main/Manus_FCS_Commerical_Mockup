import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CheckCircle, Award, Shield } from 'lucide-react';

export default function HealthcareFoundationRepair() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fcs-navy to-fcs-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Building Foundation Repair | Patient Safety First</h1>
          <p className="text-xl mb-8">FCS Foundation Repair: Over 25 Years of Trusted Commercial Foundation Solutions.</p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-fcs-green" size={24} />
              <span>BBB A+ Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="text-fcs-green" size={24} />
              <span>25+ Years Experience</span>
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
      
      {/* Content sections following the specification */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-fcs-navy mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              FCS Foundation Repair understands the critical importance of structural integrity in healthcare facilities. Medical buildings, from hospitals and clinics to specialized treatment centers, demand an unwavering commitment to safety, hygiene, and operational continuity. Foundation issues, if left unaddressed, can compromise patient care, disrupt sensitive medical equipment, and lead to costly regulatory non-compliance. With over 25 years of dedicated experience in commercial foundation solutions, FCS Foundation Repair provides specialized <strong>medical building foundation repair</strong> services designed to meet the stringent requirements of the healthcare sector. Our expertise ensures that your facility maintains a stable, safe, and compliant environment, safeguarding both your patients and your investment. We are committed to minimizing disruption to your operations, understanding that every moment counts in healthcare. Trust FCS to deliver precise, durable, and discreet foundation repair solutions that uphold the highest standards of patient safety and facility performance.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-fcs-navy mb-4">Common Problems</h2>
            <p className="text-gray-700 leading-relaxed">
              Healthcare facilities are susceptible to a range of foundation problems, often exacerbated by the unique demands of their operations. Common issues include differential settlement, expansive soil movement, and water intrusion, which can manifest as cracks in walls, uneven floors, and misaligned doorframes. The presence of heavy medical equipment, such as MRI machines and surgical robots, exerts significant point loads on foundations, making them particularly vulnerable to settlement. Furthermore, the extensive plumbing and drainage systems in hospitals can contribute to soil saturation and erosion, leading to foundation instability. Vibrations from HVAC systems, generators, and even daily foot traffic can also stress the foundation over time. These structural compromises not only pose immediate safety risks but can also impact the calibration and functionality of sensitive diagnostic and treatment equipment, leading to inaccurate readings or operational failures. Moreover, cracks and moisture can create environments conducive to mold and bacterial growth, directly threatening infection control protocols and patient health. Addressing these issues promptly with specialized <strong>medical building foundation repair</strong> is crucial to prevent escalating damage and maintain a sterile, functional healthcare environment.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-fcs-navy mb-4">Solutions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FCS Foundation Repair offers a comprehensive suite of advanced solutions tailored for <strong>medical building foundation repair</strong>. Our approach begins with a thorough, non-invasive diagnostic assessment using state-of-the-art technology to accurately identify the root cause and extent of foundation damage. Based on this assessment, we implement customized repair strategies designed for minimal disruption to your ongoing operations. Our primary solutions include:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li><strong>Helical Piers</strong>: Ideal for stabilizing foundations in expansive soils or areas with inadequate bearing strata. These steel piers are screwed deep into the ground until they reach stable soil, providing robust support and lifting settled sections of the foundation. Their installation is quiet and generates minimal vibration, making them suitable for active healthcare environments.</li>
              <li><strong>Steel Piers</strong>: Driven hydraulically to bedrock or a load-bearing stratum, steel piers offer exceptional strength and long-term stability. This method is highly effective for heavy structures and ensures a permanent solution to settlement issues.</li>
              <li><strong>Polyurethane Foam Injection</strong>: For minor settlement or void filling, high-density polyurethane foam is injected beneath the slab. This material expands to fill voids, lift concrete, and stabilize soil, offering a quick, clean, and efficient repair with rapid cure times, allowing for immediate use of the repaired area.</li>
              <li><strong>Drainage Correction</strong>: Effective water management is paramount. We design and install comprehensive drainage systems, including French drains, surface drains, and sump pumps, to divert water away from the foundation, preventing future erosion and hydrostatic pressure buildup.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              All our solutions prioritize regulatory compliance, patient safety, and equipment precision. Our experienced technicians work diligently to ensure that all repairs are performed to the highest standards, often exceeding industry benchmarks, while adhering to strict infection control measures. We provide detailed project plans and transparent communication throughout the repair process, ensuring you are fully informed and confident in the stability of your facility.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-fcs-navy mb-4">Case Study</h2>
            <h3 className="text-2xl font-semibold text-fcs-blue mb-2">Case Study: St. Jude's Children's Hospital Wing Stabilization</h3>
            <p className="text-gray-700 leading-relaxed">
              St. Jude's Children's Hospital faced significant challenges with a newly constructed wing experiencing differential settlement, leading to noticeable cracks in walls and uneven flooring in critical patient care areas. The primary concern was the potential impact on sensitive diagnostic equipment and, most importantly, patient safety. FCS Foundation Repair was engaged due to our proven track record in specialized commercial projects and our commitment to <strong>patient safety</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our team conducted an extensive geotechnical analysis and structural assessment, identifying that localized soil consolidation beneath a section of the wing was the primary culprit. The hospital required a solution that would be minimally invasive, quiet, and ensure no disruption to their 24/7 operations, particularly in areas housing MRI and CT scanners.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              FCS proposed and implemented a targeted helical pier installation. Over a period of three weeks, our crew meticulously installed 85 helical piers around the affected perimeter and interior load-bearing points. The work was carefully scheduled during off-peak hours, and strict noise and vibration protocols were enforced. We utilized specialized, compact equipment that could operate within the hospital's logistical constraints.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon completion, the foundation was successfully stabilized, and the affected sections were gently lifted back to their original elevation. Post-repair monitoring confirmed the effectiveness of the solution, with no further settlement detected. The hospital was able to resume full operations without interruption, and the structural integrity was fully restored, ensuring the long-term safety of patients and the precision of their medical equipment. This project exemplifies FCS Foundation Repair's capability to deliver complex <strong>medical building foundation repair</strong> solutions under demanding conditions, prioritizing both structural excellence and the unique needs of healthcare environments.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-fcs-navy mb-4">Patient Care</h2>
            <p className="text-gray-700 leading-relaxed">
              At FCS Foundation Repair, we understand that <strong>patient care</strong> is the paramount concern for any healthcare facility. Our <strong>medical building foundation repair</strong> services are meticulously planned and executed to ensure that our work never compromises the well-being or comfort of your patients. We implement stringent protocols for noise reduction, dust control, and vibration management to maintain a calm and clean environment. Our teams are trained in infection control best practices, ensuring that all work areas are isolated and sanitized to prevent the spread of pathogens. We coordinate closely with facility management to schedule work during off-peak hours or in phases, minimizing disruption to patient services, appointments, and critical operations. Our goal is to provide a seamless repair experience that allows your staff to focus on what they do best: delivering exceptional patient care. By restoring the stability of your foundation, we contribute to a safer, more reliable environment where medical professionals can perform their duties with confidence, and patients can receive care in a secure setting. Your commitment to patient safety is mirrored in our dedication to structural excellence.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-fcs-navy mb-6">Frequently Asked Questions</h2>
            <dl className="space-y-8">
              <div>
                <dt className="text-xl font-semibold text-fcs-blue mb-2">Q: How do foundation problems affect medical equipment precision?</dt>
                <dd className="text-gray-700 leading-relaxed">
                  A: Foundation settlement or movement can cause floors to become uneven, leading to miscalibration of sensitive medical equipment like MRI machines, CT scanners, and laboratory instruments. This can result in inaccurate diagnoses, compromised treatment efficacy, and costly downtime for recalibration or repairs. Our <strong>medical building foundation repair</strong> ensures a stable base for all your critical equipment.
                </dd>
              </div>
              <div>
                <dt className="text-xl font-semibold text-fcs-blue mb-2">Q: What measures does FCS take to ensure patient safety during repairs?</dt>
                <dd className="text-gray-700 leading-relaxed">
                  A: <strong>Patient safety</strong> is our top priority. We implement strict protocols for noise and dust control, vibration monitoring, and infection prevention. Our teams work closely with facility staff to schedule work during off-peak hours, isolate work zones, and maintain a clean, safe environment throughout the repair process.
                </dd>
              </div>
              <div>
                <dt className="text-xl font-semibold text-fcs-blue mb-2">Q: Are your repair methods compliant with healthcare regulations?</dt>
                <dd className="text-gray-700 leading-relaxed">
                  A: Absolutely. All our <strong>medical building foundation repair</strong> solutions are designed and executed to meet or exceed relevant building codes and healthcare facility regulations. We understand the importance of <strong>regulatory compliance</strong> and provide thorough documentation of our work to support your facility's accreditation and inspection requirements.
                </dd>
              </div>
              <div>
                <dt className="text-xl font-semibold text-fcs-blue mb-2">Q: How does FCS minimize disruption to hospital operations?</dt>
                <dd className="text-gray-700 leading-relaxed">
                  A: We employ non-invasive techniques where possible, utilize quiet equipment, and meticulously plan project timelines to align with your facility's operational schedule. Our goal is to complete repairs efficiently and discreetly, allowing your staff to continue providing uninterrupted patient care. We prioritize <strong>minimal disruption</strong>.
                </dd>
              </div>
              <div>
                <dt className="text-xl font-semibold text-fcs-blue mb-2">Q: What kind of warranty does FCS Foundation Repair offer for commercial projects?</dt>
                <dd className="text-gray-700 leading-relaxed">
                  A: FCS Foundation Repair stands behind its work with a <strong>lifetime warranty</strong> on all commercial foundation repairs. This commitment reflects our confidence in the durability and effectiveness of our solutions, providing you with long-term peace of mind and protecting your investment. We have 25+ years of experience and are BBB A+ rated with 295+ reviews.
                </dd>
              </div>
            </dl>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16 bg-fcs-navy text-white rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Contact FCS Foundation Repair Today</h2>
            <p className="text-xl mb-8">
              For expert <strong>medical building foundation repair</strong> that prioritizes patient safety, regulatory compliance, and operational continuity, trust FCS Foundation Repair. Protect your facility, protect your patients.
            </p>
            <Button className="bg-fcs-orange hover:bg-fcs-orange/90 text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
              <Phone className="mr-2" size={20} />
              Call Us Today: 469-402-1038
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
