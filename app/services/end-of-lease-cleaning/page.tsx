import { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ServiceGetStarted from "@/components/shared/ServiceGetStarted";
import ServiceTestimonials from "@/components/shared/ServiceTestimonials";
import Services from "@/components/Services";
import servicesData from "@/components/constants/serviceData";

export const metadata: Metadata = {
  title:
    "End of Lease Cleaning Services Parramatta | Alpha Clean Group Australia",
  description:
    "Professional end of lease cleaning services in Parramatta. Specialized cleaning solutions for rental properties. Book online or call us today!",
};

export default function EndOfLeaseCleaningPage() {
  const serviceData = servicesData["end-of-lease-cleaning"];

  return (
    <main className="flex flex-col">
      <ServiceHero
        title={serviceData.heroTitle}
        subtitle={serviceData.heroSubtitle}
        description={serviceData.heroDescription}
        image={serviceData.heroImage}
      />
      <ServiceGetStarted />
      <ServiceTestimonials testimonials={serviceData.testimonials} />
      <Services />
    </main>
  );
}
