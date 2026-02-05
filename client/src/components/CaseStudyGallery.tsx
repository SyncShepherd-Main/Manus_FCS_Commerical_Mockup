import { Link } from 'wouter';
import { Building2, ArrowRight, CheckCircle } from 'lucide-react';

interface CaseStudy {
  title: string;
  propertyType: string;
  challenge: string;
  result: string;
  link: string;
  icon: string;
}

const featuredCaseStudies: CaseStudy[] = [
  {
    title: "Distribution Center Stabilization",
    propertyType: "Warehouse",
    challenge: "Severe settlement under heavy racking systems causing safety concerns",
    result: "Restored floor levelness, eliminated safety hazards, zero downtime",
    link: "/commercial/warehouse-foundation-repair",
    icon: "🏭"
  },
  {
    title: "Shopping Center Floor Repair",
    propertyType: "Retail",
    challenge: "Trip hazards creating liability concerns and ADA compliance issues",
    result: "Completed during business hours, restored ADA compliance",
    link: "/commercial/retail-foundation-repair",
    icon: "🏬"
  },
  {
    title: "Corporate Headquarters Foundation",
    propertyType: "Office Building",
    challenge: "Differential settlement affecting structural integrity and tenant spaces",
    result: "Stabilized structure, maintained full occupancy during repairs",
    link: "/commercial/office-building-foundation-repair",
    icon: "🏢"
  },
  {
    title: "Multi-Family Complex Restoration",
    propertyType: "Apartment",
    challenge: "Foundation settlement affecting 24 units and resident concerns",
    result: "Restored structural integrity, improved property value",
    link: "/commercial/apartment-foundation-repair",
    icon: "🏘️"
  },
  {
    title: "Historic Church Preservation",
    propertyType: "Church",
    challenge: "Foundation settlement threatening historic structure",
    result: "Preserved historic integrity, ensured long-term stability",
    link: "/commercial/church-foundation-repair",
    icon: "⛪"
  },
  {
    title: "Restaurant Kitchen Foundation",
    propertyType: "Restaurant",
    challenge: "Floor settlement affecting equipment and health code compliance",
    result: "Restored equipment alignment, ensured code compliance",
    link: "/commercial/restaurant-foundation-repair",
    icon: "🍽️"
  },
  {
    title: "Manufacturing Facility Restoration",
    propertyType: "Industrial",
    challenge: "Settlement affecting CNC machine precision and production quality",
    result: "Reduced scrap rates by 73%, improved production efficiency",
    link: "/commercial/industrial-foundation-repair",
    icon: "🏭"
  },
  {
    title: "Medical Office Building Stabilization",
    propertyType: "Healthcare",
    challenge: "Foundation issues affecting medical equipment and patient safety",
    result: "Maintained patient care continuity, ensured regulatory compliance",
    link: "/commercial/healthcare-foundation-repair",
    icon: "🏥"
  }
];

export default function CaseStudyGallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">
            Commercial Foundation Repair Success Stories
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real projects across Dallas-Fort Worth demonstrating our expertise in commercial foundation repair
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredCaseStudies.map((study, index) => (
            <Link key={index} href={study.link}>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border-t-4 border-[#4A7C59] h-full flex flex-col">
                <div className="text-4xl mb-3">{study.icon}</div>
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">{study.title}</h3>
                <p className="text-sm text-[#FF8C00] font-semibold mb-3">{study.propertyType}</p>
                
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Challenge:</span> {study.challenge}
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    <span className="font-semibold text-[#4A7C59]">Result:</span> {study.result}
                  </p>
                </div>

                <div className="flex items-center text-[#2C5F8D] font-semibold text-sm mt-auto pt-3 border-t">
                  Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2C5F8D] mb-2">4,790+</div>
              <div className="text-gray-600">Foundation Repairs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2C5F8D] mb-2">6,790+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#2C5F8D] mb-2">295+</div>
              <div className="text-gray-600">5-Star Reviews</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-8 h-8 text-[#4A7C59]" />
                <div className="text-left">
                  <div className="font-bold text-[#1E3A5F]">BBB A+</div>
                  <div className="text-sm text-gray-600">Accredited</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Every commercial project backed by our <span className="font-semibold text-[#4A7C59]">Lifetime Transferable Warranty</span>
          </p>
        </div>
      </div>
    </section>
  );
}
