import { CheckCircle, Building2 } from 'lucide-react';

interface CaseStudy {
  title: string;
  propertyType: string;
  challenge: string;
  solution: string;
  result: string;
}

interface CaseStudiesProps {
  propertyType: string;
}

const caseStudiesData: Record<string, CaseStudy[]> = {
  warehouse: [
    {
      title: "Distribution Center Stabilization",
      propertyType: "200,000 sq ft Warehouse",
      challenge: "Severe settlement under heavy racking systems causing safety concerns and inventory damage",
      solution: "Installed 67 high-capacity steel piers and polyurethane foam injection across 15,000 sq ft",
      result: "Restored floor levelness, eliminated safety hazards, completed during off-hours with zero downtime"
    }
  ],
  retail: [
    {
      title: "Shopping Center Floor Repair",
      propertyType: "45,000 sq ft Retail Center",
      challenge: "Trip hazards from slab settlement creating liability concerns and ADA compliance issues",
      solution: "Polyurethane foam injection to lift settled areas and eliminate elevation changes",
      result: "Completed repairs during business hours, restored ADA compliance, eliminated trip hazards"
    }
  ],
  office: [
    {
      title: "Corporate Headquarters Foundation",
      propertyType: "8-Story Office Building",
      challenge: "Differential settlement affecting structural integrity and tenant spaces",
      solution: "Installed 89 helical piers around building perimeter with precision monitoring",
      result: "Stabilized structure, protected tenant improvements, maintained full occupancy during repairs"
    }
  ],
  apartment: [
    {
      title: "Multi-Family Complex Restoration",
      propertyType: "156-Unit Apartment Community",
      challenge: "Foundation settlement affecting 24 units, creating door/window issues and resident concerns",
      solution: "Phased repair approach with steel pier installation and drainage improvements",
      result: "Restored structural integrity, improved property value, minimal tenant disruption"
    }
  ],
  church: [
    {
      title: "Historic Church Preservation",
      propertyType: "1950s Sanctuary Building",
      challenge: "Foundation settlement threatening historic structure and stained glass windows",
      solution: "Carefully installed 34 steel piers with specialized techniques to protect historic elements",
      result: "Preserved historic integrity, protected irreplaceable features, ensured long-term stability"
    }
  ],
  restaurant: [
    {
      title: "Restaurant Kitchen Foundation",
      propertyType: "Commercial Kitchen Facility",
      challenge: "Floor settlement affecting equipment alignment and health code compliance",
      solution: "Polyurethane injection and targeted pier installation completed during closure days",
      result: "Restored equipment alignment, ensured code compliance, reopened on schedule"
    }
  ],
  industrial: [
    {
      title: "Manufacturing Facility Precision Restoration",
      propertyType: "80,000 sq ft Manufacturing Plant",
      challenge: "Foundation settlement affecting CNC machine precision and production quality",
      solution: "Installed 47 high-capacity steel piers and foam injection across machine shop floor",
      result: "Restored precision tolerances, reduced scrap rates by 73%, improved production efficiency"
    }
  ],
  healthcare: [
    {
      title: "Medical Office Building Stabilization",
      propertyType: "3-Story Medical Complex",
      challenge: "Foundation issues affecting sensitive medical equipment and patient safety",
      solution: "Precision pier installation with infection control protocols and minimal disruption",
      result: "Maintained patient care continuity, protected equipment investments, ensured regulatory compliance"
    }
  ]
};

export default function CaseStudies({ propertyType }: CaseStudiesProps) {
  const caseStudies = caseStudiesData[propertyType] || caseStudiesData.warehouse;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
            Real Project Success Stories
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how FCS Foundation Repair has helped businesses like yours protect their investments
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md border-l-4 border-[#4A7C59]">
              <div className="flex items-start gap-4 mb-4">
                <Building2 className="w-8 h-8 text-[#2C5F8D] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">{study.title}</h3>
                  <p className="text-gray-600 font-semibold">{study.propertyType}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#1E3A5F] mb-2 flex items-center">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm mr-2">Challenge</span>
                  </h4>
                  <p className="text-gray-700 ml-2">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1E3A5F] mb-2 flex items-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mr-2">Solution</span>
                  </h4>
                  <p className="text-gray-700 ml-2">{study.solution}</p>
                </div>

                <div>
                  <h4 className="font-bold text-[#1E3A5F] mb-2 flex items-center">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mr-2">Result</span>
                    <CheckCircle className="w-5 h-5 text-[#4A7C59]" />
                  </h4>
                  <p className="text-gray-700 ml-2">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-[#1E3A5F]">Over 4,790+ foundation repairs completed</span> across Dallas-Fort Worth
          </p>
          <p className="text-gray-600">
            Every project backed by our <span className="font-semibold text-[#4A7C59]">Lifetime Transferable Warranty</span>
          </p>
        </div>
      </div>
    </section>
  );
}
