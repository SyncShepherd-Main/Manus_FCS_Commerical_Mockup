import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Warehouse, Store, Building, Home as HomeIcon, Church, UtensilsCrossed, Factory, Hospital, Phone, Award, Shield, CheckCircle } from "lucide-react";

export default function Home() {
  const propertyTypes = [
    {
      title: "Warehouse Foundation Repair",
      url: "/commercial/warehouse-foundation-repair",
      icon: Warehouse,
      description: "Heavy load specialists for distribution centers and warehouses"
    },
    {
      title: "Retail Foundation Repair",
      url: "/commercial/retail-foundation-repair",
      icon: Store,
      description: "Keep your business open with minimal disruption"
    },
    {
      title: "Office Building Foundation Repair",
      url: "/commercial/office-building-foundation-repair",
      icon: Building,
      description: "Protect your investment and tenant satisfaction"
    },
    {
      title: "Apartment Foundation Repair",
      url: "/commercial/apartment-foundation-repair",
      icon: HomeIcon,
      description: "Multi-family specialists ensuring tenant safety"
    },
    {
      title: "Church Foundation Repair",
      url: "/commercial/church-foundation-repair",
      icon: Church,
      description: "Preserve your sacred space with respectful care"
    },
    {
      title: "Restaurant Foundation Repair",
      url: "/commercial/restaurant-foundation-repair",
      icon: UtensilsCrossed,
      description: "Minimize downtime and protect your equipment"
    },
    {
      title: "Industrial Foundation Repair",
      url: "/commercial/industrial-foundation-repair",
      icon: Factory,
      description: "Heavy-duty solutions for manufacturing facilities"
    },
    {
      title: "Healthcare Foundation Repair",
      url: "/commercial/healthcare-foundation-repair",
      icon: Hospital,
      description: "Patient safety first with regulatory compliance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2C5F8D] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            FCS Foundation Commercial Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert Commercial Foundation Repair Throughout Dallas-Fort Worth
          </p>
          <div className="flex justify-center items-center space-x-6 mb-8 flex-wrap gap-4">
            <div className="flex items-center">
              <CheckCircle className="text-[#4A7C59] mr-2" /> BBB A+ Rated
            </div>
            <div className="flex items-center">
              <Award className="text-[#FF8C00] mr-2" /> 25+ Years Experience
            </div>
            <div className="flex items-center">
              <Shield className="text-[#4A7C59] mr-2" /> Lifetime Warranty
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-[#FF8C00] mr-2" /> 295+ Reviews
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF8C00] hover:bg-[#4A7C59] text-white font-bold py-3 px-8 rounded-full text-lg inline-flex items-center">
              <Phone className="mr-2" /> Call Now: 469-402-1038
            </Button>
            <Link href="/commercial-foundation-repair">
              <Button className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg">
                Learn More About Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Hub Link */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Link href="/commercial-foundation-repair">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-[#2C5F8D]">
                <Building2 className="w-16 h-16 text-[#2C5F8D] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  Commercial Foundation Repair - Main Hub
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Comprehensive guide to commercial foundation repair services in Dallas-Fort Worth. Learn about our inspection process, repair methods, case studies, and why business owners choose FCS Foundation Repair.
                </p>
                <Button className="bg-[#2C5F8D] hover:bg-[#1E3A5F] text-white font-bold py-2 px-6 rounded">
                  View Complete Commercial Services Guide →
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Types Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">
              Commercial Property Types We Serve
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized foundation repair solutions tailored to your specific commercial property needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((property, index) => {
              const Icon = property.icon;
              return (
                <Link key={index} href={property.url}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer border-l-4 border-[#4A7C59] h-full">
                    <Icon className="w-12 h-12 text-[#2C5F8D] mb-4" />
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {property.description}
                    </p>
                    <span className="text-[#FF8C00] font-semibold hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose FCS */}
      <section className="py-16 bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose FCS Foundation Repair?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Over 25 years of commercial foundation repair excellence in Dallas-Fort Worth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <Award className="w-16 h-16 text-[#FF8C00] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Proven Expertise</h3>
              <p className="text-gray-200">
                25+ years serving commercial clients with BBB A+ rating and 295+ positive reviews
              </p>
            </div>

            <div className="text-center">
              <Shield className="w-16 h-16 text-[#4A7C59] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Lifetime Warranty</h3>
              <p className="text-gray-200">
                Comprehensive lifetime transferable warranty on all structural foundation repairs
              </p>
            </div>

            <div className="text-center">
              <Building2 className="w-16 h-16 text-[#FF8C00] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Minimal Disruption</h3>
              <p className="text-gray-200">
                Flexible scheduling including nights and weekends to keep your business operational
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C5F8D] to-[#4A7C59] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Protect Your Commercial Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact FCS Foundation Repair today for a free commercial property assessment
          </p>
          <Button className="bg-[#FF8C00] hover:bg-white hover:text-[#1E3A5F] text-white font-bold py-4 px-10 rounded-full text-xl inline-flex items-center">
            <Phone className="mr-2" /> Call for Free Estimate: 469-402-1038
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A5F] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">FCS Foundation Repair and Concrete Services</p>
          <p className="text-gray-300 mb-4">Serving Dallas-Fort Worth Since 1999</p>
          <p className="text-gray-400">
            © 2026 FCS Foundation Repair. All rights reserved. | BBB A+ Rated | Licensed & Insured
          </p>
        </div>
      </footer>
    </div>
  );
}
