import { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ServiceGetStarted from "@/components/shared/ServiceGetStarted";
import ServiceTestimonials from "@/components/shared/ServiceTestimonials";
import Services from "@/components/Services";
import servicesData from "@/components/constants/serviceData";

export const metadata: Metadata = {
  title:
    "Commercial Cleaning Services Parramatta | Alpha Clean Group Australia",
  description:
    "Professional commercial cleaning services in Parramatta. Customized cleaning solutions for your business. Book online or call us today!",
};

export default function CommercialCleaningPage() {
  const serviceData = servicesData["commercial-cleaning"];

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
