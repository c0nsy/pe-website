import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { AdditionalServicesSection } from "@/components/additional-services-section"
import { StatsSection } from "@/components/stats-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <AdditionalServicesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
