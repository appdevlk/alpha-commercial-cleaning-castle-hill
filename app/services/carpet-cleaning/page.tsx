import { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ServiceGetStarted from "@/components/shared/ServiceGetStarted";
import ServiceTestimonials from "@/components/shared/ServiceTestimonials";
import Services from "@/components/Services";
import servicesData from "@/components/constants/serviceData";

export const metadata: Metadata = {
  title: "Carpet Cleaning Services Parramatta | Alpha Clean Group",
  description:
    "Professional carpet cleaning services in Parramatta. Deep cleaning and stain removal for carpets and rugs. Book online or call us today!",
};

export default function CarpetCleaningPage() {
  const serviceData = servicesData["carpet-cleaning"];

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
