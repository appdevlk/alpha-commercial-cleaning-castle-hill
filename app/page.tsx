import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import ServiceLocations from "@/components/ServiceLocations";
import ContactForm from "@/components/ContactForm";
import WorkProcess from "@/components/WorkProcess";
import ServiceCalculator from "@/components/ServiceCalculator";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkProcess />
      <Solutions />
      <ServiceCalculator />
      <Services />
      <ServiceLocations />
      <ContactForm />
    </main>
  );
}
