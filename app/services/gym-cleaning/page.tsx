import { Metadata } from "next";
import ServiceHero from "@/components/shared/ServiceHero";
import ServiceGetStarted from "@/components/shared/ServiceGetStarted";
import ServiceTestimonials from "@/components/shared/ServiceTestimonials";
import Services from "@/components/Services";
import servicesData from "@/components/constants/serviceData";

export const metadata: Metadata = {
  title: "Gym Cleaning Services Parramatta | Alpha Clean Group Australia",
  description:
    "Professional gym cleaning services in Parramatta. Specialized cleaning solutions for fitness centers and sports facilities. Book online or call us today!",
};

export default function GymCleaningPage() {
  const serviceData = servicesData["gym-cleaning"];

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
