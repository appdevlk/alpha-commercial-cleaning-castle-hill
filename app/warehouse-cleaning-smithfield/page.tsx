import { Metadata } from "next";
import Link from "next/link";
import ServiceHero from "@/components/shared/ServiceHero";
import ServiceGetStarted from "@/components/shared/ServiceGetStarted";
import ServiceTestimonials from "@/components/shared/ServiceTestimonials";
import ServiceFAQ from "@/components/ServiceFAQ";
import { servicesData } from "@/components/constants/serviceData";

export const metadata: Metadata = {
    title: "Warehouse Cleaning Smithfield | Professional Cleaning Services",
    description: "Expert Warehouse Cleaning in Smithfield. We are the top-rated cleaning company for Warehouse Cleaning in Smithfield and surrounding Western Sydney. Call 02 9140 6024 for a quote.",
};

export default function ServicePage() {
    const serviceData = servicesData["warehouse-cleaning"];
    const location = "Smithfield";

    // Other locations for linking
    const otherLocations = [
        "Parramatta", "Wetherill Park", "Silverwater", "Auburn", "Blacktown", 
        "Liverpool", "Bankstown", "Castle Hill", "Chatswood", "North Sydney", 
        "Campbelltown", "Penrith", "Ryde", "Macquarie Park", "Strathfield", 
        "Burwood", "Hurstville", "Mascot", "Alexandria", "Surry Hills", 
        "Brookvale", "Smithfield", "Seven Hills", "Baulkham Hills", "Kellyville", 
        "Randwick", "Marrickville", "Cronulla", "St Marys", "Botany"
    ].filter(l => l !== location);

    return (
        <main className="flex flex-col">
            <ServiceHero
                title={`Warehouse Cleaning ${location}`}
                subtitle={`Expert warehouse cleaning services in ${location}. We meet the highest standards of cleanliness and hygiene for your ${location} facility.`}
                description={[
                    `Alpha Clean Group provides specialized cleaning services for warehouse cleaning in ${location}. We understand the unique cleaning requirements of environments where cleanliness is paramount.`,
                    `Our ${location} cleaning specialists use safe, eco-friendly cleaning products that effectively sanitize surfaces without introducing harsh chemicals. We pay special attention to high-touch surfaces to minimize the spread of germs and illnesses.`,
                    `With Alpha Clean Group, you can trust that your facility in ${location} will receive the detailed cleaning it needs to provide a healthy environment. Our flexible scheduling options allow us to work around your operational hours to minimize disruption.`
                ]}
                image={serviceData?.heroImage || '/images/hero-cleaner.jpg'}
            />

            <ServiceGetStarted />

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Comprehensive Warehouse Cleaning in {location}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We cover all aspects of warehouse cleaning to ensure your facility remains compliant and safe.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Warehouse cleaning services Smithfield",
                                "Industrial cleaning Smithfield",
                                "Factory cleaning Smithfield",
                                "Warehouse cleaners Smithfield",
                                "Distribution centre cleaning Smithfield",
                                "Warehouse floor cleaning Smithfield",
                                "Industrial sweep and scrub Smithfield",
                                "High pressure cleaning Smithfield",
                                "Workshop cleaning Smithfield",
                                "Manufacturing plant cleaning Smithfield",
                                "Warehouse dusting Smithfield",
                                "Bond warehouse cleaning Smithfield",
                                "End of lease warehouse cleaning Smithfield",
                                "Commercial warehouse cleaning Smithfield",
                                "Heavy duty cleaning Smithfield",
                                "Industrial degreasing Smithfield",
                                "Warehouse sanitisation Smithfield",
                                "Professional warehouse cleaners Smithfield",
                                "Storage facility cleaning Smithfield",
                                "Smithfield industrial cleaners"
                            ].map((keyword, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                    <span className="text-gray-700 capitalize">{keyword}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ServiceTestimonials testimonials={serviceData?.testimonials || []} />

            <ServiceFAQ serviceName="Warehouse Cleaning" location={location} />

            {/* Nearby Locations Link Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-gray-900">
                            More Warehouse Cleaning Locations
                        </h3>
                        <p className="text-gray-500 mt-2">Serving all suburbs across Sydney</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6">
                        {otherLocations.map((loc) => (
                            <Link 
                                key={loc} 
                                href={`/warehouse-cleaning-${loc.toLowerCase().replace(/ /g, '-')}`}
                                className="text-gray-600 hover:text-primary hover:underline text-sm transition-colors py-1 flex items-center"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-2 flex-shrink-0" />
                                {loc}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
