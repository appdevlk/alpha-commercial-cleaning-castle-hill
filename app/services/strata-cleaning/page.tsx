import { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ServiceGetStarted from "@/components/shared/ServiceGetStarted";
import ServiceTestimonials from "@/components/shared/ServiceTestimonials";
import Services from "@/components/Services";
import servicesData from "@/components/constants/serviceData";

export const metadata: Metadata = {
  title: "Strata Cleaning Services Parramatta | Alpha Clean Group Australia",
  description:
    "Professional strata cleaning services in Parramatta. Specialized cleaning solutions for strata properties and common areas. Book online or call us today!",
};

export default function StrataCleaningPage() {
  const serviceData = servicesData["strata-cleaning"];

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
