import { createFileRoute } from "@tanstack/react-router";
import { HeroSlider } from "@/components/site/HeroSlider";
import {
  AboutSection, AdmissionsCTA, AnnouncementTicker, FacilitiesSection,
  GalleryPreview, NewsSection, ProgramsSection, TestimonialsSection, WhyChooseSection,
} from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Holy Fathima High School, Hafeez Pet — English-medium School in Hyderabad" },
      { name: "description", content: "Premium English-medium school in Hafeezpet, Hyderabad. Nursery to +2. Smart classrooms, qualified faculty, safe campus. Admissions open." },
      { property: "og:title", content: "Holy Fathima High School, Hafeez Pet" },
      { property: "og:description", content: "Building bright futures since 2003. English-medium education from Nursery to +2 in Hafeezpet, Hyderabad." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSlider />
      <AnnouncementTicker />
      <AboutSection />
      <ProgramsSection />
      <FacilitiesSection />
      <WhyChooseSection />
      <GalleryPreview />
      <TestimonialsSection />
      <AdmissionsCTA />
      <NewsSection />
    </>
  );
}
